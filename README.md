# ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) Interview Scheduler

Modern client application where a user can created, delete and edit appointments 5 days a week.

This repository is a practice LHL project built with React, Jest, Cypress, Storybook and Axios that helps further the creation of sinlge page apps with a more modern framework and a test development driven approach.

This scheduler connects to a database and interacts with it via Axios with PUT, DELETE, and GET requests in order to provide the user with the possibility of creating, editing and deleting appointments.
The focus was on creating components while testign their functionality, and therefore this react app has been built with a modular mindset.
The app has the capability of rendering only the information that has changed or that it is necesary thanks to the state usage provided by react. It also will show empty spots and a list of interviewers to choose from. Trying to save without a name or interviewer is handled and will display a message depending on if you tried to save without a name or without an interviewer selected.

!["Creating"](#)

!["Deleting"](#)

!["Edditing"](#)

!["No Student Name"](#)
!["No Interviewer"](#)

!["Error Handling1"](#)
!["Error Handling2"](#)

## Getting Started

1. Fork repository and clone to your local device
2. Install dependencies with `npm install`.
3. [Requires Scheduler API](https://github.com/lighthouse-labs/scheduler-api) and following the instructions in order to connect with the Database.

## ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) Running Webpack Development Server

```sh
npm start
```

## ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) Running Jest Test Framework

```sh
npm test
```

## ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white) Running Storybook Visual Testbed

```sh
npm run storybook
```

## ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e) Running Cypress Test

```sh
npm run cypress
```
