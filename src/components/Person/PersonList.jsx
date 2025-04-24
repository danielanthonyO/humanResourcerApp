// person list

import React from 'react';
import PersonCard from './PersonCard';
import { employees } from './personsData.js';


const PersonList = () => {
    return (
        <div className='boxes'>
        <div className="person-list">
            {employees.map((employee) => (
                <PersonCard
                    key={employee.id}
                    id={employee.id}
                    name={employee.name}
                    title={employee.title}
                    salary={employee.salary}
                    phone={employee.phone}
                    email={employee.email}
                    animal={employee.animal}
                    startDate={employee.startDate}
                    location={employee.location}
                    department={employee.department}
                    skills={employee.skills.join(',')}
                />
            ))}
        </div>
        </div>
    );
};

export default PersonList;


