import React from 'react'
import Col from 'react-bootstrap/Col'
import VideoItem from '../components/videoItem'

const VideoList = ({ videos, handleVideoSelect }) => {
	return (
		<Col >
			<ul className='list-unstyled'>
				{videos.map(video => {
					return 	<VideoItem {...video}
										key={video.id.videoId}
										handleVideoSelect={handleVideoSelect}
									/>
				})}
			</ul>
		</Col>
	)
}

export default VideoList
