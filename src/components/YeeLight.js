import React, { memo, useCallback, useState } from 'react';
import useCallService from '@hooks/useCallService';
import { Switch } from 'antd';

const YeeLight = ({ id, entity_id, state }) => {
	console.log(`${id} rendered`);
	const [loading, setLoading] = useState(false);
	const callService = useCallService();

	const handleToggleLight = useCallback(async () => {
		if (!entity_id) return;
		setLoading(true);
		await callService('light', 'toggle', { entity_id });
		setLoading(false);
	}, [callService, entity_id]);

	return (
		<div
			style={{
				display: 'flex',
				padding: 10,
				background: 'rgba(255,255,255,0.15)',
				borderRadius: '8px',
			}}
		>
			<div style={{ flexGrow: 1 }}>{id}</div>
			<Switch checked={state === 'on'} disabled={state === 'offline'} onClick={handleToggleLight} loading={loading} />
		</div>
	);
};
export default memo(YeeLight);
