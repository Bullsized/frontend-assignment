# TaskManager

![main](https://github.com/Bullsized/frontend-assignment/tree/master/client/src/assets/images/01home.png)

## Set up

To run the project you must have:

-   [NodeJS](https://nodejs.org/en/) LTS 16.X.X
-   [npm](https://docs.npmjs.com/cli/v8/commands/npm-install) 8.X.X
-   [Angular CLI](https://angular.io/cli) 12.X.X

Prior to serving the project for the first time, make sure that you've run

```bash
npm install
```

in both the `/client` and the `/server` folders.

### Development server

In order to connect with mocked back end service ([Sails.js](https://sailsjs.com/)), you must navigate to the `/server` folder and run

```bash
npm start
```

### Serve and build

Once in the `/client` directory, run

```bash
ng serve
```

for a development server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Running

```bash
ng serve --watch --open
```

will automatically open the project for you, as well as monitor for any errors/notifications.

Run

```bash
ng build
```

to build the project. The build artifacts will be stored in the `/dist` directory.

### ESLint

This project uses [ESLint](https://eslint.org/) to find and fix problems in the TS code. Run

```bash
ng lint
```

to check for problems in the code and if files pass linting.

## Testing

Karma is removed from this project, instead [Jest](https://jestjs.io/) is used for unit testing. Bear in mind that only the service file has unit tests for it, the rest of the files are boiled down only to creating the testing environment.

### Running unit tests

Run

```bash
npm test
```

to execute the unit tests.

### Running end-to-end tests

No e2e environment is set.

## Structure

This project is divided into two main folders: 

- `src/app/core`, where all the interfaces/models are, the service(s) and the adapter(s);
- `src/app/features`, where all the modules and their components are.

### Parent task component

task.component - it is the parent of the whole tasks module and it's template is just the task-list component, making easier to use slots, headers, footers or other additional components.

### Tasks list 

task-list.component - used to list the tasks. From it one can delete tasks or mark them as complete.

### Add a task

![main](https://github.com/Bullsized/frontend-assignment/tree/master/client/src/assets/images/02addTask.png)

task-add.component - used to add a task to the list. Bear in mind that the 'isComplete' is always false for a newly added task - self explanatory why.

### Edit a task

![main](https://github.com/Bullsized/frontend-assignment/tree/master/client/src/assets/images/03editTask.png)

task-edit.component - used to edit a task - either the title, description or isComplete.

### Shared

Files that are used across the tasks components, like form groups or forms.

## Contacts

Further information can be requested via an email to [Ivan Stefanov](mailto:ivanstefanovbg@gmail.com?subject=[GitHub]TaskManager). GLHF.
