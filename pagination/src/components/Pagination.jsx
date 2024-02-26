import "./pagination.css";


export function Pagination( {totalPosts, postPerPage,currentPage, setCurrentPage}) {
    const pageNumbers= [];

    console.log(totalPosts, postPerPage,currentPage, setCurrentPage);

    for(let i=1; i <= Math.ceil(totalPosts/postPerPage); i++){
        pageNumbers.push(i);
        console.log("inside", pageNumbers);
    }

   

    return(
        <>
          {/* <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => setCurrentPage(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>  */}

<div className='pagination'>
            {pageNumbers?.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
        </div>


        
        
        </>
    )
}

