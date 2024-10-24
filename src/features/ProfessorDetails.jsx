import React from 'react';

// Fake data for professors
const fakeProfessors = [
  {
    id: 1,
    name: 'Mr. Lang',
    bio: 'studied at FSU, class of 2020.',
    profileImage: 'pic here',
    contactInfo: '555-555-5555; lang@FSU.org',
    departmentId: 1
  },
  {
    id: 2,
    name: 'Mrs. Reik',
    bio: 'studied at TSU, class of 2006.',
    profileImage: 'pic here',
    contactInfo:'555-555-5552; reik@FSU.org',
    departmentId: 2
  },
  {
    id: 3,
    name: 'Sir Yventek',
    bio: 'studied at WSU, class of 2012.',
    profileImage: 'pic here',
    contactInfo: '555-555-5522; yventek@FSU.org',
    departmentId: 3
  },
  {
    id: 4,
    name: 'Mme Gobstunt',
    bio: 'studied at YSU, class of 2016',
    profileImage: 'pic here',
    contactInfo: '555-555-5222; gobstunt@FSU.org',
    departmentId: 2
  },
  {
    id: 5,
    name: 'Dr. Stryknein',
    bio: 'studied at HSU, class of 2011',
    profileImage: 'pic here',
    contactInfo: '555-555-2222; stryknein@FSU.org',
    departmentId: 3
  }
];

export default function Professor() {
  return (
    <div>
      <h1>Professors</h1>
      <ul>
        {fakeProfessors.map((professor) => (
          <li key={professor.id}>
            <h2>{professor.name}</h2>
            <p>{professor.bio}</p>
            <p>{professor.profileImage}</p>
            <p>{professor.contactInfo}</p>
            <p>english</p> 
          </li>
        ))}
      </ul>
    </div>
  );
};

//ln 57 will be used to test what shows, and from there we 
//can edit to see whether we should add:
//<Link to={`/departments/${professor.departmentId}`}>
//{department.name}
//</Link>