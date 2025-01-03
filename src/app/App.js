import React from "react";

import Card from "./EmployeeDirectory";
import employees from "./employeedb";


function createCard(props){
   return ( 
        <Card
          key={props.id}
          name={props.name}
          title={props.title}
          department={props.department}
          tel={props.phone}
          email={props.email}
        />
        )};

        function App() {
            return (
              <div>
             
                {employees.map(createCard)}
              </div>
            );
          }
          
          export default App;