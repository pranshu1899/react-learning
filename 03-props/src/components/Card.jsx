import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.img}
      />

      <h1>{props.user}</h1>
      <h2>{props.age}</h2>

      <button>View Profile</button>
    </div>
  )
}

export default Card