import {useState} from 'react';
// import departmentList from './data' //
import './App.css';

export default function App() {
  const [department] = useState(departmentList);

  const [selectedDepartment, setSelectedDepartment] = useState();

  /** Updates the selected department according to the given `id` */
  function selectedDepartment(id) {
    const department = department.find((p) => p.id === id);
    setSelectedDepartment(department);
  }
  // Notice: we can use JSX in a variable in addition to returning it
  const $departments = (
    <ul className='departments'>
      {department.map((department) => (
        <li
          key={department.id}
          onClick={() => selectedDepartment(department.id)}
        >
          {department.name}
        </li>
      ))}
    </ul>
  );
  const $selectedDepartmentTeachers = selectedDepartment?.teachers.length >
    0 && (
    <div>
      <dt>Teachers</dt>
      <dd>
        <ul>
          {selectedDepartment.teachers.map((t) => (
            <li key={t.id}>{t.name}</li>
          ))}
        </ul>
      </dd>
    </div>
  );

  // This allows us to name the "render" sections of our code
  const $selectedDepartment = selectedDepartment && (
    <section>
      <h2>{selectedDepartment.name}</h2>
      <dl>
        <div>
          <dt>Email</dt>
          <dd>{selectedDepartment.email}</dd>
        </div>
        {$selectedDepartmentTeachers}
      </dl>
    </section>
  );

  return (
    <>
      <h2>Departments</h2>
      {$departments}
      {$selectedDepartment}
    </>
  );
}
