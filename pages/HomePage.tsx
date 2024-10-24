import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styles from './HomePage.module.css';
import {
  name,
  description,
  LinkedinURL,
  InstagramURL,
  GithubURL,
  TwitterURl,
} from '../constants/userInfo';

export default function HomePage() {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Anton&family=Roboto:wght@300&display=swap');
      </style>
      <div className={styles.homepage}>
        <div className={styles.detail}>
          <div className={styles.textContainer}>
            <div className={styles.name}>
              <h1 aria-label="Introduction">Hi, I'm Karim Maftoun</h1>
            </div>

            <div className={styles.bio}>
            <h2 aria-label="About Karim">
              I’m a computer science major and aspiring entrepreneur at UWCSE. I work on my own passion projects 
              and have a sneaker reselling business. I also volunteer with the Washington Bus to raise political awareness 
              on important issues in the Seattle area. Thank you for coming to my website.</h2>
            </div>

            <div className={styles['social-media']}>
              <SocialIcon className={styles['social-icon']} 
              url={LinkedinURL} 
              aria-label="LinkedIn Profile"
               />
              <SocialIcon className={styles['social-icon']} 
              url={GithubURL} 
              aria-label="GitHub Profile" 
              />
              <SocialIcon className={styles['social-icon']} 
              url={InstagramURL} 
              aria-label="Instagram Profile"
              />
              <SocialIcon className={styles['social-icon']} 
              url={TwitterURl} 
              aria-label="Twitter Profile" 
              />
            </div>
          </div>

          <div className={styles.imgContainer}>
            <img
              className={styles.circleimg}
              src={'./picture.jpg'}
              alt="Profile picture of Karim Maftoun, standing outdoors on a sunny day, 
              holding a beverage in a clear cup with a straw. They are wearing a dark t-shirt and light-colored shorts,
              and are positioned in front of a blue building. The background includes a sidewalk with a advertising,
               as well as a few people walking in the distance."
              tabIndex="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}