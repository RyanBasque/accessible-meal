import React, { useState } from 'react'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const restaurantes = [
    ];


    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        countries.filter((country) => {
            return country.name.match(searchInput);
        });
    }

    return <div style={{width: '50%'}}>

        <input
            type="search"
            placeholder="Busque por um restaurante"
            onChange={handleChange}
            value={searchInput} 
            style={{width: '100%', borderStyle: 'none', borderBottom: '1px solid #000', backgroundColor: '#F2F2F2', height: '50px'}}
            />

<table>

{restaurantes.map((restaurante, index) => {

<div>
  <tr>
    <td>{restaurante.name}</td>
    <td>{restaurante.id}</td>
  </tr>
</div>

})}
</table>

</div>


};

export default SearchBar;