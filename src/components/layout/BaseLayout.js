import React from 'react'
import { Link, Button } from 'react-router-dom'
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem
} from 'react-pro-sidebar'
import "../../css/style.css"


const BaseLayout = (props) => {
  return (
    <>

<div className="background">
    <div className="mainWrapper">
      <div className="left-side">
        <div className="left-side-logo">
        <img src="newCannon.jpg" width="100%"></img>   
        </div>
        <div className="left-side-nav">
          <br></br>
          <br></br>
          <a className="btn btn-default btn-lg" href="/"> Home </a> <br></br>
          <a className="btn btn-default btn-lg" href="/table"> Table </a> <br></br>
          <a className="btn btn-default btn-lg" href="/roster"> Roster </a> <br></br>
          <a className="btn btn-default btn-lg" href="/schedule"> Schedule </a> <br></br>
        </div>
        <div className="left-side-links">
        <br></br>
        <br></br>
        <br></br>
        <br></br>

          Links:
          <br></br>
        <a href="https://www.premierleague.com/">Premier League</a><br></br>
        <a href="https://rapidapi.com/api-sports/api/api-football/">Football API</a><br></br>
        <a href="https://www.espnfc.com">ESPN FC</a> <br></br>
        <a href="https://www.arsenal.com">Official Website</a> <br></br>
        </div>
      </div>
      <div className="right-side">
      <div className="right-side-header"> 
        <div className="right-side-header-left">
        <img src="arsenalLogo.png" width="75px"></img>      
        </div>
        <div className="right-side-header-center">
          <h1> Arsenal FC </h1>
        </div>
        <div className="right-side-header-right">
          <img src="arsenalLogo.png" width="75px"></img>
        </div>
        <div className="mainContent">
          
          

        </div>
      </div>
      </div>
      </div>
    </div>

      
    <br/><br/>
      {props.children}
    <br/><br/>
    </>
  )
}

export default BaseLayout