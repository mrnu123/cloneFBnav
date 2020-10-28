import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import logo_fb from '../image/facebook_logo.svg'
import home_btn from '../image/home.svg'
import vdo_btn from '../image/ondemand_video.svg'
import market_btn from '../image/storefront.svg'
import group_btn from '../image/groups.svg'
import game_btn from '../image/sports_esports.svg'
import user_btn from '../image/account_circle.svg'
import add_btn from '../image/add_circle.svg'
import msg_btn from '../image/messenger.svg'
import './nav.css'



function nav() {
  return (
    <nav className="navbar">
        <a class="navbar-brand" href="#">
            <img src={logo_fb} width="48" height="48"></img>
        </a>
        <form>
            <input class="form-control mr-sm-2" type="search" placeholder="Search Facebook" aria-label="Search" />
        </form>
        <div class="col-2"></div>
        {/* <div class="row"> */}
        <div class="col">
        <a class="navbar-brand" href="#">
            <img src={home_btn} width="36" height="36" type="image/svg+xml" />
        </a>
        </div>
        <div class="col">
        <a class="navbar-brand" href="#">
            <img src={vdo_btn} width="36" height="36" type="image/svg+xml" />
        </a>
        </div>
        <div class="col">
        <a class="navbar-brand" href="#">
            <img src={market_btn} width="36" height="36" type="image/svg+xml" />
        </a>
        </div>
        <div class="col">
        <a class="navbar-brand" href="#">
            <img src={group_btn} width="36" height="36" type="image/svg+xml" />
        </a>
        </div>
        <div class="col">
        <a class="navbar-brand" href="#">
            <img src={game_btn} width="36" height="36" type="image/svg+xml" />
        </a>
        </div>
        <div class="col-2"></div>
        <a class="navbar-brand" href="#">
            <img src={user_btn} width="36" height="36" type="image/svg+xml" />User
        </a>
        <a class="navbar-brand" href="#">
            <img src={add_btn} width="48" height="48" type="image/svg+xml" />
        </a>
        <a class="navbar-brand" href="#">
            <img src={msg_btn} width="40" height="40" type="image/svg+xml" />
        </a>
    </nav>
  )
}
export default nav;