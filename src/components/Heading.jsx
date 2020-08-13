import React from 'react';

import styles from './headingStyles.module.css';

const Heading = ({ image, text }) => {
    const raiseGaEvent = step => {
        console.log(`Will raise GA event for ${step}!`)
    };

    return (
        <div className={styles.heading} onClick={() => raiseGaEvent(image)}> 
            <img src={require(`../images/${ image }.jpg`)} />
            <div className={styles.headingText}>{ text }</div>
        </div>
    )
};

export default Heading;