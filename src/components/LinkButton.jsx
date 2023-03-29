import React from 'react'
import { Link } from "react-router-dom";
export default function LinkButton(props) {
  return (
    <Link
    to={props.to}
    className="bg-gradient-to-r from-slate-900  to-slate-500 text-white font-bold py-2 px-4 rounded shadow-md hover:ring-2 ring-gray-700"
  >
    { props.title}
  </Link>
  )
}
