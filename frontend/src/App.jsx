import { useState } from 'react';
import websites from './assets/websites.json';
import { images } from './assets/images.js';
import './App.css';

function App() {
	return (
		<>
			<div id="page_con">
				<h1>My Projects</h1>
				<div id="sites_con">
					{Object.entries(websites).map(([name, info]) => {
						return (
							<div key={name} className="site-div">
								<h2>{name}</h2>
								<img src={images[info.image]} alt={name} />
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default App;
