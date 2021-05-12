import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) return <div>Sin video para mostrar</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=0`;

  return (
    <div>
      <div className="ui embed">
        <iframe
          title="Video player"
          src={videoSrc}
          allowFullScreen
          frameBorder="0"
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
