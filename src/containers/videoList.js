import React from 'react'
import Col from 'react-bootstrap/Col'
import VideoItem from '../components/videoItem'

const VideoList = ({ videos }) => {
	return (
		<Col>
			<ul className='list-unstyled'>
				{videos.map(video => {
					return 	<VideoItem {...video} />
				})}
			</ul>
		</Col>
	)
}

export default VideoList
