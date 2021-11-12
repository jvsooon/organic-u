import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';

const imageNames = ['mamaearth', 'aloette', 'vilvah', 'sheth'];

const Companies = () => {
	return (
		<Section>
			<Wrapper>
				{imageNames.map((imgName, index) => (
					<CompanyLogo
						key={index}
						src={
							require(`../assets/companies/${imgName}.png`)
								.default
						}
						alt={`${imgName} logo`}
					/>
				))}
			</Wrapper>
		</Section>
	);
};

const Section = styled.section`
	background: ${colors.light_grey};
	padding: 0 5%;
	position: relative;
	left: 50%;
	width: 99.8vw;
	margin-left: -50vw;
	/* right: 50%; */
	/* margin: 2em -50vw; */
`;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
	gap: 0 2em;
	max-width: 87em;
	margin: 0 auto;
`;

const CompanyLogo = styled.img`
	height: 100%;
	margin: 2em 0;
	width: 8em;
`;

export default Companies;
