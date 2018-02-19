import _ from 'lodash';
import React, { Component } from 'react';
import axios from 'axios';
import logo from '../images/icons8-cd-100.png';
import './App.css';
import SearchBar from '../components/SearchBar';
import AlbumList from '../components/AlbumList';
import AlbumDetail from '../components/AlbumDetail';


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
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">iTunes Albums</h1>
          <SearchBar onSearchTermChange={albumSearch} />
        </header>
        <div className="app-content">
          <div className="album-detail">
            <AlbumDetail album={this.state.selectedAlbum} />
          </div>
          <div className="album-list">
            <AlbumList
              onAlbumSelect={selectedAlbum => this.setState({ selectedAlbum })}
              albums={this.state.albums}
            />
          </div>
        </div>
        <footer className="app-footer">
          <h3>Eric Hosford</h3>
        </footer>
      </div>
    );
  }
}

export default App;
