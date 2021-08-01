import store from '@store';

export default function useCallService() {
	const { callService } = store.hass.use(
		({ callService }) => ({ callService }),
		() => true
	);
	return callService;
}
