import _ from 'lodash';
import React, { Component } from 'react';
import axios from 'axios';
import DocumentTitle from 'react-document-title';
import logo from './Images/icons8-cd-100.png';
import './App.css';
import SearchBar from './Components/SearchBar';
import AlbumList from './Components/AlbumList';
import AlbumDetail from './Components/AlbumDetail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      selectedAlbum: null,
    };
    this.albumSearch('Grateful Dead');
  }

  albumSearch(term) {
    axios
      .get(`https://itunes.apple.com/search?term=${term}&entity=album`)
      .then(
        res =>
          this.setState({
            albums: res.data.results,
            selectedAlbum: res.data.results[0],
          }),
      // Place holder for rejected
      <div>UH OH</div>,
      )
      // eslint-disable-next-line no-console
      .catch(err => console.log('Error', err));
  }

  render() {
    const albumSearch = _.debounce(term => this.albumSearch(term), 300);

    return (
      <div className="app">
        <DocumentTitle title = "Who's your favorite artist?" />
          <header className="app__header">
            <img src={logo} className="app__logo" alt="logo" />
            <SearchBar onSearchTermChange={albumSearch} />
          </header>
          <div className="app__content">
            <div className="album__content">
              <AlbumDetail album={this.state.selectedAlbum} />
              <div className="album__list">
                <AlbumList
                  onAlbumSelect={selectedAlbum => this.setState({ selectedAlbum })}
                  albums={this.state.albums}
                />
              </div>
            </div>
          </div>
          <footer className="app__footer">
            < div > Eric Hosford - https: //github.com/HosfordDotMe/iTunes-Artist-Project</div>
          </footer>
      </div>
    );
  }
}

export default App;
