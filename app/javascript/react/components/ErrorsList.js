import React from 'react'
import _ from 'lodash'

const ErrorsList = (props) => {
  
  const errantFields = Object.keys(props.errors)

  if (errantfields.length > 0){
    let index = 0
    const listItems = errantFields.map((field) => {
      index ++
      return (
        <li key={index}>
        {_.capitalize(field)} {props.errors[field]}
        </li>
      )
    })
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    )
  } else {
    return ""
  }
};


export default ErrorsList
