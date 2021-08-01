import { entity } from "simpler-state";
const hass = entity(null);
const showMenu = entity(null);
const narrow = entity(null);
const panel = entity(null);
const store = { hass, showMenu, narrow, panel };
export default store;
