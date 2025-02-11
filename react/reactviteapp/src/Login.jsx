// import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.css';

// function Login() {
//     const [email , setEmail] = useState();
//     const [password , setPassword] = useState();

//     function showData(){
//     }
//   return (
//       <div>
//         {email}
//         <br></br>
//         {password}
//         <form>
//   <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label">Email address</label>
//     <input type="email" onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label">Password</label>
//     <input type="password" onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1"/>
//   </div>
//   <div class="mb-3 form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary" onSubmit={showData()}>Submit</button>
// </form>
//       </div>
//   )
// }
// export default Login ;




import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');                                                                           

  function showData(event) {
    event.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  }

  return (
    <div>
      {email}
      <br />
      {password}
      <form onSubmit={showData}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Login;
