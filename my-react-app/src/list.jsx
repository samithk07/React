import React from "react";
 let listitem=[1,2,3,4,5]

function List(){
return(
  <ul>
    {listitem.map((a)=>
    <li key={a}>{a}</li>
    )}
  </ul>
)
}
export default List