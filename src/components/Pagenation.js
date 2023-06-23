//페이지네이션
import '../css/Pagenation.css'
import Footer from './Footer';

function Pagenation (props){

    let pageNumber = [];
    for(var i=1; i<=10; i++){
        pageNumber.push(i);
    }

    const result = pageNumber.map(
        (page) => (<span id='page' key={page}
        className={props.currentPage===page? 'active' : ''} 
        onClick={() => pageClick(page)}>{page}</span>)
    )

    const pageClick = (page) => {
        console.log('pageclick page');
        //console.log(page)
        props.pageClick(page)
    }

    const prev = () => {
        if(props.currentPage === 1){
            alert('1 page');
            return;
        }
        props.pageClick(props.currentPage -1);
    }
    const next = () => {
        if(props.currentPage === 10){
            alert('10 page');
            return;
        }
        props.pageClick(props.currentPage +1);
    }
    return(
        <div id='pagelist'>
            <div id='pagebox'>
                    <button onClick={prev}>&lt;</button>
                    {result}
                    <button onClick={next}>&gt;</button>
                </div>
        <Footer />
        </div>
    )
}

export default Pagenation