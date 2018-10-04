import React from "react"
import Img from 'react-image'

const SiteHeader = () => (
  <div className="ui fixed inverted menu">
    <div className="ui container">
      <span className="header item"><Img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" /></span>
    </div>
  </div>
)

export default SiteHeader
