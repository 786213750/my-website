import { Nav } from './nav';
import { Main } from './components';
import NavProvider from './context/NavContext';
import './App.css';

function App() {
	return (
		<div className='appContainer'>
			<NavProvider>
				<Nav />
				<Main />
			</NavProvider>
		</div>
	);
}

export default App;
