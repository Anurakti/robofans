import React from 'react'

function SearchBox({searchChange}) {
    return (
        <div>
            <input type="search" placeholder="Search Robot" onChange={searchChange}
            className="pa3 ba b-green bg-light-blue" />
        </div>
    )
}

export default SearchBox
