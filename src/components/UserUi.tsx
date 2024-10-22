import React from 'react';
import images from '../constants/images';
import "../styles/user-ui.css";

const UserUi = () => {
  return (
    <div className="userUi">
      <div className="userUiIcons">
        <img src={images.helpAccount} alt="Help"/>
        <img src={images.chatAccount} alt="Chat"/>
        <div className="notificationIcon">
          <div className="circle"></div>
          <img src={images.notification} alt="Notification"/>
        </div>
      </div>
      <div className="separateSign"></div>
      <div className="account">
        <p className='userName'>John Doe</p>
        <img className="arrowDown" src={images.arrowDown} alt='Arrow' />
        <img className='userAvatar' src={images.avatar} alt='Avatar' />
      </div>
    </div>
  )
}

export default UserUi