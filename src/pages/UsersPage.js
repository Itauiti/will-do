import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UsersDataContext } from '../App.js';
import Card from '../components/Card.js';
import PropTypes from 'prop-types';

function UsersPage() {
  let { id } = useParams();
  const data = useContext(UsersDataContext);
  const user = data.find(f => f.id === id);
  const isAddInfo = false;

  return (
    <div className="user__container">
      <div className="user__info">
        <img className="user__avatar" src={user.picture} alt="" />
        <h2 className="user__title">{`${user.name.first} ${user.name.last}`}</h2>
        <p></p>
        <p></p>

      </div>
      <div className="user__to-do-list">
        <Card userData={user} isAddInfo={isAddInfo} />
        <Card userData={user} isAddInfo={isAddInfo} />
        <Card userData={user} isAddInfo={isAddInfo} />
      </div>
    </div>
  );
}

UsersPage.propTypes = {
  id: PropTypes.string,
}

export default UsersPage;