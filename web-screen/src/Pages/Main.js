import React from 'react';

import HomeImg from '../assets/Home.png';
import EventImg from '../assets/Event.png';
import EventDetailImg from '../assets/EventDetail.png';
import FavouriteImg from '../assets/Favourite.png';
import CategoriesImg from '../assets/Categories.png';

import Apple from '../assets/appstore.svg';
import Google from '../assets/googleplay.svg';


import './Main.scss';

export default class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="main__logo"> 
          <p className="main__event">Event</p><p className="main__friends">Friends</p>
        </div>
        <div className="main__img-container">
          <img src={EventDetailImg} className="main__home-img"/>
          <img src={EventImg} className="main__home-img"/>
          <img src={HomeImg} className="main__home-img"/>
          <img src={CategoriesImg} className="main__home-img"/>
          <img src={FavouriteImg} className="main__home-img"/>
        </div>
        <div className="main__app-container">
          <img src={Apple} className="main__app" />
          <img src={Google} className="main__app" />
        </div>
        
      </div>
    )
  }
}