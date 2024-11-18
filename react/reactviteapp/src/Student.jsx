import React from 'react'
import './student.css'

function Student({data}) {
  return (
    // <div className='icard'>
    //   {/* {JSON.stringify(data)} */}

  
    // <table>
    //     <tbody>
    //         <tr><td colSpan={2} className='colspan'>{data.college}</td></tr>
    //         <tr><td>Name : </td><td>{data.Name}</td></tr>
    //         <tr><td>pic:</td><td>{data.pic}</td></tr> 
    //         <tr><td>Branch : </td><td>{data.branch}</td></tr>
    //         <tr><td>Roll_Number : </td><td>{data.roll}</td></tr>
    //         <tr><td>Section : </td><td>{data.section}</td></tr>
    //         </tbody> 
    //         </table>
    // </div>

    <div className="card">
      <table>
        <tbody>
          <tr><td></td></tr>
        </tbody>
      </table>
    </div>
  )
}
// Student.defaultProps = {
//   college : "AKG Engineering College"
// }
export default Student;