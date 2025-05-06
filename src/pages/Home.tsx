import React from 'react';
import Banner from '../layouts/Banner';
import Menu from '../layouts/Menu';

function Home() {
    const banners = [
        {
            img: 'banner-freeship',
            url: ''
        },
        {
            img: 'banner-freeship',
            url: ''
        },
        {
            img: 'banner-freeship',
            url: ''
        },
        {
            img: 'banner-freeship',
            url: ''
        }
    ]

    const menu = [
        {
            img: '',
            url: '',
            name: ''
        },
        {
            img: '',
            url: '',
            name: ''
        },
        {
            img: '',
            url: '',
            name: ''
        },
        {
            img: '',
            url: '',
            name: ''
        },
        {
            img: '',
            url: '',
            name: ''
        },
        {
            img: '',
            url: '',
            name: ''
        },
        {
            img: '',
            url: '',
            name: ''
        },
        {
            img: '',
            url: '',
            name: ''
        },
        {
            img: '',
            url: '',
            name: ''
        },
        {
            img: '',
            url: '',
            name: ''
        },
    ]

    return (
        <div className='flex flex-col items-center'>
            <div className='flex justify-center'>
                {banners.map(b => <Banner></Banner>)}
            </div>

            <div className='m-7 w-1230 flex justify-center items-center bg-white rounded-md'>
                {menu.map(m => <Menu></Menu>)}
            </div>

            <div className='grid grid-cols-5 w-1230 h-auto pl-5 bg-suggestion bg-no-repeat rounded-md'>
                <div className='w-56 h-6 bg-black'>

                </div>

            </div>
        </div>
    );
}

export default Home;