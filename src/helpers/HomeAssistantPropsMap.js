import store from "../store";
const HomeAssistantPropsMap = ['hass', 'panel', 'showMenu', 'narrow'].reduce((acc, key) => {
    if (!store[key]) {
        console.warn(`Missing entity store key: ${key}`);
        return acc;
    }
    return Object.assign(acc, { [key]: { set: store[key].set } });
}, {});

export default HomeAssistantPropsMap;
