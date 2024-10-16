import React, { useContext } from 'react'
import { EmployeeContext } from '../employeeContext'

export const EmployeeSubList = () => {
    const {employees,title} = useContext(EmployeeContext)
  return (
    <div>EmployeeSubList - {title}

        <ul>
            {
                employees.map((employee) => {
                    return <li>{employee.name}</li>
                })
            }
        </ul>
    </div>
  )
}
