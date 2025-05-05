import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function ButtonSearch() {
    return (
        <div className='w-16 h-7 bg-red-201 flex justify-center items-center rounded'>
            <FontAwesomeIcon icon={ faSearch } 
                className='w-5 h-5 text-white'/>
        </div>
    );
}

export default ButtonSearch;