# quiz

[site deployed at q-quiz.netlify.com](https://q-quiz.netlify.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/8915e506-ec17-42f1-8e9a-d01514675ee1/deploy-status)](https://app.netlify.com/sites/q-quiz/deploys)

## how to run

- install dependencies with `yarn`
- develop locally with `yarn dev`
- run tests with `yarn test`
- build production-ready code with `yarn deploy` (should be run on netlify / CD platform)

## requirements

the system should:

- display and allow the user to take a quiz with at least 3 questions & 4 choices
- display questions sequentially and go to the next question when each is answered
- track & display quiz results
- provide the user a way to add and remove questions and choices
- provide an API to access the quiz and dynamically generate it

## tech stack

I built a React app in Typescript, using the create-react-app tool and jest for testing. The quiz is displayed based on pre-generated static JSON files which are produced by getting content from a headless CMS ([Takeshape](https://takeshape.io/)). The site was deployed on [Netlify](https://netlify.com)'s CDN, such that any update to github or the CMS will trigger a new build. This app is serverless, following [JAMstack](https://jamstack.org) architecture.

## design

My approach: This project was treated like a client project rather than an internal tool.

audiences:

- end user
- business client
- engineers

how I catered to these audiences:

- user and client: non-technical but proficient with web interfaces.
  - Integrated headless CMS for editing.
  - Streamlined quiz flow.
  - used some of your branding (fonts and colors).
  - Automated deployment on content update.
- engineers:
  - React, Jest, and webpack for streamlined developing.
  - Netlify for automated deployment on git push.

## directory structure

```bash
├── config # dev & build config
├── functions # netlify serverless functions
│   └── query.js
├── package.json
├── scripts # dev scripts
├── src
│   ├── app # react components
│   │   ├── app-home
│   │   ├── button
│   │   ├── choice
│   │   ├── end
│   │   ├── index.css
│   │   ├── loading
│   │   ├── question
│   │   ├── serviceWorker.ts
│   │   ├── survey
│   │   └── util
│   ├── index.tsx # app entry point
│   ├── react-app-env.d.ts
│   └── templates # CMS-generated static JSON
│       ├── data # graphql data to get from CMS
│       └── static-api # output JSON templates
├── static # assets
│   ├── favicon.ico
│   ├── index.html # HTML entry point
│   └── manifest.json
├── tsconfig.json # typescript config
├── tsg.yml # CMS config
```
