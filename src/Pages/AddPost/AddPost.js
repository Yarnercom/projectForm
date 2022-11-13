import React,{useState} from 'react';
import {category} from "../../category";
import Select from "./Select";

const AddPost = () => {

    const [categoryActive, setCategoryActive] = useState(false)
    const [select, setSelect] = useState('')
    const [chose, setChose] = useState('')
    const [chose2, setChose2] = useState('')

    return (
        <div className='addPost'>
            <div className="container">
                <h2>Разместить БЕСПЛАТНОЕ объявление просто!</h2>
                <p>Загрузите фото*</p>
                <input type="text"/>
                <p>Описание*</p>
                <textarea name="" id="" cols="30" rows="10"/>
                <div>
                    <p>Категория*</p>
                    <button type='button' onClick={()=> {
                        setCategoryActive(true)
                        setSelect('')
                        setChose('')
                    }} >Выбрать</button>
                    <ul style={{display: categoryActive ? 'block' : 'none'}}>
                        {
                            category.filter(item => item.category.includes(select)).map((item)=>(
                                <li>
                                    <span onClick={()=> setSelect(item.category)}>
                                        {item.category}
                                    </span>
                                    <ul style={{display: select ? 'block' : 'none'}}>
                                        <li>
                                            {
                                                item.list.filter(el => el.category.includes(chose)).map((el)=>(
                                                    <li onClick={()=> setChose(el.category)}>
                                                        {
                                                            el.category
                                                        }
                                                        {
                                                            el.list && <ul style={{display: chose.length ? 'block' : 'none'}}>
                                                                {
                                                                    el.list.filter((list => list.name.includes(chose2))).map(list => (
                                                                        <li onClick={()=> setChose2(list.name)}>{list.name}</li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        }
                                                    </li>
                                                ))
                                            }
                                        </li>
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <Select list={['Бишкек','Ош','Кант']} title='Город'/>
                <div>
                    <h2>Цена</h2>
                    <div>
                        <input type="number"/>
                        <div>
                            <label htmlFor="">
                                <input type="radio"/>
                                <span>KGS</span>
                            </label>>
                            <label htmlFor="">
                                <input type="radio"/>
                                <span>USD</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='dynamicBlockCar'>
                    <Select list={chose2.length ? category.filter(item => item.category.includes(select))[0].list.filter(el => el.category.includes(chose))[0].list.filter(item => item.name.includes(chose2))[0].models : []} title='Модель'/>
                    <Select list={[1999, 2000, 2015]} title='Год'/>
                    <Select list={[1.8, 2.5, 4.4, 5.5]} title='объем двигателя'/>
                </div>
                <div className='dynamicBlockAnimals'>

                </div>
            </div>
        </div>
    );
};

export default AddPost;