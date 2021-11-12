import React from 'react';
import styled from 'styled-components';

const imgNames = ['light-skin', 'wheatish-skin', 'dusky-skin'];

const splitName = (token) => {
	let name = token.split('-');
	return `${name[0]} ${name[1]}`;
};

const Models = () => {
	return (
		<Section>
			<SectionTitle>Products For Every Skintone</SectionTitle>
			<ModelsWrapper>
				{imgNames.map((imgName, index) => (
					<ModelWrapper>
						<ModelImg
							key={index}
							src={
								require(`../assets/models/${imgName}.png`)
									.default
							}
						/>
						<Button>{splitName(imgName)} tone</Button>
					</ModelWrapper>
				))}
			</ModelsWrapper>
		</Section>
	);
};

const Section = styled.section`
	padding: 2em 0;
`;

const SectionTitle = styled.h2`
	text-align: center;
	margin-bottom: 2em;
`;

const ModelsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin-top: 2em;
`;

const ModelWrapper = styled.div`
	text-align: center;
	margin: 1em 0;
`;

const ModelImg = styled.img`
	border-radius: 0.6em;
`;

const Button = styled.button`
	font-size: 0.9em;
	border: 1px solid black;
	padding: 1em;
	border-radius: 0.6em;
	text-transform: capitalize;
	background: none;
	margin: 1em 0;
	transition: all 0.3s ease-in-out;

	&:hover {
		color: white;
		background: black;
		filter: drop-shadow(0 0.5rem 1rem rgba(0, 0, 0, 0.2));
	}
`;

export default Models;
