import styles from './ColumnForm.module.scss';
import React, { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => {

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
};

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}><span className={styles.inputLabelWrapper}>Title:</span> <TextInput value={title} onChange={e => setTitle(e.target.value)} /></div>
            <div className={styles.inputWrapper}><span className={styles.inputLabelWrapper}>Icon:</span> <TextInput value={icon} onChange={e => setIcon(e.target.value)} /></div>
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;