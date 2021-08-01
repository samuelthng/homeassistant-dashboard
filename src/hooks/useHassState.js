import { get } from "lodash";
import useHass from '@hooks/useHass';

export default function useHassState(entityName, defaultValue = undefined) {
    const hass = useHass();
    return get(hass, ['states', entityName], defaultValue);
}