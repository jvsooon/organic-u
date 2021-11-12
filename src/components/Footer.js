import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors.js';
import LogoImage from '../assets/logo.png';

const colTwo = [
	'FAQs',
	'Careers',
	'Terms and Conditions',
	'Shipping and Returns',
];
const colThree = [
	'Organic Products Story',
	'Organic Producs and Make-up',
	'Join Our Affiliate Program',
];

const Footer = () => {
	return (
		<FooterWrapper>
			<InnerWrapper>
				<FooterColumn>
					<FooterLogo src={LogoImage} alt='Organic u Products logo' />
				</FooterColumn>
				<FooterColumn>
					<FooterTitle>help</FooterTitle>
					{colTwo.map((linkName, index) => (
						<FooterLink key={index} href='#!'>
							{linkName}
						</FooterLink>
					))}
				</FooterColumn>
				<FooterColumn>
					<FooterTitle>our story</FooterTitle>
					{colThree.map((linkName, index) => (
						<FooterLink key={index} href='#!'>
							{linkName}
						</FooterLink>
					))}
				</FooterColumn>
				<FooterColumn>
					<FooterTitle>contact us</FooterTitle>
					<FooterLink href='#!'>Customer Care</FooterLink>
					<FooterTitle>email</FooterTitle>
					<FooterLink href='#!'>organicu@products.com</FooterLink>
					<FooterTitle>phone no</FooterTitle>
					<FooterLink href='#!'>+1 (800)000-000</FooterLink>
				</FooterColumn>
				<FooterColumn>
					<FooterTitle>stay connected</FooterTitle>
					<InputWrapper>
						<Input placeholder='Enter email address' type='text' />
						<SubscribeButton>Subscribe</SubscribeButton>
					</InputWrapper>
				</FooterColumn>
			</InnerWrapper>
		</FooterWrapper>
	);
};

const FooterWrapper = styled.footer`
	background: ${colors.light_grey};
	position: relative;
	left: 50%;
	width: 99.8vw;
	margin-left: -50vw;
	padding: 2em 5%;
	/* left: 0; */
	/* right: 50%; */
	/* margin: 0 -50vw; */
`;

const InnerWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	/* justify-content: space-around; */
	max-width: 87em;
	margin: 0 auto;
`;

const FooterColumn = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1em 2em;
`;

const FooterLogo = styled.img`
	width: 5em;
`;

const FooterTitle = styled.span`
	font-weight: bold;
	text-transform: uppercase;
`;

const FooterLink = styled.a`
	color: black;
	cursor: pointer;
	text-decoration: none;
`;

const InputWrapper = styled.div`
	display: flex;
	margin: 1em 0;
`;

const Input = styled.input`
	border: none;
	padding: 1em 0.3em;
	border-radius: 0.6em;
	filter: drop-shadow(0 0.5rem 1rem rgba(0, 0, 0, 0.1));
`;

const SubscribeButton = styled.button`
	border: none;
	background: black;
	color: white;
	border-radius: 0.6em;
	transition: all 0.3s ease-in-out;

	&:hover {
		background: white;
		color: black;
		filter: drop-shadow(0 0.5rem 1rem rgba(0, 0, 0, 0.1));
	}
`;

export default Footer;
