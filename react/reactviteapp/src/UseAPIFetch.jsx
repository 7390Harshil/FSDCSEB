// import React, { useState } from 'react';

// function UseAPIFetch() {
//     const [data1, setData] = useState([]); 
//     const [loading, setLoading] = useState(false); 

//     function getData() {
//         setLoading(true);
//         console.log("Fetching Data...");
//         fetch("https://dummyjson.com/recipes")
//             .then((res) => {
//                 if (!res.ok) {
//                     throw new Error(`HTTP error! status: ${res.status}`);
//                 }
//                 return res.json();
//             })
//             .then((data) => {
//                 console.log(data);
//                 setData(data.recipes); 
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//             });
//             .finally(() => {
//               setLoading(false);
//             });
//     }

//     return (
//       /* {JSON.stringify(data1)}; */
//         <div>
//             <h2>UseAPIFetch</h2>
//             {/* {data1.map((ele, index) => (            
//                 <div key={index}>{ele.name}</div>                      
//             ))}  */}
//             {
//               data1.map((ele) => {
//                 return (
//                   <div style={{padding : '5px', marginLeft:'200px' , width : '300px' , border : '2px solid Red' , backgroundColor:'black' , color:'white'}}>
//                     <div style={{width:'200px'}}><img src={ele.image} height={100} width={200}></img></div>
//                     <div style={{fontWeight:'bold' , color:'yellow'}}>{ele.name}</div>
//                     <div>{ele.ingredients}</div>
//                   </div>
//               )
//               })
//             }
//             <button onClick={getData}>Fetch Data</button>
//         </div>
//     );
// }

// export default UseAPIFetch;


import React, { useState } from "react";

function UseAPIFetch() {
  const [data1, setData] = useState([]); 
  const [loading, setLoading] = useState(false); 

  function getData() {
    setLoading(true); 
    console.log("Fetching Data...");
    fetch("https://dummyjson.com/recipes")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data.recipes);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false); 
      });
  }

  return (
    <div>
      <h2>UseAPIFetch</h2>
      <button onClick={getData}>Fetch Data</button>

      {/* Conditional rendering for loading */}
      {loading ? (
        <div style={{ textAlign: "center", margin: "20px", fontSize: "18px", color: "blue" }}>
          Loading...
        </div>
      ) : (
        <div>
          {data1.map((ele, index) => (
            <div
              key={index}
              style={{
                padding: "5px",
                marginLeft: "200px",
                width: "300px",
                border: "2px solid red",
                backgroundColor: "black",
                color: "white",
              }}
            >
              <div style={{ width: "200px" }}>
                <img src={ele.image} alt={ele.name} height={100} width={200} />
              </div>
              <div style={{ fontWeight: "bold", color: "yellow" }}>{ele.name}</div>
              <div>{ele.ingredients}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UseAPIFetch;




