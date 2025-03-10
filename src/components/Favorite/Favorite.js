import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';
import Container from '../Container/Container';

const Favorite = () => {
  const favoriteCards = useSelector(state =>
    state.cards.filter(card => card.isFavorite)
  );

  if (favoriteCards.length === 0) {
    return <h2 className={styles.noFavorites}>No favorite cards...</h2>;
  }

  return (
    <Container>
    <section className={styles.favorite}>
      <h2>Your Favorite Cards</h2>
      <ul>
        {favoriteCards.map(card => (
          <li key={card.id}>
            <Card {...card} />
          </li>
        ))}
      </ul>
    </section>
    </Container>
  );
};

export default Favorite;
