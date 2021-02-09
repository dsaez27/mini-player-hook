import React from 'react';
import './app.css';
import { MusicPlayer } from './Player/Player';

const App = () => {

	const url =
		'https://doc-0c-40-docs.googleusercontent.com/docs/securesc/6cb2bmednn0vs2irhe421k2dg53luo80/hlnovuhmkfjej0n05ad6570lmhrfmn57/1610899725000/14850506506470887789/14850506506470887789/1pbluRKBitQQPeN5O14L2D_8DI3LIJXEW?e=download&authuser=0&nonce=e724o3s2oaid4&user=14850506506470887789&hash=6ub9e33bt9c7s7i8ouh6bmf0umejfbu8';
	const image =
		'https://e-cdns-images.dzcdn.net/images/cover/d06a6ca2546f2d4b51e5bdd779995dd2/264x264-000000-80-0-0.jpg';

	return (
		<>
			<MusicPlayer url={url} image={image} />
		</>
	);
};

export default App;
