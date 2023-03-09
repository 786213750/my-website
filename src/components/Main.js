import React from 'react';
import experiences from '../data/ExperienceStaticData';
import { Home, About, Experience} from './';

const Main = () => (
	<main>
		<Home />
		<About />
		<Experience experiences={experiences} />
	</main>
);

export default Main;
