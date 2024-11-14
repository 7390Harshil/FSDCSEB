import React from 'react';
import Student from './student';
import './student.css'
import Usestudentstate from './Usestudentstate';

function HelloWorld() {
  const h1 = <h1>Hello World!</h1>
  const mystyle  ={
    color:'white',
    backgroundColor : 'purple'
  }

  const StudentData = [{
    college : "ABES Engineering College",
    Name : "Tom",
    pic : <img src='https://media.istockphoto.com/id/1369754239/photo/university-student-in-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=LjFVDfjusWBjYTNliHV9DyXfApPGc8DmgBGEtfVgQ0Q=' height={100} width={100} />,
    branch : "CSE",
    roll : 1,
    section : "B"}
  ,
  {
    college : "ABES Engineering College",
    Name : "Tammy",
    pic : <img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height={100} width={100} />,
    branch : "CSE",
    roll : 3,
    section : "B"
  },
  {
    college : "ABES Engineering College",
    Name : "Tan",
    pic : <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ47HILWuUgVTqOxL-lJ0Jdvo9tpUNIP5X5Q&s' height={100} width={100} />,
    branch : "CSE",
    roll : 2,
    section : "B"
  }
]
  return (
    <div>
      <h2>Hello</h2>
    <div>
      <Usestudentstate></Usestudentstate>
    </div>
    </div>
    // <div style={{backgroundColor : 'orange'}}>
    //   {h1}
    //   <div style={mystyle}>
    //     ABES Engineering College
    //   </div>
    //   <div style={{display : 'flex'}}>
    //      {
    //       StudentData.map(
    //         (ele) => {
    //           return <Student data = {ele} />
    //         }
    //       )         
    //      }
    //     {/*<Student 
    //     name = 'Harshil' 
    //     pic = {<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height={100} width={100} />}
    //     branch = ' CSE' 
    //     roll = '2200320100069' 
    //     section='B'/>

    //   <Student college = 'ABES Enginerring College' 
    //     name = 'Prabhat' 
    //     pic = {<img src='https://media.istockphoto.com/id/1369754239/photo/university-student-in-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=LjFVDfjusWBjYTNliHV9DyXfApPGc8DmgBGEtfVgQ0Q=' height={100} width={100} />}
    //     branch = ' CSE' 
    //     roll = '2200320100112' 
    //     section='B'/>

    //   <Student college = 'ABES Enginerring College' 
    //     name = 'Priyanshu' 
    //     pic = {<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ47HILWuUgVTqOxL-lJ0Jdvo9tpUNIP5X5Q&s' height={100} width={100} />}
    //     branch = ' CSE' 
    //     roll = '2200320100169' 
    //     section='B'/>*/}
    //     </div>
    //   </div>
  );
}
export default HelloWorld;