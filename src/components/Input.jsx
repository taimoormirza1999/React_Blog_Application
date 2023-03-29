import React from 'react'
import { memo } from "react";
function Input({title,setTitle,label}) {
  return (
    <div className="mb-4">
    <label
      htmlFor="title"
      className="block text-gray-400 font-bold mb-2"
    >
      {label}
    </label>
    <input
      type="text"
      id="title"
      className="border rounded py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline w-full"
      value={title}
      onChange={(event) => setTitle(event.target.value)}
    />
  </div>
  )
}

export default memo(Input);
