//영화 목록, 검색 결과
import '../css/MovieList.css'
import Movie from './Movie'

function MovieList (props){
    const result = props.movielist.map(
        (data) => (<Movie key={data.id} id={data.id} title={data.title} year={data.year}
            rating={data.rating} genres={data.genres} summary={data.summary}
            language={data.language} medium_cover_image={data.medium_cover_image} />)
    )

    return(
        <div id='movielist'>
            {result}
        </div>
    )
}

export default MovieList