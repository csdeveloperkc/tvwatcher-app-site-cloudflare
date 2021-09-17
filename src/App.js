import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Search from './components/Search';
import TvShow from './components/TvShow';
import TvShowList from './components/TvShowList';

import default_img from './assets/tvshow-original-wallpaper.png';


const App = () => {
  const [tvShow, setTvShow] = useState([]);
  const [favorites, setFavorites] = useState([]);
	const [searchValue, setSearchValue] = useState('');
  const baseUrl = 'https://api.tvmaze.com';

  /*
	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};
  */
  const searchTvShow = async (showName) => {
    console.log('Searching for.... '+showName)
    var url = `https://api.tvmaze.com/singlesearch/shows?q=${showName}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log('API response JSON is:'+responseJson.id);
  
    if(responseJson.id !== undefined){
      console.log('GOT HERE');
      /* check if API returned a result */
      setTvShow(responseJson);
    }
  }

	useEffect(() => {
    if(searchValue.length > 0){
      searchTvShow(searchValue);
    }
	}, [searchValue]);


  useEffect(() => {
    const tvShowFavorites = JSON.parse(
      localStorage.getItem('tvwatcher-app-site-favorites')
    );

    if(tvShowFavorites) {
      setFavorites(tvShowFavorites);
    }
  },[]);

  const saveToLocalStorage = (fav) => {
    localStorage.setItem('tvwatcher-app-site-favorites', JSON.stringify(fav));
  };

  const addToFavorite = (show) => {
    const tempFavorites = favorites.filter(
      (fav) => fav.id !== show.id
    );
    const newFavoriteList = [...tempFavorites, show];
		// const newFavoriteList = [...favorites, show];
		setFavorites(newFavoriteList);
		saveToLocalStorage(newFavoriteList);
	};

  const removeFromFavorite = (show) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.id !== show.id
    );

    setFavorites(newFavoriteList);
		saveToLocalStorage(newFavoriteList);   

  };

	return (
		<div className='container-fluid tv-app'>
      <div className="page-holder">
        <div className="container py-2">
          <header className="text-center py-2">
            <h1 className="display-4 font-weight-bold text-white mb-4">TVwatcher App Site</h1>
          </header>
        </div>
      </div>
			<div className='row d-flex flex-column favs'>				
				<div className='p-2'>
          <h1 style={{color: '#fff'}}>Favorites</h1>
        </div>
        <div className='p-2'>
          { favorites.length > 0 
           ? <TvShowList
              tvshowList={favorites}
              handleFavoriteClick={removeFromFavorite}
            />
           : <img style={{height: 500}} src={default_img} alt={"default img"}/>
          }
        </div>
			</div>
			<div className='row shows'>
          <div className='col'>
            {searchValue && <h1 style={{color: '#fff'}}>Search Results</h1>}
          </div>
          <div className='col'>
          <TvShow
             tvshow={tvShow}
             handleFavoriteClick={addToFavorite}
          />        
          </div>
          <div className='col'></div>
			</div>
			<div className='row search'>				
				<Search searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
		</div>
	);
};

export default App;
