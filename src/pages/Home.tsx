import React from 'react';
import Banner from '../layouts/Banner';
import Menu, { MenuType } from '../layouts/Menu';
import Item from '../components/items/Item';

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

    const menu: MenuType[] = [
        {
            img: '',
            url: '',
            name: 'Day 05.05'
        },
        {
            img: '',
            url: '',
            name: 'Flash Sale'
        },
        {
            img: '',
            url: '',
            name: 'Patech'
        },
        {
            img: '',
            url: '',
            name: 'Sbooks'
        },
        {
            img: '',
            url: '',
            name: 'Ma Giam Gia'
        },
        {
            img: '',
            url: '',
            name: 'San Pham Moi'
        },
        {
            img: '',
            url: '',
            name: 'San Pham Duoc Tro Gia'
        },
        {
            img: '',
            url: '',
            name: 'Phien Cho Cu'
        },
        {
            img: '',
            url: '',
            name: 'Ban Si'
        },
        {
            img: '',
            url: '',
            name: 'Manga'
        },
    ]

    return (
        <div className='flex flex-col items-center'>
            <div className='flex justify-center'>
                {banners.map(b => <Banner></Banner>)}
            </div>

            <div className='m-7 w-1230 flex justify-center items-center bg-white rounded-md'>
                {menu.map(m => (<Menu {...m} />))}
            </div>

            <div className='w-1230 h-auto bg-suggestion bg-no-repeat bg-cover bg-center rounded-md'>
                <div className='h-20 w-full'></div>
                <div className='grid grid-cols-5 ml-5'>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
            </div>
        </div>
    );
}

export default Home;