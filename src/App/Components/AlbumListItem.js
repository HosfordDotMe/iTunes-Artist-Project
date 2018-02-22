import React from 'react';

const AlbumListItem = ({ album, onAlbumSelect }) => {
  const albumImage = album.artworkUrl100;
  const albumName = album.collectionName;

  return (
    <li onClick={() => onAlbumSelect(album)} className="album__list__item">
      <img className="media-object" src={albumImage} alt={albumName} />
    </li>
  );
};
export default AlbumListItem;
