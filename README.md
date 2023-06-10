# Capstone project information

## Project information

-   Project name: [Online Therapist]
-   Project description: This website aims to connect therapists and counselors with those who need help and provide more information about mental health services.
-   Technology used: Nextjs, TailwindCSS, i18next, Husky, Prettier, Eslint, Commitlinter (Conventional Commits)
-   Team members:

    -   Abrar Alkhorasani
    -   Jehad Almaliki
    -   Mohammed Aljaberi
    -   Haneen Abdulglil
    -   Mohammed Basurrah
    -   Dhiaa Alhaq Shalabi

-   Bootcamp: GIZ YE 2022

## Installation

```shell
npm install -g commitizen // Installs commitizen
npx husky install         // Installs Husky
chmod ug+x .husky/*       // Gives husky executable extension
npm install               // Installs the node modules
```

## Development process

-   When commiting you will have to use `git cz` and then go through the process. Look at the first commit I made to know what that means.
-   The translation process is done using the i18next library. There's an example in the index.js file of how this is done. Check this github project for more info on how to use the i18next library: [i18next](https://github.com/i18next/next-i18next)
-   When writing commits, commitlinter library is used to make sure that your commits are consistent with the conventional commits. To learn more about it refer to the guidelines in Canvas or the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) site.
-   The `layout` folder contains the components that will be used in the layout of pages, so components like the header and footer will be placed there.

Good luck and happy coding :D

## 🔨 Build

To build this project run

Using npm

```bash
  npm run build
```

Using yarn

```bash
  yarn build
```

## 🚀 Deployment

To deploy this project run

```bash
  npm run build
  npm run start
```

Use the following command to run the project in development mode

```bash
  npm run dev
```

## 🚀 Live Demo

![Vercel Status](https://therealsujitk-vercel-badge.vercel.app/?app=idev-therapist.vercel.app)

Deployed on Vercel: [iDev Therapist](https://idev-therapist.vercel.app/)

## 🌵 Branches

We use an agile continuous integration methodology, so the version is frequently updated and development is really fast.

1. develop is the development branch.

2. master is the production branch.

3. No other permanent branches should be created in the main repository, you can create feature branches but they should get merged with the master.

**Steps to work with feature branch**

1. To start working on a new feature, create a new branch prefixed with feature and followed by feature name. (ie. feature/featurename-issuenumber)
2. Once you are done with your changes, you can raise PR.

**Steps to create a pull request**

1. Make a PR to develop branch.
2. Comply with the best practices and guidelines e.g. where the PR concerns visual elements it should have an image showing the effect.
3. It must pass all continuous integration checks and get positive reviews.
4. After this, changes will be merged to develop branch.
