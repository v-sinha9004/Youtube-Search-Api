
import React from 'react';

const VideoDetail = ({video}) => {
	if(!video){
		return <div>Loading.....</div>
	}
	console.log(video);
	const videoId=video.id.videoId;
	console.log(videoId);
	const url= `https://www.youtube.com/embed/${videoId}`;
	// const url2 = "https://www.youtube.com/embed/8G6IRIjwoso";

	return (
		<div className="video-detail col-md-8">
			<div>
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;