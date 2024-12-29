import React from 'react'
import '../CSS/Profile.css'

const Profile = (props) => {
  return (
    <div className='card-container'>
        <div className='card'>
            <span className={props.status? "status online":"status offline"}>{props.status? "online":"offline"}</span>
            <img src={props.image}  alt="" />
            <h3>{props.name}</h3>
            <h3>{props.place}</h3>
            <p>{props.role}</p>
            <div className='buttons'>
                <button className='btn'>Message</button>
                <button className='btn1'>Following</button>
            </div>
        </div>
        <div className='skills'>
            <h2>Skills</h2>
            <ul>
            {props.skills.map((SKILL,INDEX)=>{

            return <li key={INDEX}>{SKILL}</li>
            })}

            </ul>
        </div>

      
    </div>
  )
}

export default Profile