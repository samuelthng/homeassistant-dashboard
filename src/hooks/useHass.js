import { useEntity } from 'simpler-state';
import store from '@store';
export default function useHass(transform, equalityFn) {
	return useEntity(store.hass, transform, equalityFn);
}
