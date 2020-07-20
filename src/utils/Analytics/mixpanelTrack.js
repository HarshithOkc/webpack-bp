import mixpanel from 'mixpanel-browser';
import { fancyConsoleLog } from './fancyConsoleLog';

mixpanel.init(`b8f375c8df48bb563b24d19af10ffe58`);
const mixpanelTrack = (str, obj={}) => {
    //fancy console logging
   fancyConsoleLog(str, obj);
    //mixpanel track (mixpanel adds a token field with the obj so keep it in the end)
    if (typeof obj === 'undefined') mixpanel.track(str);
    else mixpanel.track(str, obj);
};

const mixpanelIdentify = id => {
    mixpanel.identify(id);
};

export { mixpanelTrack,mixpanelIdentify };
