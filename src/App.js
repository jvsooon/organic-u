import Navbar from './components/Navbar.js';
import GlobalStyle from './globalStyle';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 90%;
	max-width: 87em;
	margin: 0 auto;
`;

const App = () => {
	return (
		<Wrapper>
			<GlobalStyle />
			<Navbar />
		</Wrapper>
	);
};

export default App;
