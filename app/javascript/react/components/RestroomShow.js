import React from 'react'
import { Link } from "react-router-dom"
import ReviewsForm from './ReviewsForm'


const RestroomShow = ({ restroomObject }) => {
  let { id, business_name, location, restroom_image, sanitation, payment, paying_customer, employee_only } = restroomObject

  return(
    <div className="show-image">
      <h2>{business_name}</h2>
      <h4>{location}</h4>
      <img src={restroom_image} />
      <h5>Sanitation: {sanitation}</h5>
      <h5>Payment to access?: {payment}</h5>
      <h5>Need to be a Customer?: {paying_customer}</h5>
      <h5>Employee_only?: {employee_only}</h5>
    </div>
  )
};


export default RestroomShow
