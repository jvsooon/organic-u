import React from 'react';
import styled from 'styled-components';

const imageNames = [
	'paraben-free',
	'artificial-fragrance-free',
	'cruelty-free',
	'clinically-tested',
];

const Standards = () => {
	return (
		<Section>
			<SectionTitle>Non-Toxic Products For You</SectionTitle>
			<StandardsWrapper>
				{imageNames.map((imgName, index) => (
					<StandardsLogo
						key={index}
						src={
							require(`../assets/standards/${imgName}.png`)
								.default
						}
					/>
				))}
			</StandardsWrapper>
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

const StandardsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
	gap: 0 2em;
`;

const StandardsLogo = styled.img`
	height: 100%;
	margin: 2em 0;
	width: 8em;
`;

export default Standards;
