// src/components/CardForm/CardForm.js

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss';

const CardForm = ({ columnId }) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ title, columnId }));
    setTitle('');
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className={styles.buttonWrapper}>
        <Button type="submit">Add card</Button>
      </div>
    </form>
  );
};

export default CardForm;
