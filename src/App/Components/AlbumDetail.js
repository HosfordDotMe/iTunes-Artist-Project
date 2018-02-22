import React from 'react';

const AlbumDetail = ({ album }) => {
  if (!album) {
    return <div>Loading...</div>;
  }

  const albumImageLarge = album.artworkUrl100.replace('100x100', '400x400');
  const albumReleaseYear = album.releaseDate.slice(0, 4);

  return (
    <div className="album__detail">
      <div className="album__cover">
        <img src={albumImageLarge} alt={album.collectionName} />
      </div>
      <div className="album__info">
        <ul>
          <li className="album__info__title">{album.collectionName}</li>
          <hr width="80%" />
          <li className="album__info__artist">{album.artistName}</li>
          <li className="album__info__year">{albumReleaseYear}</li>
        </ul>
      </div>
    </div>
  );
};

export default AlbumDetail;
