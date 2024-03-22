import { FaSearch } from 'react-icons/fa'

function Search() {
    return (
        <div className="search">
            <div className="search__icon">
                <FaSearch className='secondcolor--color' size={"2vh"} />
            </div>
            <input type="text" placeholder="Search..." className="search__input" />
        </div>
    );
}

export default Search;
