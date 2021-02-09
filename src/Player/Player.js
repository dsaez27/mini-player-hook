import React, { useEffect, useState, useRef } from 'react';

import './player.css';
import pause from './../Assets/img/pause.png';
import play from './../Assets/img/play.png';

function useInterval(callback, delay) {
	const savedCallback = useRef();

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}

export const MusicPlayer = ({ image, url }) => {
	const [playing, setPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const audioRef = useRef(null);

	const togglePlaying = () => setPlaying((prev) => !prev);

	useEffect(() => {
		if (audioRef && audioRef.current) {
			if (playing) audioRef.current.play();
			else audioRef.current.pause();
		}
	}, [playing]);

	useInterval(() => {
		if (audioRef && audioRef.current) {
			const { currentTime, duration } = audioRef.current;
			setProgress(Math.ceil((currentTime * 100) / duration));
		}
	});

	return (
		<>
			<audio src={url} ref={audioRef} />
			<div className='box'>
				<img
					height='60'
					width='60'
					className='rounded-3 ms-2 me-2'
					src={image}
					alt='episode art'
				/>
				<div className='data ms-1 me-1'>
					<span className="header-music">In The Shadows</span>
					<span className="body-music">The Rasmus</span>
					<div class='progress'>
						<div
							class='progress-bar bg-info progress-bar-width'
							role='progressbar'
							style={{ width: `${progress}%` }}
							aria-valuenow='50'
							aria-valuemin='0'
							aria-valuemax='100'></div>
					</div>
				</div>
				<div
					className='p-2 cursor-pointer bg-gray-200 rounded-full inline-block'
					onClick={togglePlaying}>
					{playing ? (
						<img src={pause} alt='pause' className='img-size' />
					) : (
						<img src={play} alt='pause' className='img-size' />
					)}
				</div>
			</div>
		</>
	);
};
