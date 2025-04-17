export const upcomingTalks = [
  {
    id: "veritas-image-transformations",
    speaker: {
      name: "Binyi Chen",
      affiliation: {
        name: "Stanford",
        website: "#"
      }
    },
    topic: "VerITAS: Verifying Image Transformations at Scale",
    topicLink: "https://eprint.iacr.org/2024/1066",
    date: "Thursday, April 17, 1:00 PM ET"
  },
  {
    id: "gpu-gkr-acceleration",
    speaker: {
      name: "Simon Lau",
      affiliation: {
        name: "Polyhedra Network",
        website: "https://www.polyhedra.network/"
      }
    },
    topic: "New result on GPU accelerating GKR",
    topicLink: "https://eprint.iacr.org/2024/1066",
    date: "Friday, April 25, 1:00 PM ET"
  }
];

export const pastTalks = [
  {
    id: "mercury-multilinear-pcs",
    speaker: {
      name: "Liam Eagen",
      affiliation: {
        name: "Alpen Labs",
        website: "#"
      }
    },
    topic: "MERCURY: A multilinear Polynomial Commitment Scheme with constant proof size and no prover FFTs",
    topicLink: "https://eprint.iacr.org/2025/385",
    date: "Friday, April 11, 11:00 AM ET",
    recording: "https://zoom.us/rec/share/U5Bj6EIZX_G9j21vnbQ0Qka-MTshpgXLuVVWNOHeX5TbJY0RxKyNAxjlR_a3Py6a.Vdor_p81qLWE5BLr",
    recordingPassword: "!D4.6IZ^",
  },
  {
    id: "zkfhe",
    speaker: {
      name: "Fengrun Liu",
      personalWebsite: "",
      affiliation: {
        name: "Primus Labs",
        website: "https://primuslabs.xyz/"
      }
    },
    topic: "HasteBoots: Proving FHE Bootstrapping in Seconds",
    topicLink: "",
    date: "Friday, Jan 10, 02:00 PM PST / 05:00 PM EST / 11:00 PM CET",
    recording: "https://zoom.us/rec/share/huwOKOKQr7zRyQnrwKXk1lhxEfgL2PRi8HIaPX4wB7-6EuE8bpy8SHED7cYgaNaN.XRezgovwQNh3QiUe",
    recordingPassword: "@u61w1Y@",
  },
  {
    id: "Ceno",
    speaker: {
      name: "Tianyi Liu",
      personalWebsite: "https://liutianyi.site/",
      affiliation: {
        name: "UIUC",
        website: "#"
      }
    },
    topic: "Ceno: Non-uniform, Segment and Parallel Zero-knowledge Virtual Machine",
    topicLink: "https://eprint.iacr.org/2024/387.pdf",
    date: "Thursday, Dec 19, 10:00 AM PST / 1:00 PM EST / 7:00 PM CET",
    recording: "https://zoom.us/rec/share/GCe2oEwBz_dWS2KUMPbvwwZo2kN3517UqG2SMsMBF_MuVwU0_vd5PDnkjgP7M3GA.1OBWLEhS1hPvney9",
    recordingPassword: "j^dZe7xT",
  },
  {
    id: "Khatam",
    speaker: {
      name: "Hadas Zeilberger",
      personalWebsite: "https://www.hadasze.me/",
      affiliation: {
        name: "Yale",
        website: "https://sites.google.com/view/yacl"
      }
    },
    topic: "Khatam : Proximity Gaps For Multilinear Polynomial Commitments",
    topicLink: "#",
    date: "Friday, Dec 13, 10:00 AM PST / 1:00 PM EST / 7:00 PM CET",
    recording: "https://zoom.us/rec/share/b3iIaI5CE2wJjviQJ8owQtNdsU2w6VTk-SrYTwpwPsz4vQ_xIReC515iPw5g_t0t.Xn7MbQ1RLRATYqIX",
    recordingPassword: "6c3^%prw",
  },
  {
    id: "zkml",
    speaker: {
      name: "Tiancheng Xie",
      personalWebsite: "https://niconiconi.github.io/en_index.html",
      affiliation: {
        name: "Polyhedra",
        website: "https://www.polyhedra.network/"
      }
    },
    topic: "zkPyTorch: Proving Llama-3 8B within minutes (tentitive)",
    topicLink: "https://x.com/Tiancheng_Xie/status/1861152632334630968",
    date: "Friday, Dec 6, 10:00 AM PST / 1:00 PM EST / 7:00 PM CET",
    recording: "https://zoom.us/rec/share/GzDsFxN8DblGuQVTsJaza5_zlwI95xK2lISq6w8x2GBbAk2GNbjofqywM24ONxcH.VFx-yn9JW5hUTCVO",
    recordingPassword: ".=qzQr7V",
  },
  {
    id: "10x-faster-sumcheck-2024",
    speaker: {
      name: "Suyash Bagad",
      personalWebsite: "https://www.ingonyama.com/authors/suyash-bagad",
      affiliation: {
        name: "Ingonyama",
        website: "https://www.ingonyama.com/"
      }
    },
    topic: "10x Faster Sumcheck - A breakthrough for sumcheck over binary tower fields",
    topicLink: "https://ingonyama.slides.com/suyash67/10x-faster-sumcheck-over-binary-tower-fields/fullscreen",
    date: "Friday, Nov 22, 10:00 AM PST / 1:00 PM EST / 7:00 PM CET",
    bio: "Suyash is a researcher at Ingonyama, working on algorithms to accelerate proof generation. He previously was a cryptography engineer at Aztec.",
    recording: "https://zoom.us/rec/share/0t-jmB8YWE-F_ILHno4FVPFBFozRAc8jLjN3WdWu75QLy1_vhsMe4dT6i7SdqYf8.vLF1y3wcQHHIM61s?startTime=1732298663000",
    recordingPassword: "bSY70A%z",
    abstract: "Sumcheck has become the new bottleneck for a SNARK prover when working over towers of Binary fields, especially with the emergence of fast commitment schemes like Binius. We devise a novel algorithm based on the Toom-Cook multiplication technique to accelerate the sumcheck prover by atleast an order of magnitude.\n\nIn this talk, we will dive into the details of our algorithm and discuss some encouraging results with our implementation. Our techniques also apply to the sumcheck more generally in case when the witness magnitude is \"small\"."
  },
  {
    id: "pari-and-garuda-2024",
    speaker: {
      name: "Alireza Shirzad",
      personalWebsite: "https://alireza-shirzad.github.io/",
      affiliation: {
        name: "University of Pennsylvania",
        website: "https://www.upenn.edu/"
      }
    },
    topic: "Pari and Garuda: Pushing the Frontier of SNARK Efficiency",
    topicLink: "https://eprint.iacr.org/2024/1245",
    date: "Thursday, Nov 14, 11:00 AM PST / 2:00 PM EST / 8:00 PM CET",
    bio: "Alireza Shirzad is a first-year PhD student at Penn advised by Dr. Pratyush Mishra. He is primarily interested in designing proof systems and SNARKs. Before coming to Penn, He obtained his Master's degree in Secure communications and Cryptography in 2023 and a bachelor's degree in Electrical Engineering in 2021 from Sharif University of Technology.",
    recording: "https://zoom.us/rec/share/n2ZGZ0A3srcvEZesR8NV5K9_veatDqas117ZS-02lTnHj03nijVK__HdFvwqJYUd.h7TRNBQjSQ-ERIm6?startTime=1731611077000",
    recordingPassword: "9pu*QhQ&",
    abstract: "SNARKs are powerful cryptographic primitives that allow a prover to produce a succinct proof of a computation. Two key goals of SNARK research are to minimize the size of the proof and to minimize the time required to generate the proof. In this work, we present new SNARK constructions that push the frontier on both of these goals.\n\nOur first construction, Pari, is a SNARK that achieves the smallest proof size amongst *all* known SNARKs. Specifically, Pari achieves a proof size of just two group elements and two field elements, which, when instantiated with the BLS12-381 curve, totals just 160 bytes, smaller than that of Groth16 [Groth, EUROCRYPT '16] and Polymath [Lipmaa, CRYPTO '24].\n\nOur second construction, Garuda, is a SNARK that reduces proof generation time by supporting, for the first time, arbitrary \"custom\" gates and *free* linear gates. To demonstrate Garuda's performance, we implement and evaluate it, and show that it provides significant prover-time savings compared to both the state-of-the-art SNARKs (Groth16 and HyperPlonk [EUROCRYPT '22])\n\nBoth constructions rely on a new cryptographic primitive: \"equifficient\" polynomial commitment schemes that enforce that committed polynomials have the same representation in particular bases. We provide both rigorous security definitions for this primitive as well as efficient constructions for univariate and multilinear polynomials."
  },
  {
    id: "whir-rs-proximity-testing",
    speaker: {
      name: "Giacomo Fenzi",
      personalWebsite: "https://gfenzi.io/",
      affiliation: {
        name: "EPFL",
        website: "https://www.epfl.ch/en/"
      }
    },
    topic: "WHIR: Reed–Solomon Proximity Testing with Super-Fast Verification",
    topicLink: "https://eprint.iacr.org/2024/1586",
    date: "Friday, Nov 8, 10:00 AM PST / 1:00 PM EST / 7:00 PM CET",
    recording: "https://zoom.us/rec/share/q_hqTk82gqREgs-dvNG-ZVPyfLnP7uh-etTvfdDzDUHg0wR-c_6ia1azt6cjwzw4.otu4SBWSnpv3N9Ul?startTime=1731089014000",
    recordingPassword: "4%tp7S!W",
    abstract: "We introduce WHIR, a new IOP of proximity that offers small query complexity and exceptionally fast verification time. The WHIR verifier typically runs in a few hundred microseconds, whereas other verifiers in the literature require several milliseconds (if not much more). This significantly improves the state of the art in verifier time for hash-based SNARGs (and beyond).\n\nCrucially, WHIR is an IOP of proximity for constrained Reed–Solomon codes, which can express a rich class of queries to multilinear polynomials and to univariate polynomials. In particular, WHIR serves as a direct replacement for protocols like FRI, STIR, BaseFold, and others. Leveraging the rich queries supported by WHIR and a new compiler for multilinear polynomial IOPs, we obtain a highly efficient SNARG for generalized R1CS.\n\nAs a comparison point, our techniques also yield state-of-the-art constructions of hash-based (non-interactive) polynomial commitment schemes for both univariate and multivariate polynomials (since sumcheck queries naturally express polynomial evaluations). For example, if we use WHIR to construct a polynomial commitment scheme for degree 222, with 100 bits of security, then the time to commit and open is 1.2 seconds, the sender communicates 63 KiB to the receiver, and the opening verification time is 360 microseconds.\n\nReed-Solomon proximity testing is a fundamental primitive in the design of probabilistically checkable proofs (PCPs) and succinct non-interactive arguments (SNARGs). In this work, we introduce WHIR, a novel Reed-Solomon proximity testing protocol that achieves super-fast verification. Our protocol leverages a combination of techniques from coding theory and cryptography to achieve a verification time that scales logarithmically with the degree of the polynomial, a significant improvement over existing methods. We provide a detailed security analysis of WHIR and demonstrate its practical efficiency through extensive benchmarks. Our results show that WHIR can lead to substantial improvements in the verification time of SNARGs based on Reed-Solomon proximity testing, making it a promising building block for future cryptographic protocols."
  },
  {
    id: "blaze-fast-snarks",
    speaker: {
      name: "Ron Rothblum",
      personalWebsite: "https://csaws.cs.technion.ac.il/~rothblum/",
      affiliation: {
        name: "Succinct",
        website: "https://succinct.xyz/"
      }
    },
    topic: "Blaze: Fast SNARKs from Interleaved RAA Codes",
    topicLink: "https://eprint.iacr.org/2024/1609",
    date: "Friday, Nov 1, 11:00 AM PST / 2:00 PM EST / 8:00 PM CET",
    recording: "https://zoom.us/rec/share/tjM6pBsi7pdkc-E7z1V9k_M9wZJP0bqeo4yrRPwcgL0x7CaDOJrwmQTFaxlaervg.OUD7XDL8e5jOnD8Z",
    recordingPassword: "QLd!r0y6",
    abstract: "In this work we construct a new and highly efficient multilinear polynomial commitment scheme (MLPCS) over binary fields, which we call Blaze. Polynomial commitment schemes allow a server to commit to a large polynomial and later decommit to its evaluations. Such schemes have emerged as a key component in recent efficient SNARK constructions.\n\nBlaze has an extremely efficient prover, both asymptotically and concretely. The commitment is dominated by 8n field additions (i.e., XORs) and one Merkle tree computation. The evaluation proof generation is dominated by 6n additions and 5n multiplications over the field. The verifier runs in time Oλ(log2⁡(n)). Concretely, for sufficiently large message sizes, the prover is faster than all prior schemes except for Brakedown (Golovnev et al., Crypto 2023), but offers significantly smaller proofs than the latter.\n\nThe scheme is obtained by combining two ingredients:\n\n1. Building on the code-switching technique (Ron-Zewi and Rothblum, JACM 2024), we show how to compose any error-correcting code together with an interactive oracle proof of proximity (IOPP) underlying existing MLPCS constructions, into a new MLPCS. The new MLPCS inherits its proving time from the code's encoding time, and its verification complexity from the underlying MLPCS. The composition is distinctive in that it is done purely on the information-theoretic side.\n\n2. We apply the above methodology using an extremely efficient error-correcting code known as the Repeat-Accumulate-Accumulate (RAA) code. We give new asymptotic and concrete bounds, which demonstrate that (for sufficiently large message sizes) this code has a better encoding time vs. distance tradeoff than previous linear-time encodable codes that were considered in the literature."
  },
  {
    id: "gpu-sumcheck-acceleration",
    speaker: {
      name: "Simon Lau",
      affiliation: {
        name: "Polyhdera Network",
        website: "https://www.polyhedra.network/"
      }
    },
    topic: "Accelerating SumChecks using GPUs, comparing CUDA and Triton frameworks",
    date: "Friday, October 18, 10:00 AM PST / 1:00 PM EST / 7:00 PM CET",
    recording: "https://drive.google.com/file/d/13S6VBNYP0g_9Asq7aPQ3S4g3qcAn7FSW/view?usp=sharing",
    slides: "https://docs.google.com/presentation/d/1ODt7MskLz_REANl4yBuSSqEts3aHf3xfHYZRGjCPYLs/edit#slide=id.p"
  },
  {
    id: "stir-rs-proximity",
    speaker: {
      name: "Giacomo Fenzi",
      personalWebsite: "https://gfenzi.io/",
      affiliation: {
        name: "EPFL",
        website: "https://people.epfl.ch/giacomo.fenzi"
      }
    },
    topic: "STIR: Reed–Solomon Proximity Testing with Fewer Queries",
    topicLink: "https://eprint.iacr.org/2024/390",
    date: "Wednesday, Oct 16, 11:00 AM PST / 2:00 PM EST / 8:00 PM CET",
    recording: "https://www.youtube.com/watch?v=wYUnwLv-5Sg"
  },
  {
    id: "beta-cascade-optimization",
    speaker: {
      name: "Vishruti Ganesh",
      personalWebsite: "https://vishruti.me/",
      affiliation: {
        name: "Modulus Labs",
        website: "https://www.moduluslabs.xyz/"
      }
    },
    topic: '"Beta Cascade" optimization for prover\'s sumcheck evaluation function',
    date: "Thursday, Oct 3, 1 PM PT / 4 PM ET / 10 PM CET",
    recording: "https://zoom.us/rec/share/66in8tv37LQbix6WJwFkvOjFJ5KoyYDwC8U85YAPAHSMBP-O_KVTKnO63-uyh0Sp.6_1Pk7vZN_5PsWJK",
    recordingPassword: "7s?MHjHv"
  },
  {
    id: "pianist-distributed-zkp",
    speaker: {
      name: "Tiancheng Xie",
      personalWebsite: "https://niconiconi.github.io/en_index.html",
      affiliation: {
        name: "Polyhdera Network",
        website: "https://www.polyhedra.network/"
      }
    },
    topic: "Pianist - A fully distributed approach to ZKP generation",
    topicLink: "https://eprint.iacr.org/2023/1271",
    date: "Friday, Sept 27, 1 PM PT / 4 PM ET / 10 PM CET",
    recording: "https://zoom.us/rec/share/0ZRmK_qx96xaukhbD8P9DcvbpAMEGwqzGKWgZZ7k7rlk7Bz6t4b77hQ-HHJ016nK.MqcHbX9MZJurY3tz",
    recordingPassword: "9KV#RkJa"
  },
  {
    id: "keccak-gf2-128",
    speaker: {
      name: "Lev Soukhanov",
      affiliation: {
        name: "Privacy Scaling Explorations",
        website: "https://pse.dev/"
      }
    },
    topic: "Turbocharging Keccak circuits with GF2_128 field",
    date: "Friday, Sept 13, 8 AM PT / 11 AM EST / 5 PM CET / 11 PM SGT",
    recording: "https://zoom.us/rec/share/ocmi9P9GAQNqQKAqzcSfUgoAurTp6-ky7NBC0mYIX4J9MFIm_vyfpRVpva8WNjP9.rbVYlehgHEoFA7wZ",
    recordingPassword: "#RjuB+Y5",
    slides: "https://hackmd.io/@levs57/B1uG_Hx6A#/"
  },
  {
    id: "expander-prover-tricks",
    speaker: {
      name: "Zhenfei Zhang",
      personalWebsite: "https://zhenfeizhang.github.io/",
      affiliation: {
        name: "Polyhdera Network",
        website: "https://www.polyhedra.network/"
      }
    },
    topic: "Tricks used in Expander prover, including GKR² to accelerate Poseidon hash functions",
    date: "Friday, Sept 6, 8 AM PT / 11 AM EST / 5 PM CET / 11 PM SGT",
    recording: "https://zoom.us/rec/share/al5gScEwEhG3bdGUcQEZj2AaTtWhEb3MJx9oZ7J1JmpDQsZRxyWHlvIhihQCX8Hs.dR-SNfe0o0L0LpTd",
    recordingPassword: "4YYnVV1!"
  }
];

export const allTalks = [...upcomingTalks, ...pastTalks];

export const findTalkById = (id) => {
  return allTalks.find(talk => talk.id === id);
};
