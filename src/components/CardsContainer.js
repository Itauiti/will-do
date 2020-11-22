import React, { useContext } from 'react';
import Card from './Card.js';
import {UsersDataContext} from '../App.js';


function CardsContainer() {
  const data = useContext(UsersDataContext);

  return (
    <div className="cards-container">
      {data.map(({ name, picture }, i) => {
        return (
          <Card
            name = {`${name.first} ${name.last}` }
            logo = { picture.medium }
            key = { i }
          />
        )
      })}
    </div>
  )
}

export default CardsContainer;

