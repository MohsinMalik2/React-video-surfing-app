import React from 'react'

function VideoListItem({video, onVideoSelect}) {
    const imgUrl = video.snippet.thumbnails.default.url;

  return (
    
    <li onClick={() => {onVideoSelect(video)}} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imgUrl}  alt={video.snippet.title} />
            </div>
            <div className="media-body">
                <p className="mt-0 media-heading"><b>{video.snippet.title}</b></p>
                {/* {video.snippet.description}. */}
            </div>
        </div>
    </li>
  )
}

export default VideoListItem