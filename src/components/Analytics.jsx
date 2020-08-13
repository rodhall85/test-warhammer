import ReactGA from 'react-ga';
import { v4 as uuidv4 } from 'uuid';

const init = () => {
    ReactGA.initialize('UA-175404998-1');
    ReactGA.set({
        userId: uuidv4()
    })
};

const raiseTutorialStepEvent = (step) => {
    ReactGA.event({
        category: "Tutorial Clicked",
        action: `User clicked the ${step} step`
    })
};

export { init, raiseTutorialStepEvent }