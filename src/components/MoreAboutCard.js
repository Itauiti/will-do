import React from 'react';
import PropTypes from 'prop-types';

class MoreAboutCard extends React.Component {
  constructor() {
    super();
  };

  render() {
    const { name } = this.props;
    return (
      <div className="card__more">
      <p>Тут расписана более подробная информация о конкретной цели, включая этапы ее реализации, фоточки и т.п.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, repellat! Vel, nihil praesentium eum, doloribus blanditiis architecto nulla laborum mollitia, ducimus obcaecati asperiores tempora ab officiis libero quae optio. Alias!</p>
      <button className="card__link">{`Открыть профиль ${name} `}&rarr;</button>
    </div>
    )
  }
}

MoreAboutCard.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
  key: PropTypes.number,
}

export default MoreAboutCard;