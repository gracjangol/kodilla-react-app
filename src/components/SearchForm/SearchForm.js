import styles from './SearchForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(searchValue));
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput value={searchValue} onChange={e => setSearchValue(e.target.value)} />
            <Button type="submit">
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;
