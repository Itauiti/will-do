import React from 'react';
import PropTypes from 'prop-types';
import MoreAboutCard from './MoreAboutCard.js';

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
      counter: 0,
      more: false,
    };

    this.handeleLikeClick = this.handeleLikeClick.bind(this);
    this.handeleShowMore = this.handeleShowMore.bind(this);
  }

  handeleLikeClick() {
    const { isLiked, counter } = this.state;
    if (!isLiked) {
      this.setState({ isLiked: !isLiked, counter: counter + 1 });
    } else {
      this.setState({ isLiked: !isLiked, counter: counter - 1 });
    }
  }

  handeleShowMore() {
    const { more } = this.state;
    this.setState({ more: !more });
  }

  render() {
    const { name, logo, key } = this.props;
    const { isLiked, counter } = this.state;
    return (
      <div className="card">
        <div className={this.state.more ? "card__main card__main_theme_dark" : "card__main"}>
          <img className="card__user-img" src={logo} alt="" />
          <div className="card__top">
            <h2 className="card__user-name">{name}</h2>
            <p className="card__text">Поставлена цель такая-то, потому что...., обязательно сделаю!</p>
          </div>
          <div className="card__bottom">
            <button
              className="card__link"
              onClick={this.handeleShowMore}
            >
              Подробнее &rarr;
          </button>
            <div className="card__icon-container">
              <div className="card__like-counter">{counter}</div>
              <button
                className={isLiked ? 'card__like-icon card__like-icon_liked' : 'card__like-icon'}
                onClick={this.handeleLikeClick}>
              </button>
            </div>
          </div>
        </div>
        {this.state.more ? <MoreAboutCard name = {name} key = {key} logo = {logo}/> : null}
      </div>
    )
  }
}

Card.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
  key: PropTypes.number,
}

export default Card;