//로고, 필터버튼, 검색창
import { useState } from 'react'
import '../css/Header.css'

function Header (props){
    const [genrein, setGenrein] = useState('')

    const sortTitle = () => {
        //console.log('title header')
        props.sortTitle();
    }

    const sortRating = () => {
        //console.log('rating header')
        props.sortRating();
    }

    const sortYear = () => {
        //console.log('year header')
        props.sortYear();
    }

    const genreSearch = () => {
        //console.log('genre header')
        props.genreSearch(genrein);
    }

    return(
        <div id='header'>
            <div className='top'>
                <div className='logo' onClick={()=> window.location.href='/'}>
                   &nbsp; Movie Search
                </div>
                <div className='menu'>
                    <button onClick={sortTitle} className={props.sort === 'title'? 'active' : ''}>title</button>
                    <button onClick={sortRating} className={props.sort === 'rating'? 'active' : ''}>rating</button>
                    <button onClick={sortYear} className={props.sort === 'year'? 'active' : ''}>year</button>
                </div>
            </div>
            <div className='input-comp'>
                <span>Genre : </span><input type='text' placeholder='genre plz' onChange={(e) => setGenrein(e.target.value)} value={genrein} />
                <button onClick={genreSearch}>search</button>
            </div>
        </div>
    )
}

export default Header