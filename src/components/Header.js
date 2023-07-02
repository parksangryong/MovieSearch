//로고, 필터버튼, 검색창
import { useState } from 'react'
import '../css/Header.css'
import img1 from '../search.jpg'

function Header (props){
    const [genrein, setGenrein] = useState('')
    const [titlein, setTitlein] = useState('')

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

    const sortLike = () => {
        //console.log('like header')
        props.sortLike();
    }

    const genreSearch = () => {
        //console.log('genre header')
        props.genreSearch(genrein);
    }
    const titleSearch = () => {
        //console.log('title header')
        props.titleSearch(titlein);
    }

    return(
        <div id='header'>
            <div className='top'>
                <div className='logo' onClick={()=> window.location.href='/MovieSearch'}>
                   <img src={img1} /> Movie Search
                </div>
                <div className='menu'>
                    <button onClick={sortTitle} className={props.sort === 'title'? 'active' : ''}>Title</button>
                    <button onClick={sortRating} className={props.sort === 'rating'? 'active' : ''}>Rating</button>
                    <button onClick={sortYear} className={props.sort === 'year'? 'active' : ''}>Year</button>
                    <button onClick={sortLike} className={props.sort === 'like_count'? 'active' : ''}>Like</button>
                </div>
            </div>
            <div className='input-comp'>
                <span>Genre : </span><input type='text' placeholder='genre plz...' onChange={(e) => setGenrein(e.target.value)} value={genrein} />
                <button onClick={genreSearch}>search</button>
            </div>
            <div className='input-comp'>
                <span>Title : </span><input type='text' placeholder='title plz...' onChange={(e) => setTitlein(e.target.value)} value={titlein} />
                <button onClick={titleSearch}>search</button>
            </div>
        </div>
    )
}

export default Header