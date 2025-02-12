
# **React JS – Class 1: Introduction & Important Concepts**  
## **1️⃣ Why Was React JS Created?**  
React JS was developed by **Meta (formerly Facebook)** to solve real-world problems faced in web applications.  

### ✅ **Problems React Solved:**  
🔹 **Phantom Message Problem (Facebook Messenger Bug)**  
   - Earlier, Facebook Messenger displayed unread messages even after they were read.  
   - This was due to **inefficient UI updates** when the app state changed.  
   - React introduced a better way to **sync UI, state, and DOM efficiently**.  

🔹 **Reusability & Separation of Concerns**  
   - **Component-based architecture** → Reuse parts of UI across the app.  
   - **Separation of rendering logic from data** → Cleaner, modular code.  

🔹 **Single Page Applications (SPA)**  
   - Unlike traditional websites where each user action **reloads the entire page**, React builds **fast, interactive SPAs** by updating only required parts of the UI.  

🔹 **Efficient UI Synchronization**  
   - React synchronizes **UI, DOM, and application state**, ensuring a **smooth user experience**.  

---

## **2️⃣ Is React JS a Library or a Framework?**  
🔹 **React is a Library, NOT a Framework.**  
🔹 The key difference lies in **flexibility vs strictness**:  

| Feature          | Library (React)                  | Framework (Angular, Vue) |
|-----------------|---------------------------------|-------------------------|
| **Definition**  | A set of functions/tools to build UI | A full structure with rules & tools |
| **Flexibility** | Developers can choose how to structure the app | Strict structure & conventions |
| **Control**     | More control over components, state, rendering | Less flexibility, follows predefined patterns |
| **Dependency**  | React requires external libraries (Routing, State Mgmt) | Frameworks provide everything built-in |

📝 **Exception:** While React is officially a library, when combined with tools like React Router and Redux, it can act like a **full-fledged framework**.  

---

## **3️⃣ Core Concepts of React JS**  
React is built around **stateful, reusable components** that update efficiently using a **virtual DOM**.  

### **🔹 State & UI Manipulation**  
- **State** → Data that changes over time (e.g., user input, API data).  
- **UI Manipulation** → React updates the UI whenever the state changes.  

### **🔹 Babel**  
- **Babel** is a **JavaScript compiler** that converts modern JS (ES6+) into browser-compatible JS.  
- **Example:** JSX → JavaScript conversion.  

### **🔹 Fiber**  
- **React Fiber** is the **reconciliation engine** that improves React's rendering performance.  
- **Allows React to pause, prioritize, and resume rendering efficiently.**  

### **🔹 Virtual DOM**  
- **A lightweight copy of the actual DOM** that React uses to **track changes** and update only necessary parts of the UI.  
- **Benefit:** Avoids unnecessary re-renders, making apps faster.  

### **🔹 State & Variables**  
- **State** → Component-level **dynamic data** (useState, useReducer).  
- **Props** → Pass **data from parent to child**.  
- **Variables** → Temporary values (not reactive).  

### **🔹 JSX (JavaScript XML)**  
- Allows writing **HTML inside JavaScript**.  
- **Example:**  
  ```jsx
  const element = <h1>Hello, React!</h1>;
  ```
- **Babel compiles JSX → JS functions** before rendering.  

### **🔹 Diffing Algorithm**  
- React **compares Virtual DOM** with the previous version to update only necessary changes.  
- Uses **"Reconciliation"** for efficient updates.  

### **🔹 Hydration**  
- Used in **Server-Side Rendering (SSR)** to attach event listeners on the client side.  
- Makes SSR apps interactive after initial rendering.  

### **🔹 Props**  
- **Short for "Properties"** → Pass **data from parent to child** component.  
- Immutable (Cannot be changed inside the child).  

### **🔹 Hooks**  
- Introduced in React 16.8 to manage state inside **functional components**.  
- Examples:  
  - `useState()` → Manage local component state.  
  - `useEffect()` → Handle side effects.  
  - `useContext()` → Manage global state.  

---

## **4️⃣ Additional Add-ons in React**  

### **🔹 Context API**  
- A built-in **global state management** system in React.  
- Helps pass data **deeply in the component tree** without **prop drilling**.  

### **🔹 React Router**  
- **Manages navigation in SPAs** without full page reloads.  
- Example:  
  ```jsx
  <Route path="/home" element={<Home />} />
  ```

### **🔹 State Management Tools**  
React has different approaches for **managing global state**:  
- **Redux Toolkit** → Industry standard for complex state management.  
- **Context API** → Built-in, lightweight global state solution.  
- **Zustand** → Minimalistic state management library.  

### **🔹 Class-Based vs Function-Based Components**  
- **Class Components** (Before React 16.8) → Uses `this.state`, lifecycle methods.  
- **Function Components** (Modern React) → Uses **hooks** for state & lifecycle.  

### **🔹 BAAS (Backend as a Service)**  
React can integrate with **serverless backends** like:  
- **Appwrite**  
- **Firebase**  
- **Supabase**  

These services provide **authentication, database, and storage** without managing backend infrastructure.  

---

## **5️⃣ Probable Interview Questions (With Answers)**  

**Q1. Why is React called a library and not a framework?**  
✅ React is a **library** because it **focuses only on the UI layer**. Unlike frameworks, React does not enforce strict rules on app structure and requires external libraries for routing and state management.  

**Q2. What is Virtual DOM in React?**  
✅ The Virtual DOM is a **lightweight copy of the real DOM** that allows React to update only necessary parts of the UI efficiently.  

**Q3. What is JSX, and why is it used?**  
✅ JSX (JavaScript XML) is a syntax extension for writing **HTML inside JavaScript**. It makes UI components more readable and expressive.  

**Q4. What is the difference between State and Props?**  
✅ **State** is **mutable and local** to a component, while **Props** are **immutable and passed** from parent to child components.  

**Q5. What is the role of Babel in React?**  
✅ Babel **compiles JSX** into JavaScript and converts modern ES6+ features into browser-compatible JS.  

**Q6. What is React Fiber?**  
✅ React Fiber is the **reconciliation engine** that improves React’s rendering performance by allowing **prioritization, interruption, and resumption** of tasks.  

---

## **6️⃣ Quick Revision Recap**  

✅ **React is a Library, Not a Framework** → More flexible, UI-focused.  
✅ **Virtual DOM** → Optimized updates for fast UI performance.  
✅ **JSX** → Write HTML inside JavaScript.  
✅ **State vs Props** → State (mutable), Props (immutable).  
✅ **React Fiber** → Enhances rendering performance.  
✅ **Context API vs Redux** → Context API (built-in), Redux (for complex apps).  
✅ **React Router** → Enables navigation without page reloads.  
✅ **Hooks** → Manage state and side effects in functional components.  
✅ **BAAS** → Firebase, Appwrite, Supabase for serverless backend.  

