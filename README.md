# Sumcheck Builders Website

This project is the official website for Sumcheck Builders, built with React.

## Website Management

### Publishing New Talks

To add a new upcoming talk:

1. Open `sumcheck-builders-react/src/components/UpcomingTalks.js`.
2. Add a new object to the talks array:

```javascript
{
  speaker: "Speaker Name",
  topic: <a href="link-to-topic">Talk Title</a>,
  date: "Day, Month Date, Time in PST / EST / CET format",
}
```

3. Place new talks at the beginning of the array.

### Modifying Past Talks

To update past talks:

1. Open `sumcheck-builders-react/src/components/PastTalks.js`.
2. Add or modify talk objects in the array:

```javascript
{
  speaker: "Speaker Name",
  topic: <a href="link-to-topic">Talk Title</a>,
  date: "Day, Month Date, Time in PST / EST / CET format",
  recording: <><a href="recording-link">Recording</a>, Passcode: password</>,
  slides: <a href="slides-link">Slides</a> // Optional
}
```

### Adding Resources

To add new resources:

1. Open `sumcheck-builders-react/src/components/Resources.js`.
2. Add a new `<li>` element within the `<ul>`:

```html
<li>
  <a href="resource-link" target="_blank" rel="noopener noreferrer">
    Resource Title
  </a>
</li>
```

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory (`sumcheck-builders-react`), you can run:

- `npm start`: Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.

### Learn More

For more information about React and Create React App:

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)

## Deployment

This project is set up to deploy to GitHub Pages. The necessary configuration is already in place in the `package.json` file.

To deploy:

1. Ensure you're in the `sumcheck-builders-react` directory.

2. If you haven't already, install the project dependencies:
   ```
   npm install
   ```

3. When you're ready to deploy, run:
   ```
   npm run deploy
   ```

   This script will build the project and push the built files to the `gh-pages` branch of the repository.

4. GitHub Pages will serve your site from the `gh-pages` branch. The site will be available at https://sumcheck-builders.polyhedra.network.

After making changes:

1. Test the website locally using `npm start`.
2. Commit and push your changes to the repository.
3. Run `npm run deploy` to update the live site.

For more detailed information about deploying React apps to GitHub Pages, refer to the [Create React App deployment documentation](https://create-react-app.dev/docs/deployment/#github-pages).
