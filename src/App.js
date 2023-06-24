import './App.css';
import axios from 'axios';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import Pagenation from './components/Pagenation';
import MovieInfo from './components/MovieInfo';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [movielist, setMovielist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [genre, setGenre] = useState('');
  const [sort, setSort] = useState('like_count')
  const [title, setTitle] = useState('');
  const [limit, setLimit] = useState(18);

  useEffect( () => {
    loadMovie(sort, genre, currentPage);
  }, [movielist]);

  const loadMovie = async (sort, genre, currentPage) => {
    const {data: {data: {movies}}} = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=${limit}&page=${currentPage}&genre=${genre}&sort_by=${sort}&query_term=${title}`);
    //console.log(movies);
    setMovielist(movies);
    console.log(`genre = ${genre}, currentpage = ${currentPage}, sort=${sort}`)
    //console.log(movielist);
  }

  const sortTitle = () => {
    //console.log('title App')
    setSort('title')
  }

  const sortRating = () => {
    //console.log('rating App')
    setSort('rating')
  }

  const sortYear = () => {
    //console.log('year App')
    setSort('year')
  }

  const sortLike = () => {
    //console.log('year App')
    setSort('like_count')
  }

  const genreSearch = (genrein) => {
    //console.log('genre App')
    setGenre(genrein);
  }

  const titleSearch = (titlein) => {
    //console.log('title App')
    setTitle(titlein);
    setLimit(50);
  }

  const pageClick = (page) => {
    //console.log('pageClick app');
    setCurrentPage(page);
  }

  return (
    <div id="App">
      <Header sort={sort} sortTitle={sortTitle} sortRating={sortRating} sortYear={sortYear} 
      sortLike={sortLike} genreSearch={genreSearch} titleSearch={titleSearch} />
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MovieList movielist={movielist} />} />
          <Route path='/info/*' element={<MovieInfo />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Pagenation currentPage={currentPage} pageClick={pageClick} title={title} />} />
          <Route path='/info/*' element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
