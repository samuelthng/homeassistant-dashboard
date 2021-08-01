import _ from 'lodash';
import useHass from '@hooks/useHass';
import defaults from '../defaults.yml';
const empty = Symbol('EMPTY');
export default function useHassConfig(key, fallback = empty) {
	const { config } = useHass();
	const fallbackValue = fallback !== empty ? fallback : _.get(defaults, key);
	return _.get(config, key, fallbackValue);
}
