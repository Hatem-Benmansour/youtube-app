import React from 'react'

const list=[{
                 vid:"https://www.youtube.com/embed/9hb_0TZ_MVI?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3",
                 title:"ReactJS Tutorial - 2 - Hello World",
                 id:Math.random()

}, 
{
                 vid:"https://www.youtube.com/embed/9VIiLJL0H4Y?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3",
                 title:"ReactJS Tutorial - 3 - Folder Structure",
                 id:Math.random()

}, {
                 vid:"https://www.youtube.com/embed/Y2hgEGPzTZY?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3",
                 title:"ReactJS Tutorial - 4 - Components",
                 id:Math.random()

}, {
                 vid:"https://www.youtube.com/embed/Cla1WwguArA?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3",
                 title:"ReactJS Tutorial - 5 - Functional Components",
                 id:Math.random()

}, {
                 vid:"https://www.youtube.com/embed/lnV34uLEzis?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3",
                 title:"ReactJS Tutorial - 6 - Class Components",
                 id:Math.random()

}, 
]

const VidéoList = () => {
  return ( 
    <div> {list.map(el=> <div style={{display:"flex", margin:"10px"}} key={el.id}>
                 <iframe style={{width:"200px" , height:"auto"}} src= {el.vid} title="vid"> </iframe>
                 <h5 style={{margin:"10px", width:"90px",fontSize:"17px"}}>{el.title} </h5>
    </div>)}

    </div>
  )
}

export default VidéoList