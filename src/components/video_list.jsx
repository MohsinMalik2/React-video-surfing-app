import React from 'react'
import VideoListItem from './video_list_item'

function VideoList(props) {

    const videoList = props.videos.map((video) => {
        return <VideoListItem onVideoSelect = {props.onVideoSelect} key={video.etag} video={video}/>
    });
    
  return (
            <div className="col-md-4">
                <ul className='list-group list-unstyled'>
                    {videoList}
                </ul>
            </div>
          
  )
}

export default VideoList