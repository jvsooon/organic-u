import React, { useState } from 'react';
import styled from 'styled-components';
import LogoImage from '../assets/logo.png';
import { colors } from '../utils/colors';
import { AiOutlineUp } from 'react-icons/ai';
import LeavesDecoration from './LeavesDecoration';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDrawer = () => setIsOpen(!isOpen);

	return (
		<Header>
			<Nav>
				{/* <LeavesDecoration alpha={1} /> */}
				<LogoWrapper onClick={toggleDrawer}>
					<Logo src={LogoImage} alt='Organic u Products logo' />
				</LogoWrapper>
				<NavMenuWrapper isOpen={isOpen}>
					<NavMenu>
						<NavMenuItem>
							<NavItemLink href='#!'>Home</NavItemLink>
						</NavMenuItem>
						<NavMenuItem>
							<NavItemLink href='#!'>Products</NavItemLink>
						</NavMenuItem>
						<NavMenuItemLogo>
							<NavItemLogo
								src={LogoImage}
								alt='Special Dishes logo'
							/>
						</NavMenuItemLogo>
						<NavMenuItem>
							<NavItemLink href='#!'>Blog</NavItemLink>
						</NavMenuItem>
						<NavMenuItem>
							<NavItemLink href='#!'>About Us</NavItemLink>
						</NavMenuItem>
					</NavMenu>
					<MenuClose onClick={toggleDrawer}>
						<AiOutlineUp size={24} />
					</MenuClose>
				</NavMenuWrapper>
			</Nav>
		</Header>
	);
};

const Header = styled.header``;

const Nav = styled.nav``;

const LogoWrapper = styled.div`
	padding: 1em 0;
	z-index: 1;
`;

const Logo = styled.img`
	width: 3em;
	margin: 0 auto;
`;

const NavItemLogo = styled.img`
	width: 3em;
`;

const NavMenuWrapper = styled.div`
	height: 100vh;
	width: 100%;
	position: fixed;
	left: 0;
	top: ${({ isOpen }) => (isOpen ? 0 : '-100vh')};
	transition: all 0.3s ease-in-out;
	background: ${colors.light_grey};
	z-index: 1;
`;

const NavMenu = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	height: 100%;
`;

const NavMenuItem = styled.li``;

const NavMenuItemLogo = styled.li`
	display: none;
`;

const NavItemLink = styled.a`
	text-decoration: none;
	font-weight: 600;
	cursor: pointer;
	color: black;
`;

const MenuClose = styled.div`
	text-align: center;
	transform: translateY(-3em);
	cursor: pointer;
`;

export default Navbar;
