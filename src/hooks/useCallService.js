import useHass from '@hooks/useHass';

export default function useCallService() {
	const { callService } = useHass(
		({ callService }) => ({ callService }),
		() => true
	);
	return callService;
}
