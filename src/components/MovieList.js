//영화 목록, 검색 결과
import '../css/MovieList.css'
import Movie from './Movie'
import Pagenation from './Pagenation';

function MovieList (props){

    if(props.movielist){
        var result = props.movielist.map(
            (data) => (<Movie key={data.id} id={data.id} title={data.title} year={data.year}
                rating={data.rating} genres={data.genres} summary={data.summary}
                language={data.language} medium_cover_image={data.medium_cover_image} />)
        )
    }
    else{
        alert('정보가 없습니다');
        window.location.reload();
    }

    return(
        <div id='movielist'>
            {result}
            <Pagenation currentPage={props.currentPage} pageClick={props.pageClick} title={props.title} genre={props.genre} />
        </div>
    )
}

export default MovieList