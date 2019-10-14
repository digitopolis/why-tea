import React from 'react'
import Media from 'react-bootstrap/Media'

const VideoItem = ({ id, snippet, handleVideoSelect }) => {
	const thumbnailUrl = snippet.thumbnails.default.url
	return (
		<Media
			as='li'
			className='mb-3'
			style={{ cursor:'pointer' }}
			onClick={ () => handleVideoSelect(id.videoId) }>
			<img
				className='mr-3'
				src={thumbnailUrl}
				alt=''
			/>
			<Media.Body>
				<p>{snippet.title}</p>
				<p className='text-muted'>{snippet.channelTitle}</p>
			</Media.Body>
		</Media>
	)
}

export default VideoItem
