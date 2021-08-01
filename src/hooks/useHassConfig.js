import { get, isEqual } from 'lodash';
import useHass from '@hooks/useHass';
import defaults from '../defaults.yml';
const empty = Symbol('EMPTY');
export default function useHassConfig(key, fallback = empty) {
	const config = useHass(({ config }) => config, isEqual);
	const fallbackValue = fallback !== empty ? fallback : get(defaults, key);
	return get(config, key, fallbackValue);
}
