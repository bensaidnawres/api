import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UserList() {

const [data, setdata] = useState()


useEffect(() => {
 

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      // handle success
      console.log(response.data);
setdata(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })



}, [])



  return (
    <div>
<table  style={{  border: '1px solid',  borderBottom:" 1px solid #ddd"}} >
<thead>
<td>name</td>
<td>email</td>
</thead>

<tbody>

{data&&data.map((el)=><tr>


    <td>{el.name}</td>
<td>{el.email}</td>


</tr>)}



</tbody>


</table>




    </div>
  )
}

export default UserList