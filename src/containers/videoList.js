import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import VideoItem from '../components/videoItem'

const VideoList = ({ videos }) => {
	return (
		<Col>
			<h1>Video List</h1>
			{videos.map(video => {
				return (
					<Row>
						<VideoItem {...video} />
					</Row>
				)
			})}
		</Col>
	)
}

export default VideoList
