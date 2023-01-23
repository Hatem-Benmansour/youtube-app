import React from 'react'

const com=[{

                 id:Math.random,
                 Name:"mohamed",
                 comment:"Very useful for us",
                 urli:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTm-KJMECWJvjbROgmX9cEk8JNFy9lrYNrBP1FV7oZPw&s"
},
{

                 id:Math.random,
                 Name:"sami",
                 comment:"Thanks for this video sir",
                 urli:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgS9gt7bRQjO4-HPlDtfczUF7pOHNwDfqHnZgrbXm4qgyul1MgHkneswnmeMRUQNolJeM&usqp=CAU"
},
{

                 id:Math.random,
                 Name:"ali",
                 comment:"Amazing",
                 urli:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOH80WRk1WEtUqNcwmVf6MfxzLuSQHoojxGD7ge6eAlGyA-ZkL-5mJ99z8n2rsQHlZlo&usqp=CAU"
}]

const Comments = () => {
  return (
      <div>
        <div>
        <img style={{width:"80px" , borderRadius:"100px",margin:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9fEQRSJZ04arRamwwvKA9394aiOEGFOSyRKvgFm4hO73s62ws" alt='logo'/>
           <textarea
           style={{width:"850px",height:"50px",marginLeft:"40px"}}
           placeholder ="enter your comment"
           name=""
           id=""
           cols="30"
           row="10"
           
           > 
                  
                 </textarea>
        </div>

        {
          com.map(el=> <div style={{marginLeft:"100px", display:"flex"}} key={el.id}>
            <div>
            <img style={{width:"40px",height:"40px",borderRaduis:"100%"}} src={el.urli}alt="img" />
            </div>
            <div style={{marginLeft:"20px"}}>
              <h5>
                {el.Name}
              </h5>
              <p>{el.comment} </p>
 
            </div>
          </div>)
        }
                
    </div>

  
  )
}

export default Comments