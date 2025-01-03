import React from "react";
import ReactDOM from "react-dom/";
import EmployeeDirectory from "./EmployeeDirectory";
import App from "./App";
import Search from "./Search";

export default function Page(){
  return(

    <div>
<h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">My Employee Directory</h1>
<Search />
    <App />
    </div>
  )
}

