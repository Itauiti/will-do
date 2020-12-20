import React, { useContext } from 'react';
import Card from './Card.js';
import {UsersDataContext} from '../App.js';
import PropTypes from 'prop-types';


function CardsContainer() {
  const data = useContext(UsersDataContext);
  const isAddInfo = true;

  return (
    <div className="cards-container">
      {data.map((userData, i) => {
        return (
          <Card
            userData = {userData}
            key = { i }
            isAddInfo = {isAddInfo}
          />
        )
      })}
    </div>
  )
}

CardsContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}

export default CardsContainer;

