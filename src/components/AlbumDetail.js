import React from 'react';

const VideoDetail = ({ album }) => {
  if (!album) {
    return <div>Loading...</div>;
  }

  const albumImageLarge = album.artworkUrl100.replace('100x100', '400x400');

  return (
    <div className="album-detail">
      <div className="cover">
        <img src={albumImageLarge} alt="asd" />
      </div>
      <div className="details">
        <li>{album.collectionName}</li>
        <li>{album.artistName}</li>
      </div>
    </div>
  );
};

export default VideoDetail;
