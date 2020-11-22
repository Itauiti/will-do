import React from 'react';

class Card extends React.Component {
  constructor () {
    super();
    this.state = {
      isLiked: false,
      counter: 0,
    };

    this.handeleLikeClick = this.handeleLikeClick.bind(this);
  }

  handeleLikeClick () {
    const { isLiked, counter } = this.state;
    if (!isLiked) {
      this.setState({isLiked: !isLiked, counter: counter + 1});
    } else {
      this.setState({isLiked: !isLiked, counter: counter - 1});
    }

  }

  render() {
    const { name, logo } = this.props;
    const { isLiked, counter } = this.state;
    const likeIconClass = `${isLiked ? 'card__like-icon card__like-icon_liked' : 'card__like-icon'}`;
    return (
      <div className="card">
        <img className="card__user-img" src={logo} alt="" />
        <div className="card__top">
          <h2 className="card__user-name">{name}</h2>
          <p className="card__text">Поставлена цель такая-то, потому что...., обязательно сделаю!</p>
        </div>
        <div className="card__bottom">
          <button className="card__link">Подробнее &rarr;</button>
          <div className="card__icon-container">
            <div className="card__like-counter">{counter}</div>
            <button className={likeIconClass} onClick={this.handeleLikeClick}></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;