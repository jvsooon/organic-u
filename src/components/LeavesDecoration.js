import React from 'react';
import styled from 'styled-components';
import Leaves from '../assets/leaves.png';

const LeavesDecoration = ({ alpha }) => {
	return (
		<>
			<LeavesImg
				src={Leaves}
				left={true}
				alpha={alpha}
				alt='Photo of leaves'
			/>
			<LeavesImg
				src={Leaves}
				right={true}
				alpha={alpha}
				alt='Photo of leaves'
			/>
		</>
	);
};

const Box = styled.div``;

const LeavesImg = styled.img`
	/* width: 10em; */
	width: max(10em, 20vw);
	position: absolute;
	left: ${({ left }) => (left ? '-4em' : 'unset')};
	right: ${({ right }) => (right ? '-4em' : 'unset')};
	transform: scaleX(${({ left }) => (left ? -1 : '1')});
	/* margin-left: ${({ left }) => (left ? '-5em' : 0)}; */
	/* margin-right: ${({ right }) => (right ? '-5em' : 0)}; */
	/* z-index: -1; */
	opacity: ${({ alpha }) => (alpha > 0 ? alpha : 0)};
`;

export default LeavesDecoration;
