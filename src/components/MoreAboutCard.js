import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class MoreAboutCard extends React.Component {

  constructor() {
    super();
  };

  render() {
    const user = this.props.userData;
    const isAddInfo = this.props.isAddInfo;

    return (
      <div className="card__more">
      <p>Тут расписана более подробная информация о конкретной цели, включая этапы ее реализации, фоточки и т.п.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, repellat!
        Vel, nihil praesentium eum, doloribus blanditiis architecto nulla laborum mollitia, ducimus obcaecati asperiores tempora ab
        officiis libero quae optio. Alias!
      </p>
      {isAddInfo &&
       <Link to={`/users_page/${user.id}`} className="card__link">{`Открыть профиль ${user.name.first} ${user.name.last} `}&rarr;</Link>}
    </div>
    )
  }
}

MoreAboutCard.propTypes = {
  user: PropTypes.object,
}

export default MoreAboutCard;