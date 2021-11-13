import React from 'react';
import styled from 'styled-components';
import Leaves from '../assets/leaves.png';

const LeavesDecoration = ({ alpha, adjust }) => {
	return (
		<Box>
			<LeavesImg
				src={Leaves}
				left={true}
				alpha={alpha}
				adjust={adjust}
				alt='Photo of leaves'
			/>
			<LeavesImg
				src={Leaves}
				right={true}
				alpha={alpha}
				adjust={adjust}
				alt='Photo of leaves'
			/>
		</Box>
	);
};
const Box = styled.div`
	position: absolute;
	left: 0;
	overflow-x: hidden;
	width: 100%;
	display: flex;
	justify-content: space-between;
	z-index: -1;
`;

const LeavesImg = styled.img`
	width: max(10em, 20vw);
	transform: scaleX(${({ left }) => (left ? -1 : '1')});
	margin-left: ${({ left }) => (left ? '-4em' : 0)};
	margin-right: ${({ right }) => (right ? '-4em' : 0)};
	opacity: ${({ alpha }) => (alpha > 0 ? alpha : 0)};

	@media (min-width: 600px) {
		margin-left: ${({ adjust }) => (adjust ? '-8vw' : '-4em')};
		margin-right: ${({ adjust }) => (adjust ? '-8vw' : '-4em')};
	}
`;

export default LeavesDecoration;
