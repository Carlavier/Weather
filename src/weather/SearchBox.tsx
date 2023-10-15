import { useContext, useState } from "react";

import { CountryContext } from "./Home";

function SearchBox() {
    const [search, setSearch] = useState("");
    const { setCountry } = useContext(CountryContext);

    return (
        <div className="search-box">
            <input 
                type="text" 
                onChange={(e) => {setSearch(e.target.value)}}
                value={search}
            />
            <button
                onClick={() => {
                    setCountry(search);
                    setSearch("");
                }}
            >Get weather</button>
        </div>
    );
}

export default SearchBox;