import React from 'react';
import styled from 'styled-components';

const imgNames = ['amika', 'clinique', 'cover-girl', 'liz-earle', 'lorac'];

const Press = () => {
	return (
		<Section>
			<SectionTitle>Love From The Press</SectionTitle>
			<PressWrapper>
				{imgNames.map((imgName, index) => (
					<PressLogo
						key={index}
						src={require(`../assets/press/${imgName}.png`).default}
						alt={`${imgName} logo`}
					/>
				))}
			</PressWrapper>
		</Section>
	);
};

const Section = styled.section`
	padding: 2em 0;
`;

const SectionTitle = styled.h2`
	text-align: center;
	text-decoration: underline;
	margin-bottom: 2em;
`;

const PressWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
	gap: 0 2em;
`;

const PressLogo = styled.img`
	height: 100%;
	margin: 2em 0;
	width: max(7em, 9vw);
`;

export default Press;
