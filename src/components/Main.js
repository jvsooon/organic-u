import React from 'react';
import styled from 'styled-components';
import Companies from './Companies';
import Hero from './Hero';
import Models from './Models';
import Press from './Press';
import Products from './Products';
import Standards from './Standards';

const Main = () => {
	return (
		<MainWrapper>
			<Hero />
			<Companies />
			<Products />
			<Standards />
			<Models />
			<Press />
		</MainWrapper>
	);
};

const MainWrapper = styled.main``;

export default Main;
