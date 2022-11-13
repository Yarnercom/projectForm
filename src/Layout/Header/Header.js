import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Popup from "../../components/Popup/Popup";
import {BsSearch} from 'react-icons/bs'
import {FiMenu} from 'react-icons/fi'
import {FaWallet} from 'react-icons/fa'
import {GiHearts} from 'react-icons/gi'
import {HiMail} from 'react-icons/hi'
import MenuCategory from "../../components/MenuCategory/MenuCategory";
import {arrList} from "../../list";


const Header = ({user, setUser}) => {

    const [popup, setPopup] = useState(false);

    const logoutUser = () => {
        localStorage.removeItem('user')
        setUser({})
    }



    return (
        <header className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <div className='header__left'>
                        <h1 className='header__title'>
                            <Link className='header__logo' to='/'>LALAFO</Link>
                        </h1>
                        <FiMenu className='header__iconMenu'/>
                        <Link className='header__link' to='#'>Для бизнеса</Link>
                    </div>
                    <div className='header__center'>
                        <div className='header__center-block'>
                            <FaWallet className='header__iconWallet'/>
                            <p>Кошелек: <span className='header__'>{user.balance} KGS</span></p>
                        </div>
                        <GiHearts className='header__iconHeart'/>
                        <HiMail className='header__iconMail'/>
                    </div>
                    <div className='header__right'>
                        {
                            user.email
                                ? <div>
                                    <p>{user.name}</p>
                                    <button onClick={() => logoutUser()} type='button'>Выйти</button>
                                </div>
                                : <p onClick={() => setPopup(true)} className='header__login'>Войти - Регистрация</p>
                        }
                        <button type='button' className='header__btn'>Подать объявление</button>
                    </div>
                </nav>
            </div>
            {
                popup && <Popup user={user} setUser={setUser} setPopup={setPopup} popup={popup}/>
            }
            <div className='header__bottom'>
                <div className='container'>
                    <div className='header__search'>
                        <input className='header__search-input' placeholder='Я ищу...' type="text"/>
                        <button className='header__search-icon'>
                            <BsSearch/>
                        </button>
                    </div>
                    <ul className='header__list'>
                        {
                            arrList.map(item => (
                                <MenuCategory {...item}/>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </header>
    );
};


export default Header;