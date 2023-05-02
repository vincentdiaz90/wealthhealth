import React from 'react'
import './EmployeesList.css'

import { useState, useEffect } from "react";

export default function EmployeesList() {

      // Employees list
      const employees = JSON.parse(localStorage.getItem("employees")) || [];

      let employeesInfos;
      if(employees.length !== 0) {
          employeesInfos = Object.getOwnPropertyNames(employees[0]) || "";
      } else {
          employeesInfos = [];
      }


      const [employeesSearched, setemployeesSearched] = useState([]);



    useEffect(() => {
        let resultFound = [];

        /* For each employee */
        employees.forEach((properties) => {
            resultFound.push(employees);

        });

        /* Put the results in the table */
        if(resultFound.length !== 0) {
            setemployeesSearched(resultFound);
        } else {
            resultFound.push(null);
        }
        
    }, []);

  return (

        <div className='employees-list'>
            <h1 className='list-employee-title'>List of employees</h1>
            <table className="data-table">

                {/* Properties entities */}
                <thead className="data-table-head">
                    <tr className="data-table-row">
                        {/* no employee */}
                        {
                            ((employeesInfos.length === 0) || (employeesSearched[0] === null)) &&
                            <td className="">No employee already create</td>
                        }

                        {/* At least one */}
                        {
                            (employeesInfos.length !== 0 && employeesSearched[0] !== null) && employeesInfos.map((entity, index) =>
                                <td className="data-table-sort" key={index}>{entity}</td>
                            )
                        }
                    </tr>
                </thead>

                {/* Properties value */}
                <tbody className="data-table-body">

                    {
                        employees.map((element, index) => 
                            <tr className="data-table-row" key={index}>
                                {
                                    employeesInfos.map((name, index) => 
                                        <td className="data-table-body-value" key={index}>{element[name]}</td>
                                    )
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
  )
}
