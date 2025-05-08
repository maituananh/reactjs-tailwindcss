import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCaretDown, faCartShopping, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ButtonSearch from '../components/buttons/ButtonSearch';

function Header() {
    return (
        <div className='w-1230 h-16 bg-white flex items-center content-center'>
            <a href='/' className="bg-contain bg-no-repeat bg-center w-56 h-16 bg-header-logo"></a>

            <div className='w-24 h-full flex items-center ml-12'>
                <FontAwesomeIcon icon={ faBars } className='w-7 h-7 text-gray-400' />
                <FontAwesomeIcon icon={ faCaretDown } className='w-4 h-4 text-gray-400' />
            </div>

            <div className='h-9 w-584 flex items-center border-slate-300 border-2 rounded-lg'>
                <input className='outline-none ml-8 mr-1 w-full' />
                <ButtonSearch />
            </div>
            
            <div className='w-16 text-center ml-9'>
                <FontAwesomeIcon icon={ faBell } className='w-6 h-6' />
                <p className='text-xs'>Thông Báo</p>
            </div>

            <div className='w-16 text-center'>
                <FontAwesomeIcon icon={ faCartShopping } className='w-6 h-6' />
                <p className='text-xs'>Giỏ Hàng</p>
            </div>

            <div className='w-16 text-center'>
                <FontAwesomeIcon icon={ faUser } className='w-6 h-6' />
                <p className='text-xs'>Tài Khoản</p>
            </div>
        </div>
    );
}

export default Header;