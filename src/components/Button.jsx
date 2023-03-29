import React from 'react'

export default function Button(props) {
  console.log("Button render");
  return (
    <div>
        <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {id ? "Save" : "Create"}
            </button>
            <button type="button" onClick={() => history(-1)} className="bg-slate-500 hover:bg-slate-800 text-slate-500 font-bold py-2 px-4 rounded">
          Cancel</button>
    </div>
  )
}
