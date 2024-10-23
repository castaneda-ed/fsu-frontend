import React from 'react';

// Fake data for departments
const fakeDepartments = [
  {
    id: 1,
    name: 'Computer Science',
    description: 'Learn about algorithms, data structures, and more.',
  },
  {
    id: 2,
    name: 'Mathematics',
    description: 'Explore calculus, linear algebra, and number theory.',
  },
  {
    id: 3,
    name: 'Physics',
    description: 'Understand the laws of nature and the universe.',
  },
];

const Departments = () => {
  return (
    <div>
      <h1>Departments</h1>
      <ul>
        {fakeDepartments.map((department) => (
          <li key={department.id}>
            <h2>{department.name}</h2>
            <p>{department.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Departments;
