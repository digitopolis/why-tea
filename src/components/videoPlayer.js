import React from 'react'
import Row from 'react-bootstrap/Row'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

const VideoPlayer = (props) => {
	const youTubeUrl = 'https://www.youtube.com/embed/'
	return (
		<Row>
			<div className='iframeContainer'>
				<ResponsiveEmbed aspectRatio='16by9'>
					<embed type='video/mp4' src={youTubeUrl + props.videoId}/>
				</ResponsiveEmbed>
			</div>
		</Row>
	)
}

export default VideoPlayer

// <iframe
// 	title='video frame'
// 	src={youTubeUrl + props.videoId}
// 	frameBorder='0'
// 	style={{
// 		position: 'absolute',
// 		top: 0,
// 		left: 0,
// 		border: 'none',
// 		width: '100%',
// 		height: '100%'
// 	}}/>
