import React from "react";
import employees from "./employeedb";

//Card component

    export default function Card(props){
 return (
    <div className="flex justify-center p-4">      
      <div className="bg-gray-200 max-w-sm w-full shadow-md py-8 px-10 md:px-8 rounded-md flex flex-col">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* <img class="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto" src="https://randomuser.me/api/portraits/men/78.jpg" alt="" /> */}
        <div className="flex flex-col text-center md:text-left">
          <div className="font-medium text-lg text-gray-800">{props.name}</div>
          <div className="text-gray-500 mb-3 whitespace-nowrap">{props.title}</div>
          <div className="text-gray-500 mb-3 whitespace-nowrap">{props.department}</div>
          <div className="text-gray-500 mb-3 whitespace-nowrap">{props.phone}</div>
          <div className="text-gray-500 mb-3 whitespace-nowrap">{props.email}</div>
        </div>
      </div>
    </div>
  </div>

)
}


