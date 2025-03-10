import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFavorite } from '../../redux/store';
import styles from './Card.module.scss';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeCard(id));
  };

  const handleFavoriteToggle = () => {
    dispatch(toggleCardFavorite(id));
  };

  return (
    <li className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.buttons}>
        <button
          className={`${styles.favoriteButton} ${isFavorite ? styles.favorited : ''}`}
          onClick={handleFavoriteToggle}
        >
          <i className={`fa ${isFavorite ? 'fa-heart' : 'fa-heart-o'}`}></i>
        </button>
        <button className={styles.removeButton} onClick={handleRemove}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default Card;
