import React, { useState } from 'react';
import styled from 'styled-components';
import LogoImage from '../assets/logo.png';
import { AiOutlineUp } from 'react-icons/ai';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDrawer = () => setIsOpen(!isOpen);

	return (
		<Header>
			<Nav>
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

const Header = styled.header`
	background: red;
`;

const Nav = styled.nav``;

const LogoWrapper = styled.div`
	background: white;
	padding: 1em 0;
`;

const Logo = styled.img`
	width: 2.5em;
	z-index: 1;
	margin: 0 auto;
`;

const NavItemLogo = styled.img`
	width: 2.5em;
`;

const NavMenuWrapper = styled.div`
	height: 100vh;
	width: 100%;
	z-index: -1;
	position: fixed;
	left: 0;
	top: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
	transition: all 0.5s ease-in-out;
`;

const NavMenu = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	height: 100%;
	position: relative;
`;

const NavMenuItem = styled.li``;

const NavMenuItemLogo = styled.li`
	display: none;
`;

const NavItemLink = styled.a`
	text-decoration: none;
	font-weight: 600;
	cursor: pointer;
`;

const MenuClose = styled.div`
	text-align: center;
	transform: translateY(-3em);
	cursor: pointer;
`;

export default Navbar;
