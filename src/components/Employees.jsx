import React, { useState } from 'react'
import { EmployeeList } from './EmployeeList'
import { EmployeeContext } from '../employeeContext'

export const Employees = () => {

    const [employees, setemployees] = useState([
        {
            id:1,
            name:"raj"
        },
        {
            id:2,
            name:"ram"
        }
    ])
    var title = "react"
  return (
    <div>
        <h1>EMPLOYEE COMPONENT</h1>
        <EmployeeContext.Provider value={{employees,title}}>
            <EmployeeList></EmployeeList>
        </EmployeeContext.Provider>
        {/* <EmployeeList employee  ={employees}></EmployeeList> */}
    </div>
  )
}
