import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <PageTitle>About</PageTitle>
      <p>Welcome to the About page. Learn more about our project here.</p>
    </div>
  );
};

export default About;
