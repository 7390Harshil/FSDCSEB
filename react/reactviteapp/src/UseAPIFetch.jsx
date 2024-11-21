import React, { useState } from 'react'

function UseAPIFetch() {
    const[data1 , setData] = useState([]);
    const response = fetch("https://dummyjson.com/recipes");
    response.then((res) => {
        console.log(res);
        res.json().then((data) => {
            console.log(data);
            setData(data);
        })
    })
    .catch((error) => {console.log(error)})

  return (
    <div>UseAPIFetch
        {JSON.stringify(data1)};
    </div>
  )
}
export default UseAPIFetch;