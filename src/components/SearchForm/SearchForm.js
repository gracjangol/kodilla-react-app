// src/components/SearchForm/SearchForm.js

import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/store';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(updateSearchString(e.target.value));
  };

  return (
    <form className={styles.searchForm}>
      <TextInput onChange={handleInputChange} />
      <Button type="submit">
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
