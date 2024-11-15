import React from "react";
import "./App.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import { useState } from "react";

function App() {
  const [Student, setStudent] = useState([
    {
      studentName: "Muhammad",
      rollNo: "123",
      section: "A",
    },
    {
      studentName: "Muneeb",
      rollNo: "345",
      section: "B",
    },
    {
      studentName: "Ali",
      rollNo: "38834",
      section: "C",
    },
    {
      studentName: "Huzaifa",
      rollNo: "87895",
      section: "D",
    },
    {
      studentName: "Rameez",
      rollNo: "0993",
      section: "F",
    },
  ]);
  const deleteHandler = (studentRollNo) => {
    let restStudent = Student.filter((student) => {
      if (student.rollNo !== studentRollNo) {
        return student;
      }
    });
    setStudent(restStudent);
    // Student.shift();
    console.log(Student);
  };

  return (
    <>
      <table>
        <tr>
          <th>StudentName</th>
          <th>S.RollNo</th>
          <th>S.Section</th>
          <th>Delete</th>
        </tr>
        {Student.map((student, i) => {
          return (
            <>
              <tr key={i}>
                <td>{student.studentName}</td>
                <td>{student.rollNo}</td>
                <td>{student.section}</td>
                <td>
                  <button onClick={() => deleteHandler(student.rollNo)}>
                    delete
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
}

export default App;
