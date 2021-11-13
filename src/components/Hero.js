import React from 'react';
import styled from 'styled-components';
import HeroImgSrc from '../assets/products/kit.png';

const Hero = () => {
	return (
		<Section>
			<Title>Great Skin Care Starts With Pure Ingredients</Title>
			<Subtitle>Eliminate the toxic, try the organic</Subtitle>
			<HeroImg
				src={HeroImgSrc}
				alt='Photo of two face product dropper bottles'
			/>
		</Section>
	);
};

const Section = styled.section`
	text-align: center;
	margin: 2em 0;
`;

const Title = styled.h1`
	@media (min-width: 600px) {
		margin: 0 max(10%, 14vw);
	}
`;

const Subtitle = styled.h2``;

const HeroImg = styled.img`
	margin: 0 auto;
`;

export default Hero;
