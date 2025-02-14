Here, we will be learning about the concepts of PROPS and also how to install TAILWIND in my React Project 

For Installing TAILWIND: 
follow the official Docs TAILWIND in Vite
Link : https://tailwindcss.com/docs/installation/using-vite

The steps are as below: 
1. Create a new React Project
npm create vite@latest
cd projName

2. In project directory :
npm install -D tailwindcss postcss autoprefixer //MAY CAUSE PROBLEM IN NEXT STEP DUE TO VERSION COMPATABILITY (didnt worked in my laptop)
USE IN CASE OF ANY ERRORS : npm install -D tailwindcss@3.4.1 postcss@8.4.35 autoprefixer@10.4.19  (worked)
npx tailwindcss init -p

3. It will create a new file named 'tailwind.config.js' in the root directory of your project.
Update the file to : 
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


4. Modify your Index.css by adding these Tailwind Directives at the Top : 
@tailwind base;
@tailwind components;
@tailwind utilities;

5. Use Tailwind and Run your React Project!!




// NOW, WE WILL BE CREATING A 2 CARDS and Pass DATA/PROPS into it!! 

1. Create a new folder named 'components' in the root directory of your project and create a new file(component) named 'Card.jsx' in it.

See the code, and try to understand the PROPS and how we pass the value from App.jsx to Card.jsx! 


Basic Simple passing of Props :
ALSO SEE THE PASSING OF A DEFAULT VALUE IN THE PROPS | it will render the default value if we not pass the value in the props
Ex: 
Card({username, btnText="visit me"}) 
Here, we are passing the value of username and btnText and also we are giving the default value to btnText = "visit me"


```jsx
function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="hitesh" />
    </>
  )
}



import React from 'react'

function Card({username, btnText="visit me"}) {
    console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md ">
  <img
    src="link"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText } →
    </button>
  </div>
</div>
  )
}

export default Card
```