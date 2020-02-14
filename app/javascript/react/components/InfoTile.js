import React from 'react';
import { Link } from "react-router-dom"

const InfoTile = (props) => {

  return(

    <span className="mini-info">
      <img src={props.image} className="index-img" />
      <div className="index-image-text">
        <div className="course-title-text">
          <h3>{props.name}</h3>
          <h5>{props.address}</h5>
        </div>
      </div>
    </span>
  )
};

export default InfoTile

// let InfoClassName
// if (props.selectedStatus === true){
//   pieClassName = "selected"
// }
// <li onClick={props.handleInfoClick} className={InfoClassName}>
//    {name}
// </li>
