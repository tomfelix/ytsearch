import React from 'react'
import VideoItem from './VideoItem';

const VideosList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(video => {
        return (
            <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
        )
    });

    return (
        <div className="ui middle aligned divided list">
            {renderedList}
        </div>
    )
}

export default VideosList
