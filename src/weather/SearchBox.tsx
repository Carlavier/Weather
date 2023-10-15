import { useContext, useState } from "react";

import { CountryContext } from "./Home";
import style from "./SearchBox.module.css";

function SearchBox() {
    const [search, setSearch] = useState("");
    const { setCountry } = useContext(CountryContext);

    return (
        <div className={style['search-box']}>
            <input 
                className={style['search-field']}
                type="text" 
                onChange={(e) => {setSearch(e.target.value)}}
                value={search}
                placeholder="Enter city name..."
                onKeyDown={(e) => {e.key == "Enter" && handleSubmit()}}
            />
            <button
                className={style['search-button']}
                onClick={handleSubmit}
            ><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    );

    function handleSubmit() {
        setCountry(search);
        setSearch("");
    }
}

export default SearchBox;