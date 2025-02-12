Lets Learn about how to Create a New React Project and the ways to create it 

2 Traditional ways : 
- with create-react-app | npx create-react-app@latest (slow and very bulky but supports all features)
- with vite | npm create vite@latest (recommended)
In fact, Vite is a much better option for learning React because:
✅ Faster Build Times – Vite uses ESBuild, making it significantly faster than Create React App (CRA).
✅ Better Developer Experience – Hot Module Replacement (HMR) is blazing fast.
✅ Smaller & Optimized Output – Vite produces more efficient production builds.
✅ Modern & Actively Maintained – CRA is outdated and has dependency issues, while Vite is widely adopted in the React ecosystem.


IMP POINTS : 
- Vite or Parcel are "BUNDLERS" which bundles all the required dependencies and compiles the code into a single file

- React library basically has 2 main parts : 
-- 1. React DOM (for building web applications) 
-- 2. React Native (for building mobile apps)
-- Also, we have Three.js for 3D applications & animations

- when, we download "node" in our system, we have 
-- "npm" which is "Node Package Manager" used to download all the packages and libraries required for our project
-- "npx" which is "Node Package Executor" used to execute a package without installing it


- We create a new React project using "npx create-react-app@latest project_name" command
This has created a new directory with the name "project_name" inside the current directory and has alot of files inside it
Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        12-02-2025  06:33 PM                node_modules
d-----        12-02-2025  06:33 PM                public
d-----        12-02-2025  06:33 PM                src
-a----        12-02-2025  06:33 PM            310 .gitignore
-a----        12-02-2025  06:33 PM         655611 package-lock.json
-a----        12-02-2025  06:33 PM            686 package.json
-a----        12-02-2025  06:33 PM           3359 README.md


Lets Understand about all these files : 
1. package.json : This is the main file which contains all the information about our project 
It contains : 
{
  "name": "02basicreact",   //BASIC INFO ABOUT PROJECT
  "version": "0.1.0",
  "private": true,
  "dependencies": {     // ALL THE DEPENDENCIES
    "cra-template": "1.2.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {          // ALL THE SCRIPTS
    "start": "react-scripts start", // STARTS THE DEVELOPMENT SERVER
    "build": "react-scripts build", // BUILDS THE PROJECT FOR PRODUCTION
    "test": "react-scripts test", // RUNS THE TEST CASES
    "eject": "react-scripts eject" // EJECTS THE PROJECT from REACT ENVIRONMENT
  },
  "eslintConfig": {     // ES-LINTING CONFIG
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {     // BROWSERS LIST for supporting our React projects
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
Now, to start our project, we need to run "npm run start" command in terminal
And we will see that our project has been successfully started

Also, we can run "npm run build" command to build our project for production
It will create a "build" folder inside our project directory
And we can run "npm run test" command to run the test cases

2. src folder : This is the main folder which contains all the code for our project
3. public folder : This is the folder which contains all the public files which are required for our project like "index.html", "favicon.ico", "manifest.json"
4. build folder : This is the folder which contains all the files which are required for our project for production



- We will create a new React Project using VITE Bundler now
To create a new React Project, we need to run "npm create vite@latest" command
And then install node modules using "npm install" command
And then run "npm run dev" command to start the development server

Now, we also get alot of files in our folder:


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        11-02-2025  03:12 PM                node_modules
d-----        11-02-2025  03:11 PM                public
d-----        11-02-2025  07:14 PM                src
-a----        07-02-2025  12:48 PM            253 .gitignore
-a----        07-02-2025  12:48 PM           1003 eslint.config.js
-a----        07-02-2025  12:48 PM            361 index.html
-a----        11-02-2025  03:12 PM         157729 package-lock.json
-a----        11-02-2025  03:11 PM            648 package.json
-a----        07-02-2025  12:48 PM            451 README.md
-a----        07-02-2025  12:48 PM            161 vite.config.js

1. package.json
{
  "name": "02reactwithvite", //PROJECT INFO
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {          //SCRIPTS to run & build our project 
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": { //DEPENDENCIES | Only 2 which are mandatory | Unlike CRA (i.e. create-react-app)
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {  //ALOT OF DEV DEPENDENCIES used only for Development and not for Production
    "@eslint/js": "^9.19.0",
    "@types/react": "^19.0.8",
    "@types/react-dom": "^19.0.3",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.19.0",
    "eslint-plugin-react": "^7.37.4",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.18",
    "globals": "^15.14.0",
    "vite": "^6.1.0"
  }
}
All other folders are just like the CRA project. 



