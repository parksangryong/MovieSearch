//페이지네이션
import '../css/Pagenation.css'

function Pagenation (props){

    let pageNumber = [];
    if(props.title){
        pageNumber.push('');
    }
    else if(props.currentPage <= 5){
        for(var i=1; i<=10; i++){
            pageNumber.push(i);
        }
    }else if(props.currentPage <= 194){
        for(var i=props.currentPage-4; i<=props.currentPage+5; i++){
            pageNumber.push(i);
        }
    }else{ 
        for(var i=191; i<=200; i++){
            pageNumber.push(i);
        }
    }

    

    const result = pageNumber.map(
        (page) => (<span id='page' key={page}
        className={props.currentPage===page? 'active' : ''} 
        onClick={() => pageClick(page)}>{page}</span>)
    )

    const pageClick = (page) => {
        //console.log('pageclick page');
        //console.log(page)
        props.pageClick(page)
    }

    const prev = () => {
        if(props.currentPage === 1 || props.title){
            alert('first page');
            return;
        }
        props.pageClick(props.currentPage -1);
    }
    const next = () => {
        if(props.currentPage === 200 || props.title){
            alert('last page');
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
        </div>
    )
}

export default Pagenation