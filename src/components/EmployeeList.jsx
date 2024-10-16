import React, { useContext } from 'react'
import { EmployeeContext } from '../employeeContext'
import { EmployeeSubList } from './EmployeeSubList'

export const EmployeeList = () => {
    const {employees} = useContext(EmployeeContext)
  return (
    <div>EmployeeList
        <ul>
            {
                employees.map((employee) => {
                    return <li>{employee.name}</li>
                })
            }
        </ul>
        {/* //Provider */}
        <EmployeeSubList></EmployeeSubList>
    </div>
  )
}
