import React from 'react';
import styled from 'styled-components';
import { data } from '../utils/data';
import LeavesDecoration from './LeavesDecoration';

const splitName = (token) => {
	let name = token.split('-');
	return `${name[0]} ${name[1]}`;
};

const Products = () => {
	return (
		<Section>
			<Title>Latest Products</Title>
			<LeavesDecoration alpha={0.4} adjust={true} />
			<ProductsWrapper>
				{data.map((info, index) => {
					const { imgName, description, price } = info;
					return (
						<ProductWrapper key={index}>
							<ProductImg
								src={
									require(`../assets/products/${imgName}.png`)
										.default
								}
								alt={`Photo of Thesis ${splitName(imgName)}`}
							/>
							<ProductDescription>
								{description}
							</ProductDescription>
							<ProductPrice>{price}</ProductPrice>
							<ProductButton>Learn More</ProductButton>
						</ProductWrapper>
					);
				})}
			</ProductsWrapper>
		</Section>
	);
};

const Section = styled.section`
	padding: 2em 0;
`;

const Title = styled.h2`
	text-align: center;
	text-decoration: underline;
	margin: 2em 0;
`;

const ProductsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const ProductWrapper = styled.div`
	margin: 2em 2em;
	max-width: 20em;
`;

const ProductImg = styled.img``;

const ProductDescription = styled.p`
	font-weight: 500;
	margin: 0.5em 0;
`;

const ProductPrice = styled.span`
	font-weight: 500;
`;

const ProductButton = styled.button`
	font-size: 0.9em;
	font-weight: bold;
	display: block;
	border: none;
	color: white;
	background: black;
	padding: 1em;
	border-radius: 0.6em;
	margin: 1em 0;
	transition: all 0.3s ease-in-out;

	&:hover {
		color: black;
		background: white;
		filter: drop-shadow(0 0.5rem 1rem rgba(0, 0, 0, 0.1));
	}
`;

export default Products;
