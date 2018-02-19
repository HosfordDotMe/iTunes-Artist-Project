import React from 'react';
import AlbumListItem from './AlbumListItem';

const AlbumList = (props) => {
  const albumItems = props.albums.map(album =>
    (<AlbumListItem
      onAlbumSelect={props.onAlbumSelect}
      key={album.collectionId}
      album={album}
    />));


  return (
    <ul className="list-group">
      {albumItems}
    </ul>
  );
};

export default AlbumList;
