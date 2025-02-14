import React from 'react'

const Card = (props) => {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-sky-400 h-200px">
    <img
      src={props.image}
      alt={props.title}
      className="object-cover object-center w-full rounded-md h-72 "
    />
    <div className="mt-6 mb-2">
      <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-950">
        {props.title}
      </span>
      <h2 className="text-xl font-semibold tracking-wide">{props.name}</h2>
    </div>
    <p className="text-gray-300">
      {props.description}
    </p>
  </div>
  )
}

export default Card
