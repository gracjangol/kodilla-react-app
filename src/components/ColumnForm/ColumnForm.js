import styles from './ColumnForm.module.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addColumn } from '../../redux/store';



const ColumnForm = ({ listId }) => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        if (title && icon) {
            dispatch(addColumn({ title, icon, listId }));
            setTitle('');
            setIcon('');
        }
    };

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
                <span className={styles.inputLabelWrapper}>Title:</span>
                <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className={styles.inputWrapper}>
                <span className={styles.inputLabelWrapper}>Icon:</span>
                <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            </div>
            <Button type="submit">Add column</Button>
        </form>
    );
};

export default ColumnForm;
