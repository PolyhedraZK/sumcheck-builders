#!/bin/bash

url=${INPUT_URL}
api_key=${INPUT_API_KEY}
model=${INPUT_MODEL}
repo_path=${INPUT_REPO_PATH}
style=${INPUT_STYLE}
language=${INPUT_LANGUAGE}

if [ ! $api_key ]; then
    echo "api key is required"
    exit -1
fi

if [ ! -d "$repo_path" ]; then
    echo "repo path does not exist"
    exit -2
fi

if [ ! $language ]; then
    echo "language is required"
    exit -3
fi  

if [ ! $style ]; then
    echo "style is required"
    exit -4
fi  

if [ ! $model ]; then
    echo "model is required"
    exit -5
fi

files=""
language=$(echo $language | tr '[:upper:]' '[:lower:]')
case $language in
    "rust"|"rs")
        language="Rust"
        files=$(git ls-files '*.rs')
        ;;
    "golang"|"go")
        language="Golang"
        files=$(git ls-files '*.go')
        ;;
    "python"|"py")
        language="Python"
        files=$(git ls-files '*.py')
        ;;
    "javascript"|"js")
        language="JavaScript"
        files=$(git ls-files '*.js')
        ;;
    "typescript"|"ts")
        language="TypeScript"
        files=$(git ls-files '*.ts')
        ;;
    "solidity"|"sol")
        language="Solidity"
        files=$(git ls-files '*.sol')
        ;;
    *)
        echo "Invalid language"
        exit -6
        ;;
esac

for file in ${files[*]}
do
    code=$(cat "$file")
    system_message='You are a '${language}' code style evaluator that checks code against style guidelines.
EXAMPLE JSON OUTPUT:
{
    \"violations\": [
        { \"line number\": \"reason\" },
        { \"line number\": \"reason\" },
    ],
    \"score\":0
}'

    user_message="Style Guide: 

${style} 

Code to evaluate: 

${code}"
    user_message=$(echo $user_message | sed 's/{/\\{/g' | sed 's/}/\\}/g' | sed 's/\"/\\"/g' | sed 's/\\\\"/\\"/g') 

    json='{
    "response_format": {"type": "json_object"},
    "model": "'$model'",
    "messages": [
        {"role": "system", "content": "'$system_message'"},
        {"role": "user", "content": "'$user_message'"}
    ],
    "stream": false
}'

    response=$(curl -s -X POST "$url" \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer $api_key" \
        --data "${json}")
    
    echo $file
    # 检查是否有错误
    error=$(echo $response | jq -r '.error // empty')
    if [ ! -z "$error" ]; then
        echo "Error: $error"
        continue
    fi

    # 提取内容
    content=$(echo $response | jq -r '.choices[0].message.content // "No content found"')
    echo "$content"
done
exit 0
