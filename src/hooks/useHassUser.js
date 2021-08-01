import useHass from '@hooks/useHass';
import { isEqual } from 'lodash';
export default function useHassUser() {
	return useHass(({ user }) => user, isEqual);
}
