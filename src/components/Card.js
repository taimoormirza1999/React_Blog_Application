import {React,useState,useContext} from "react";
import LinkButton from "./LinkButton";
import ShadowContext from '../context/ShadowContext';

import { FaRegEdit,FaTrash } from "react-icons/fa";
export default function Card({title, id, excerpt, handleDelete, Link}) {
  const shadow = useContext(ShadowContext);

  return (
    <>
      <div className="flex flex-col justify-center ">

	  <div className={`max-w-sm ${shadow} bg-white border border-slate-200 rounded-lg  dark:bg-slate-800 dark:border-slate-700 hover:scale-110 transition-all`}>
 
        <img className="rounded-t-lg cursor-pointer" src={`https://picsum.photos/1200/630?car=${id}`} alt="" />

    <div className="p-5">
  
            <h5 className="mb-2 text-2xl font-bold tracking-tight cursor-pointer text-slate-900 dark:text-white capitalize">{title}</h5>

        <p className="mb-3 font-normal text-slate-700 dark:text-slate-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <span href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </span>
    </div>
</div>

	</div>

    </>
  )
}
