import React from 'react'
import Media from 'react-bootstrap/Media'

const VideoItem = ({ id, snippet }) => {
	const thumbnailUrl = snippet.thumbnails.default.url
	return (
		<Media as='li' className='mb-3'>
			<img
				className='mr-3'
				src={thumbnailUrl}
				alt=''
			/>
			<Media.Body>
				<p><strong>{snippet.title}</strong></p>
				<p className='text-muted'>{snippet.channelTitle}</p>
			</Media.Body>
		</Media>
	)
}

export default VideoItem
