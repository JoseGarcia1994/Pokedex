
const Pagination = ({num, setCurrentPage}) => {
    return (
        <div>
            <button onClick={ () => setCurrentPage(num) } className="page-btn">{num}</button>
        </div>
    );
};

export default Pagination;