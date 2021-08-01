import styled from '@emotion/styled';
import { format } from 'date-fns';
import useHassConfig from '@hooks/useHassConfig';

const TimeContainer = styled.div`
	color: ${props => props.theme.colors.textLight};
	font-size: 70px;
`;

export function TimeView() {
	const timeFormat = useHassConfig('timeFormat');
	return <TimeContainer>{format(new Date(), timeFormat)}</TimeContainer>;
}
