import React from 'react';

const AlbumListItem = ({ album, onAlbumSelect }) => {
  const albumImage = album.artworkUrl100;
  const albumName = album.collectionName;

  return (
    <li onClick={() => onAlbumSelect(album)} className="list-group-item">
      <div className="album-list media">
        <div className="media-left">
          <img className="media-object" src={albumImage} alt={albumName} />
        </div>
        <div className="media-body">
          <div className="media-heading">{albumName}</div>
        </div>
      </div>
    </li>
  );
};
export default AlbumListItem;
