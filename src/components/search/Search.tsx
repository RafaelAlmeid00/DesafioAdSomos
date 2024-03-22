import { IconType } from 'react-icons';

interface SearchProps {
    text: string;
    Icon?: IconType;
    pd?: string;
}

function Search({ text, Icon, pd }: SearchProps) {
    return (
        <div className={`search ${pd}`}>
            <div className="search__icon">
                {Icon && <Icon className='secondcolor--color' size={"2vh"} />}
            </div>
            <input type="text" placeholder={text} className="search__input" />
        </div>
    );
}

export default Search;
