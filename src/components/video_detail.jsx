import React from 'react'

function VideoDetail({video}) {

    if(!video){
        return <div> Loading ....</div>
    }
    else{
        const videoId = video.id.videoId;
        const url = `https://www.youtube.com/embed/${videoId}`
        return (
            <div className="col-md-8 mb-5">
                <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" 
                            src={url} 
                            allowFullScreen>
                        </iframe>
                </div> 
                <h5 className='mt-3'>{video.snippet.title}</h5> 
                {video.snippet.description}
            </div>
            
        )
    }
   
}

export default VideoDetail