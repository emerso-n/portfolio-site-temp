import { useState } from 'react';
import websites from './assets/websites.json';

// let websites = require('~/assets/websites.json');
// console.log(websites[0].userName);

function App() {
	return (
		<>
			{Object.entries(websites).map(([name, info]) => {
				return <div>{info}</div>;
			})}
			Hello
		</>
	);
}

export default App;
