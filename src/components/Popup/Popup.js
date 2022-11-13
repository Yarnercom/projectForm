import React, {useState} from 'react';
import axios from "../../axios";

const Popup = ({popup, setPopup, setUser, user}) => {

    const [status, setStatus] = useState('signIn');

    const popupCloseFunc = (e) => {
        if (e.target.classList.contains('overlay')) {
            setPopup(false)
        }
    };

    const signInHandler = (e) => {
        axios.post('/login', {
            email: e.target[0].value,
            password: e.target[1].value
        }).then(({data})=>{
            e.target[0].value = ''
            e.target[1].value = ''
            setPopup(false)
            localStorage.setItem('user', JSON.stringify(data.user))
        })
    };

    const signUpHandler = (e) => {
        axios.post('/users', {
            email: e.target[0].value,
            name: e.target[1].value,
            password: e.target[2].value,
            balance: 1000,
            avatar: '',
            products: [],
        }).then((res) => {
            setUser(res.data.user)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            setPopup(false)
            e.target[0].value = ''
            e.target[1].value = ''
            e.target[2].value = ''
        }).catch(err => alert(err))
    };

    return (
        <div onClick={(e) => popupCloseFunc(e)} className={`overlay ${popup && 'overlay-active'}`}>
            <div className='popup'>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    if (status === 'signIn') {
                        signInHandler(e)
                    } else {
                        signUpHandler(e)
                    }
                }} className='popup__form'>
                    <div className='popup__form-top'>
                        <h2 onClick={() => setStatus('signIn')}
                            className={`popup__title ${status === 'signIn' && 'popup__title-active'}`}>Войти</h2>
                        <h2 onClick={() => setStatus('signUp')}
                            className={`popup__title ${status === 'signUp' && 'popup__title-active'}`}>Регистрация</h2>
                    </div>
                    <input className='popup__input' placeholder='Введите Email' type="email"/>
                    {
                        status === 'signUp' && <input className='popup__input' placeholder='Введите имя' type="text"/>
                    }
                    <input className='popup__input' placeholder='Введите пароль' type="password"/>
                    <button className='popup__btn' type='submit'>
                        {
                            status === 'signIn' ? 'Войти' : 'Регистрация'
                        }
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Popup;