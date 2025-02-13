This is a Theoretically Rich Lecture where we touch imp React Core Concepts
Things we will learn here are:

1. Virtual DOM
2. React Fibre
3. Reconciliation
4. Diffing Algorithm
5. Hydration

Kya abhi bhi Virtual DOM padna chhiye? ⇒ yes
Kya abhi bhi use hota Virtual DOM React me? ⇒ no

The Best Article to learn this concept is : 
https://github.com/acdlite/react-fiber-architecture


Good Comment with Takeways of this lecture : 
1. The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.
2. But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.
3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.
4. But some values depends on network call so if we update a value it might get update immediately via a network call.
5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
6. The current algo used by the React is called the React Fibre algo.
7. The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called reconciliation.
8. Reconciliation is the algo behind what popularly known as the Virtual-DOM.
9. In UI it is not necessary for every update to be applied immediately. *




Lets WRITE our understanding of Virtual DOM, React Fibre and Reconciliation.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```
Behind the Scene, This createRoot function is calling ReactDOM.render() function internally. This ReactDOM.render() function is used to render the React App in the web browser. This ReactDOM.render() function internally calls the ReactDOM.createRoot() function. This ReactDOM.createRoot() function is used to create a virtual DOM tree. This virtual DOM tree is then compared with the web browser's DOM tree. If there is any change in the virtual DOM tree, then the web browser's DOM tree is updated with the new values. This process is called "RECONCILIATION".
It is the algorithm React uses to diff one tree with another to determine which parts need to be changed.
Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

The Browser DOM repaints/restructures everything whenever there is any change in the DOM tree. This is called the "PAGE RELOAD"


NOW, THE REACT TEAM THOUGHT of why not design such a Algorithm where the UI Elements are not updated immediately, rather we have the option of waiting, prioritizing, aborting these updates which would help us Optimize our updates. This is called the "RECONCILIATION ALGORITHM"


Then, What is React Fibre and what role does it have in this?
Fibre is a highlevel ground-up rewrite of Reconcialtion!
React Fibre headline feature is Incremental rendering i.e. the ability to split rendering into chunks and spread it out in multiple frames. Other imp features include ability to pause|abort|reuse|priority of differet types of updates.



Concept of HYDRATION???
Ab pehli baar page load hota hai, buttons aur images dikhte hain (HTML aa gaya), lekin kuch click nahi hota kyunki JavaScript ab tak load nahi hui hoti. Phir jab JavaScript load ho ke React ko HTML ke saath connect karti hai aur sab interactive ho jata hai, us process ko hydration bolte hain. aur ye fibre algorithm k through kaafi aachi hoti hai

Concept of Diffing Algorithm??
Diffing Algorithm is a part of the Reconciliation Algorithm. It is a process by which React compares the previous virtual DOM with the new virtual DOM and finds out the minimal changes required to make the DOM match the new virtual DOM.





-------------------------------- GPT NOTES ----------------- 


# React Core Concepts: Virtual DOM, Reconciliation, React Fiber, Hydration & Diffing Algorithm

## 1. Virtual DOM
### What is the Virtual DOM?
The **Virtual DOM (VDOM)** is a lightweight copy of the actual DOM. React maintains this copy in memory to minimize direct interactions with the real DOM, which improves performance.

### How does Virtual DOM work?
1. When a change happens, React updates the Virtual DOM first instead of the real DOM.
2. It then compares (diffs) the new Virtual DOM with the previous one to detect changes.
3. Only the modified parts are updated in the actual DOM instead of reloading the entire page.

### Why is the Virtual DOM used?
- Updating the real DOM is **slow**, while Virtual DOM updates are **fast**.
- React **batch processes updates**, reducing unnecessary re-renders.
- Ensures a **smooth and efficient UI** by minimizing expensive DOM operations.

---
## 2. Reconciliation
### What is Reconciliation?
Reconciliation is the **process React uses to update the UI efficiently**. When the state of a component changes, React updates the Virtual DOM and compares it with the previous version to determine what actually changed.

### How does Reconciliation work?
1. A new Virtual DOM tree is created when state changes.
2. React compares it with the previous Virtual DOM tree using the **Diffing Algorithm**.
3. Only the changed elements are updated in the real DOM.

### Why is Reconciliation helpful?
- **Prevents unnecessary DOM updates**, improving performance.
- **Optimizes UI rendering**, making applications faster.
- **Allows prioritization of UI updates** through React Fiber.

---
## 3. React Fiber
### What is React Fiber?
React Fiber is a **complete reimplementation of React’s reconciliation algorithm**. It allows React to perform updates more efficiently by breaking rendering work into smaller units and spreading them across multiple frames.

### Key Features of React Fiber:
- **Incremental rendering** → Spreads UI updates across multiple frames.
- **Prioritization** → More important updates are processed first.
- **Pausing & Resuming** → React can pause rendering and continue later.
- **Abortable rendering** → Stops work that is no longer needed.
- **Concurrent Mode** → Helps in smooth UI transitions and animations.

---
## 4. Hydration
### What is Hydration in React?
Hydration is the process where React **attaches event listeners and JavaScript logic** to an already rendered HTML page.

### How does Hydration work?
1. When a page loads, only the HTML appears initially (server-rendered content).
2. React then “hydrates” it by attaching event listeners and making it interactive.

### Why is Hydration important?
- **Improves initial page load time** (as users see content faster).
- **Enables server-side rendering (SSR)** while keeping React’s interactivity.
- **Enhances SEO** by rendering content before JavaScript loads.

---
## 5. Diffing Algorithm
### What is the Diffing Algorithm?
It is the algorithm React uses during Reconciliation to **compare the previous and new Virtual DOM trees** and determine the minimal updates needed.

### How does the Diffing Algorithm work?
- Compares each node in the new and previous Virtual DOM trees.
- If a node **hasn’t changed**, React reuses it.
- If a node **has changed**, React updates only that part of the real DOM.
- If a node **was removed**, React deletes it from the real DOM.

### Why is Diffing efficient?
- **Uses unique keys** for faster comparisons.
- **Minimizes DOM operations**, improving performance.
- **Avoids unnecessary re-renders**, keeping UI smooth.

---
## 🤔 Probable Interview Questions & Answers

### **1. What is the Virtual DOM, and how does it work?**
💡 **Answer:** The Virtual DOM is a lightweight copy of the real DOM that React uses to optimize UI updates. React updates the Virtual DOM first, then compares it with the previous Virtual DOM using the Diffing Algorithm, and updates only the necessary parts in the actual DOM.

### **2. What is Reconciliation in React?**
💡 **Answer:** Reconciliation is the process of efficiently updating the real DOM by comparing the old and new Virtual DOM trees and applying minimal updates using the Diffing Algorithm.

### **3. What is React Fiber, and why was it introduced?**
💡 **Answer:** React Fiber is a rewrite of React's reconciliation algorithm that improves UI updates by enabling incremental rendering, prioritization of tasks, and smoother UI updates. It makes React apps more performant and responsive.

### **4. What is Hydration in React?**
💡 **Answer:** Hydration is the process where React attaches event listeners and JavaScript logic to server-rendered HTML, making the page interactive.

### **5. How does the Diffing Algorithm work?**
💡 **Answer:** The Diffing Algorithm compares the previous and new Virtual DOM trees to detect changes. It updates only the changed parts of the real DOM instead of re-rendering everything, improving performance.

---
## 🔥 Revision Recap (Quick Summary)

| Concept        | Explanation |
|---------------|------------|
| **Virtual DOM** | A lightweight copy of the real DOM used to improve performance by reducing direct DOM manipulation. |
| **Reconciliation** | The process of updating the UI efficiently by comparing old and new Virtual DOM trees. |
| **React Fiber** | A new reconciliation engine that enables incremental rendering, prioritization, and smoother UI updates. |
| **Hydration** | The process of attaching event listeners to a pre-rendered HTML page, making it interactive. |
| **Diffing Algorithm** | The algorithm used to compare Virtual DOM trees and apply minimal updates to the real DOM. |

---
## 📌 Key Takeaways
- React **does NOT use Virtual DOM anymore**, but understanding it helps grasp Reconciliation.
- **Reconciliation optimizes UI updates** by using a Diffing Algorithm.
- **React Fiber** improves efficiency by enabling incremental rendering.
- **Hydration** allows React to attach JavaScript to pre-rendered HTML.
- **Diffing Algorithm** ensures only necessary changes are made to the DOM.

---
With this structured guide, you’ll have a solid understanding of these core React concepts! 🚀 If you need further simplifications or examples, let me know! 😊

