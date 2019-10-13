import React from 'react'
import Col from 'react-bootstrap/Col'
import VideoItem from '../components/videoItem'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

const VideoList = ({ videos, pageTokens, handleVideoSelect, handlePageChange }) => {
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
			<ButtonGroup aria-label='search page navigation'>
				{ pageTokens && pageTokens.prev
					? <Button onClick={ () => handlePageChange(pageTokens.prev) } variant='outline-secondary'>Prev</Button>
					: null }
				{ pageTokens && pageTokens.next
					? <Button onClick={ () => handlePageChange(pageTokens.next) } variant='outline-secondary'>Next</Button>
					: null }
			</ButtonGroup>
		</Col>
	)
}

export default VideoList
