import React from 'react';

import { raiseTutorialStepEvent } from './Analytics';

import styles from './headingStyles.module.css';

const Heading = ({ step, text }) => {
    const raiseGaEvent = step => {
        console.log(`Will raise GA event for ${step}!`)
        raiseTutorialStepEvent(step);
    };

    return (
        <div className={styles.heading} onClick={() => raiseGaEvent(step)}> 
            <img src={require(`../images/${ step }.jpg`)} alt={ `Learning how to ${step} with Warhammer models` } />
            <div className={styles.headingText}>{ text }</div>
        </div>
    )
};

export default Heading;