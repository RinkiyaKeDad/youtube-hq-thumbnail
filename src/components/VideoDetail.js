import React from 'react';

const VideoDetail = ({ video }) => {

    if (!video) {
        return <div>Loading...</div>;
    }

    console.log(video)
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    console.log(video);

    return (
        <div>


            <div className="ui embed">
                {/*<iframe title="video player" src={videoSrc} />*/}
                <img src={`https://img.youtube.com/vi/${video.id.videoId}/maxresdefault.jpg`}/>
            </div>

            
            <div className="ui segment">

               {/* <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p> */}
                <h4 className="ui header">Instructions</h4>
                <p>To Download the Image, <br/>
                    1. Right click on the image.<br/>
                    2. Click Save Image As...</p>
            </div>

        </div>
    );
}
export default VideoDetail;