In this Lecture, we will be learning about : 
- Inner Working of React & how is the JS Script embedded to our HTML
- Creating a Custom New Component in Both CRA & Vite
- Rules and Best Practices for both cases 


Main Learnings from this Lecture : 
In CRA, 
1) The main "index.html" file is present in the public folder.
2) React-Scripts which is a dependency/tool provided by Create-React-App to inject the JS Script into the HTML. It can be visible in the package.json dependencies file.
3) In jsx files, we can return ONLY ONE ELEMENT ONLY so we put everything in a "div" and return it OR we use "<>" tag which is called as "Fragment"
4) The function name should be CAPITALIZED.
5) The file name may not be CAPITALIZED, It will still work but Capitalization is a best practice.
6) Component can also be ".js" and it work BUT using ".jsx" is a best practice. 


In VITE,
1) The main "index.html" file is NOT in public folder but in the main directory itself.
2) Here, We do not have any "React-Scripts" dependency. The JS is directly embedded into the HTML file itself using <script> tag
3) In src folder, if we want to create a new custom component/function to render in our App component, we HAVE TO NAME IT ".jsx" and NOT ".js"
4) The function name should be CAPITALIZED and the file name should be CAPITALIZED as well. 
5) In jsx files, we can return ONLY ONE ELEMENT ONLY so we put everything in a "div" and return it OR we use "<>" tag which is called as "Fragment" 



------------------------------------------------------------------------------------------------------------

WKT, React uses JS to create the DOM. Now, for JS to run, it needs to be embedded in the HTML. In the Inner Working, we will learn how JS is embedded in HTML in  both our project cases.

Lets Create 2 new projects using both CRA & Vite





IN CRA, 
we got 2 folders: public and src

In public folder, 
PS D:\Btech IIIT Surat 2022-2026\Web Dev\ReactJS\ChaiAurReact\3_InnerWorkinng&Comp\01basicreact\public> ls
Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        12-02-2025  09:00 PM           3870 favicon.ico  //FAVICON
-a----        12-02-2025  09:00 PM            682 index.html  // MAIN INDEX.HTML Page
-a----        12-02-2025  09:00 PM           5347 logo192.png
-a----        12-02-2025  09:00 PM           9664 logo512.png
-a----        12-02-2025  09:00 PM            517 manifest.json // For Mobile Devices to run our React Project   
-a----        12-02-2025  09:00 PM             70 robots.txt // FOR SEARCH ENGINE OPTIMIZATION

In src folder,
PS D:\Btech IIIT Surat 2022-2026\Web Dev\ReactJS\ChaiAurReact\3_InnerWorkinng&Comp\01basicreact\src> ls
Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        12-02-2025  09:00 PM            130 App.js
-a----        12-02-2025  09:00 PM            208 index.js

IN PUBLIC FOLDER,
The main file in public folder is our "index.html" and we only have "ONE SUCH HTML Page" throughout. Whatever changes we want to make we just do by replacing the components in this single .html file!
Hence, its called as "Single Page Application".

index.html contains: 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    
  </body>
</html>

Here, we see ONLY ONE ELEMENT with id="root". This is where our React App will be embedded by accessing it and adding Components into it.

Fun Point: Note that here there is no script file is injected. Then how does the JS ScriptS(index.js) from src folder gets embedded into the HTML??
Answer : It is done by React-Scripts which is a tool provided by Create-React-App to inject the JS Script into the HTML. It can be visible in the package.json dependencies file.


IN SRC FOLDER,
The main entrypoint of our project is "index.js" which is the starting point of our project.

index.js contains:

```javascript
import React from 'react';   //Core Foundational Library
import ReactDOM from 'react-dom/client'; // Library for Web Apps Building | React Native for Mobile Apps

import App from './App'; //App component is imported from App.js

// React creates a element by accesing the id="root" element which we had in the index.html file and puts it in its virtual DOM and renders the App component into it.
// React creates a VIRTUAL DOM which is a copy of the actual DOM. React makes the necessary changes to the virtual DOM and re-renders it to the actual DOM using the Diffing Algorithm.
// Diffing Algorithm: It is a process by which React compares the previous virtual DOM with the new virtual DOM and finds out the minimal changes required to make the DOM match the new virtual DOM.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode> // StrictMode is a special mode that checks a number of things and gives you warnings to make your code work. It's only enabled in development
    <App /> //App is a HTML kinda tag BUT it is a JSX Component which we create in the App.js file
    </React.StrictMode>
); 
```


In App.js file, we create our App component and Export it. 

```javascript
import Chai from "./Chai";

//A simple function which returns HTML code which will be rendered by React
function App() {
  return (
    <>
    <h1>Chai aur React</h1>
    </>
  );
}

export default App;
```





----------------------------------------------------------------------------------------------------------------


IN VITE,
here also we get 2 folders: public and src
But the main "index.html" file here is NOT IN PUBLIC FOLDER but in the main directory itself

index.html contains:
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div> <!--same as in CRA-->
    <script type="module" src="/src/main.jsx"></script> <!--Here, No any React-Scripts dependency, We use normal Script tag to embed the JS-->
  </body>
</html>


Index.js and App.js files & concepts are same as in CRA.



-------------------------------------------------------------------------------------

Lets try to craete a new custom component/Function named Chai in VITE and learn about its rules

In src folder, create a new file named "Chai.jsx" and write the following code:
```javascript
function Chai() { //Capitalized Chai (function chai() will not work)
  return (
    <>  //Fragement is returned i.e. Only one element
      <h1>Chai is Ready</h1>
    </>
  );
}
export default Chai;
```

In App.jsx, import chai and add it to the App component:
```javascript
import Chai from "./Chai";

function App() {
  return (
    <>
    <Chai/>
    <h1>Chai aur React</h1>
    </>
  );
}

export default App;
```

if we want to create a new custom component/function to render in our App component, we HAVE TO NAME IT ".jsx" and NOT ".js"
Also,
The function name should be CAPITALIZED and the file name should be CAPITALIZED as well.


Similar in CRA too, See the Main Learnings at the start.

------------------------------------------------------------------------------------------------------- 
                            *** ADDITIONAL CHATGPT NOTES *** 
# Inner Workings of React: CRA vs Vite

## **Introduction**
React is a powerful JavaScript library for building user interfaces. When working with React, two primary tools for setting up projects are **Create React App (CRA)** and **Vite**. This document explores the inner workings of both, covering key concepts, differences, best practices, and interview questions.

---

## **How JavaScript is Embedded in HTML**
React dynamically injects JavaScript into HTML to create the DOM. This is handled differently in CRA and Vite:

### **In CRA (Create React App)**
1. The main `index.html` file is located in the **public folder**.
2. **React-Scripts**, a dependency found in `package.json`, is responsible for injecting JavaScript into `index.html`.
3. The `<div id="root"></div>` in `index.html` serves as the mounting point for React components.
4. Unlike traditional HTML pages, `index.html` in CRA does **not** include an explicit `<script>` tag for the main JS file. Instead, CRA dynamically injects it.

### **In Vite**
1. The `index.html` file is in the **main directory**, not the public folder.
2. **No React-Scripts dependency**; instead, JavaScript is directly embedded using `<script type="module" src="/src/main.jsx"></script>`.
3. The same `<div id="root"></div>` is used for mounting the React app.
4. Vite leverages **ES Modules** to import JavaScript directly, making it faster than CRA.

---

## **Folder Structure Differences**
### **In CRA**
- **Public Folder**: Contains `index.html`, `favicon.ico`, `manifest.json`, `robots.txt`.
- **Src Folder**: Contains `index.js`, `App.js`, and component files.

### **In Vite**
- **No public folder for `index.html`**, it exists in the root directory.
- **Src Folder**: Contains `main.jsx` instead of `index.js`.
- Uses `.jsx` by default for React components.

---

## **Creating a Custom Component: Best Practices**
### **In CRA**
1. Component files should be named **with a capital letter** (e.g., `MyComponent.js`).
2. The function inside the file should also start with a **capital letter**.
3. Components should return **only one element**, so use a `<div>` or React Fragment (`<>...</>`) to wrap multiple elements.
4. Component files **can use `.js` or `.jsx`**, but `.jsx` is recommended.

### **In Vite**
1. **Component files must use `.jsx`**.
2. **Function name and file name should be capitalized**.
3. Similar to CRA, components must return only one root element.

#### **Example: Creating a `Chai` Component**
**Chai.jsx**
```jsx
function Chai() {
  return (
    <>
      <h1>Chai is Ready</h1>
    </>
  );
}
export default Chai;
```

**Importing `Chai.jsx` in App Component**
```jsx
import Chai from "./Chai";

function App() {
  return (
    <>
      <Chai />
      <h1>Chai aur React</h1>
    </>
  );
}

export default App;
```

---

## **Key Differences Between CRA and Vite**
| Feature | CRA | Vite |
|---------|-----|------|
| **Index.html Location** | `public` folder | Root directory |
| **JavaScript Embedding** | Uses `React-Scripts` | Direct `<script>` tag |
| **Startup Speed** | Slower | Faster |
| **Hot Reloading** | Slower | Faster |
| **ES Module Support** | Not native | Native |
| **File Extensions for Components** | `.js` or `.jsx` | **Must use `.jsx`** |
| **StrictMode Support** | Yes | Yes |

---

## **Probable Interview Questions and Answers**

### **1. How does React embed JavaScript into HTML?**
- In CRA, React-Scripts inject JavaScript dynamically.
- In Vite, a `<script type="module">` tag is used to include JavaScript directly.

### **2. What is the difference between `ReactDOM.render` and `ReactDOM.createRoot`?**
- `ReactDOM.render` was used in React 17 and earlier.
- `ReactDOM.createRoot` (introduced in React 18) enables **concurrent rendering**.

### **3. Why does React use a Virtual DOM?**
- The Virtual DOM improves performance by **minimizing direct updates to the actual DOM**.
- It uses a **Diffing Algorithm** to compare changes and apply the minimal required updates.

### **4. What are React Fragments (`<>...</>`)?**
- Fragments allow returning **multiple elements without adding an extra div**.
- Example:
  ```jsx
  return (
    <>
      <h1>Hello</h1>
      <p>World</p>
    </>
  );
  ```

### **5. What is the difference between `.js` and `.jsx` files in React?**
- `.jsx` explicitly indicates that the file contains JSX syntax.
- `.js` can also work, but `.jsx` helps with clarity and better tooling support.

### **6. Why does Vite perform better than CRA?**
- Vite pre-bundles dependencies and leverages ES Modules, resulting in **faster startup times**.
- CRA relies on Webpack, which takes longer to process files.

### **7. Why should component names start with a capital letter?**
- React treats lowercase names as **HTML elements**.
- Capitalized names are recognized as **React components**.

---

## **Revision Recap**
✅ **React embeds JavaScript differently in CRA and Vite**
✅ **CRA uses React-Scripts; Vite uses ES Modules**
✅ **Only one HTML file (SPA concept) in both**
✅ **Component names must be capitalized**
✅ **Fragments help avoid unnecessary `<div>` elements**
✅ **Vite is significantly faster than CRA due to native ES Modules**
✅ **React’s Virtual DOM optimizes rendering**
✅ **ReactDOM.createRoot improves concurrent rendering in React 18**
✅ **Use `.jsx` for better clarity and tooling support**

---

This structured document ensures you can revisit and recall essential React concepts even after months! 🚀

