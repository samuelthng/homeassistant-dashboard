import { isEqual } from 'lodash';
import useHass from '@hooks/useHass';
export default function useHassState(entityName, defaultValue = undefined) {
	const entity = useHass(({ states }) => states[entityName], isEqual);
	return entity || defaultValue;
}
