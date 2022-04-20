import React from 'react';
import styles from './BookDescription.module.scss';
import astro from '../../images/astro.png'
import {ReactComponent as Newspaper} from '../../images/icons/newspaper.svg';
import {ReactComponent as Headphones} from '../../images/icons/headphones.svg';
import {ReactComponent as Add} from '../../images/icons/add.svg';
import {ReactComponent as Buy} from '../../images/icons/buy.svg';

const BookDescription = () => {
  return (
    <div className={styles.container}>
      <div className={`mainContainer`}>
        <div className={styles.info}>
          <img src={astro} alt={astro}/>
          <div className={styles.description}>
            <span className={styles.title}> Astrophysics for People in a Hurry’s Summary</span>
            <span className={styles.about}>Key Insights & Analysis</span>
            <span className={styles.author}>Kelly Brogan, MD with Kristin Loberg</span>
            <div className={styles.action}>
              <button className={styles.btnAction}>
                <div className={styles.btnContent}>
                  <Newspaper/>
                  <span className={styles.text}>18 min read</span>
                </div>
              </button>
              <button className={styles.btnAction}>
                <div className={styles.btnContent}>
                  <Headphones/>
                  <span className={styles.text}>14 min listen</span>
                </div>
              </button>
              <button className={styles.btnAction}>
                <div className={styles.btnContent}>
                  <Add/>
                  <span className={styles.text}>Add to Library</span>
                </div>
              </button>
              <button className={styles.btnAction}>
                <div className={styles.btnContent}>
                  <Buy/>
                  <span className={styles.text}>Buy Book</span>
                </div>
              </button>
            </div>
            <div>
              <button className={styles.btnTag}>Business & Finance</button>
              <button className={styles.btnTag}>Business & Finance</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDescription;