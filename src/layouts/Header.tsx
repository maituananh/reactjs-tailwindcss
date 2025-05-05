import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ButtonSearch from '../components/buttons/ButtonSearch';

function Header() {
    return (
        <div className="w-full h-16 bg-white flex">
            <div className="">
            </div>

            <div className='w-24 h-full flex items-center'>
                <FontAwesomeIcon icon={ faBars } className='w-9 h-9' />
                <FontAwesomeIcon icon={ faCaretDown } className='w-4 h-4' />
            </div>

            <div className='w-146.5 flex items-center'>
                <input  />
                <ButtonSearch />
            </div>
        </div>
    );
}

export default Header;