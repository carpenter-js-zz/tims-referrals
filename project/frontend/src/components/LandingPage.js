import React from 'react'
import { Link } from 'react-router-dom';

export default function LandingPage(props) {
  const title = props.match.params.name;

  return (
    <div className="landingPage">
      <h1 className="title is-1">{title}</h1>

      <Link to={'/'}>
        <button className="button is-link">Back to home</button>
      </Link>
    </div>
  )
}
