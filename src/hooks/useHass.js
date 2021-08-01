import { useEntity } from 'simpler-state';
import store from '@store';
export default function useHass() {
	return useEntity(store.hass);
}
