import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const MenuCategory = ({title, list,icon}) => {

    const [active, setActive] = useState(false);

    return (
        <li onMouseLeave={()=> setActive(false)} onMouseEnter={()=> setActive(true)} className='header__list-item'>
            <Link className='header__list-link' to='#'>
                <div className='header__list-icon icon1'>
                    {
                        icon
                    }
                </div>
                <p className='header__list-text'>{title}</p>
            </Link>
            {
                active && <ul className='header__activeList'>
                    {
                        list.map(el =>(
                            <li className='header__activeList-item'><Link to={`/${el.path}`}>{el.name}</Link></li>
                        ))
                    }
                </ul>
            }
        </li>
    );
};

export default MenuCategory;