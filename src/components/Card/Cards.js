import React from 'react';
import './Cards.css';
import Items from './Items'

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Items
              src='whatIsDyne.png'
              text='Dyne helps YOU find your friends and people with the same interests as you and their availability, while eating at your favourite restaurants at a cheaper price!'
              label='What is Dyne?'
             
            />
            <Items
              src='mission.png'
              text='We strive to focus all our efforts to provide you with a platform that can make your life just a bit easier, by helping you foster meaningful and lasting connections, promising to bring the social in media back to YOU!'
              label='Our Mission'
             
            />
            <Items
              src='vision.png'
              text='The bedrock of our vision is to understand the importance of socialising and creating a more inclusive student community, using bold methodologies to create meaningful social interactions that keep the momentum of enthusiasm going strong within our community.'
              label='Our Vision'
           
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;