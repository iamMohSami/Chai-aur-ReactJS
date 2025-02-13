Now, We will try to Replicate a Bare Minimum version of REACT using JS.

Create 2 new files:
index.html  & customreact.js

index.html contains :
- A single Element with id "root"
- Add a script tag with src="./customreact.js"

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom React App</title>
</head>
<body>
    <div id="root"></div>
    <script src="./customreact.js"></script>
</body>
</html>


// LETS FILL THE JS FILE

Grab the root element of the HTML file
```javascript
const mainContainer = document.querySelector('#root')
```
 
we need to create our REACT ELEMENT in a structured way given below : 
```javascript
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}
```

Now, we will create a function named CustomRender to render a component into the mainContainer, The function will take 2 parameters, "reactElement" {which element to render on webpage} & "mainContainer" {in which container to put our element}

```javascript
function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

customRender(reactElement, mainContainer)
```


Thus, IN REACT also, End of the day, The Components we add are Evaluated as a TREE Graph and then REACT renders the Element to the DOM.


- It was our CUSTOM REACT, so we created a ReactElement object and added custom key values to it foe storing info like type, attributes & innerHTML

- BUT, in original React, the ReactElement implememtation is DIFFERENT and  is created by a function called "createElement"

- BABEL is a JavaScript compiler/transpiler which is converting this JSX and JS. 

In Original React, we write our components in the form as : 
```javascript
function MyApp() {
    return (
        <div>
            <h1>My App</h1>
        </div>
    )
}
```
And "BABEL" converts this structure into a TREE-GRAPH type thing which we had implememted in our Custom React!
So, What If, We add our Custom ReactElement Directly in our ORIGINAL REACT, it MIGHT save one step of our transpiler and succesfully render this Element on UI
i.e.
In our ORIGINAL REACT: 
```javascript
const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

ReactDOM.createRoot(document.getElementById('root')).render(
//    <ReactElement/> cant write like this, bcoz our custom element is a Object and a Object is called  by just writing its name 
    ReactElement
    )
```

WILL IT WORK?????????
NO, Beacuse it worked in our CustomReact bcoz we had a CustomRender function for it
But, In ORIGINAL REACT, .render might be expecting some diff SYNTAX, diffrent paramenters OR different Keys_Name

Thus, Creating a New React Element we need to follow the REACT SYNTAX which is as below : 
//Understood this syntax from the REACT Github sourcecode
```javascript
const ReactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'Click me to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
    ReactElement
    )
```
Now, This will Work successfully!!!




---------------------------------------- ADDITIONAL CHATGPT NOTES --------------

# **Lecture 4: Creating a Custom Version of React & Understanding React's Inner Workings**

## **Introduction**
In this lecture, we will attempt to create a minimal version of React using JavaScript and understand how React processes elements internally. By doing so, we will gain insights into the working of JSX, React's rendering mechanism, and the role of Babel in transpiling JSX.

---
## **Setting Up Our Custom React**
### **1. Creating the Required Files**
We will create two files:
- `index.html`: Contains a root element where React elements will be rendered.
- `customreact.js`: Implements our custom React-like functionality.

### **2. index.html Structure**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom React App</title>
</head>
<body>
    <div id="root"></div>
    <script src="./customreact.js"></script>
</body>
</html>
```

### **3. Implementing Our Custom React (customreact.js)**
#### **a. Selecting the Root Element**
```javascript
const mainContainer = document.querySelector('#root');
```

#### **b. Defining a React-Like Element Structure**
In React, elements are objects. We will create a custom object representation of a React element:
```javascript
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
};
```

#### **c. Creating a Custom Render Function**
We need a function to render our custom React elements into the DOM.
```javascript
function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

customRender(reactElement, mainContainer);
```

### **4. How React Works Internally**
- React represents elements as JavaScript objects (like our `reactElement` object above).
- React maintains a Virtual DOM to optimize rendering performance.
- JSX is a syntactic sugar that gets converted into React.createElement calls.
- Babel transpiles JSX into JavaScript code that React can understand.

### **5. How React Creates Elements in Original React.js**
Instead of manually defining elements like in our custom implementation, React provides `React.createElement()`:
```javascript
const ReactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'Click me to visit Google'
);
ReactDOM.createRoot(document.getElementById('root')).render(ReactElement);
```

### **6. Why Our Custom ReactElement Does Not Work in React**
If we try to use our custom `ReactElement` object in a React application, it will fail:
```javascript
ReactDOM.createRoot(document.getElementById('root')).render(ReactElement);
```
**Reason:**
- React’s render function expects a specific structure (React elements created via `React.createElement()` or JSX).
- Our custom `ReactElement` object lacks the internal structure React uses.

---
## **Key Takeaways**
1. React internally represents UI components as JavaScript objects.
2. JSX is transformed into `React.createElement()` by Babel.
3. React maintains a Virtual DOM for performance optimization.
4. Our custom implementation mimics React’s behavior but lacks React’s optimization techniques.
5. `React.createElement()` ensures elements are correctly interpreted by React’s render function.

---
## **Interview Questions & Answers**
### **1. What is the Virtual DOM in React?**
**Answer:** The Virtual DOM is a lightweight copy of the actual DOM that React uses to determine the most efficient way to update the UI without directly modifying the real DOM.

### **2. How does React.createElement() work?**
**Answer:** `React.createElement(type, props, ...children)` creates a React element, which is an object containing:
- `type`: The type of the HTML element or component.
- `props`: Attributes and properties of the element.
- `children`: Child elements or text content.

### **3. What role does Babel play in React?**
**Answer:** Babel transpiles JSX into JavaScript code that browsers can understand. It converts JSX into `React.createElement()` calls.

### **4. Why can’t we directly use our custom ReactElement in a React app?**
**Answer:** React's `render` function expects elements in a specific structure, which our custom object lacks. React elements must be created using `React.createElement()` or JSX.

### **5. How does React optimize rendering performance?**
**Answer:**
- React uses the Virtual DOM to minimize direct DOM manipulations.
- It batches updates to avoid unnecessary re-renders.
- It uses reconciliation to update only the changed parts of the UI.

---
## **Revision Recap**
### **Quick Summary for Future Reference**
✅ **React Elements** are objects representing UI components.
✅ **JSX** is syntactic sugar that gets converted into `React.createElement()`.
✅ **Custom React Implementation** mimics React’s behavior but lacks optimizations.
✅ **React.createElement()** is necessary for elements to work within React’s ecosystem.
✅ **Babel** is required to transpile JSX into React-compatible JavaScript.
✅ **Virtual DOM** helps React optimize UI updates.

---
## **Final Thought**
Building a custom React-like implementation helps in understanding how React works internally. However, React itself provides optimized methods for creating and rendering elements efficiently.

---

This structured document covers all essential concepts, exceptions, key takeaways, and probable interview questions. Let me know if you need any modifications! 🚀

