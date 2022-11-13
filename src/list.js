import React from "react";
import {CgMenuGridO} from "react-icons/cg";
import {BiCar} from "react-icons/bi";
import {HiHome} from "react-icons/hi";
import {MdOutlineElectricalServices} from "react-icons/md";
import {GiSofa} from "react-icons/gi";
import {SlWrench} from "react-icons/sl";
import {ImBriefcase} from "react-icons/im";
import {FaOpencart} from "react-icons/fa";
import {IoPawSharp} from "react-icons/io5";
import {BsShop} from "react-icons/bs";

export const arrList = [
    {
        id: 1,
        title: 'Все',
        list: [
            {name:'Транспорт',path:'transport'},
            {name:'Недвижимость',path:'estate'},
            {name:'Электроника',path:'electronics'},
            {name:'Дом и сад',path:'homeandgarden'},
            {name:'Услуги',path:'services'},
            {name:'Работа',path:'work'},
            {name:'Оборудование для бизнеса',path:'business'},
            {name:'Животные',path:'animals'},
            {name:'Личные вещи',path:'personalitems'},
            {name:'Спорт и хобби',path:'sportsandhobbies'},
            {name:'Детский мир',path:'childrenworld'},
            {name:'Медтовары',path:'medicalproducts'},
            {name:'Отдых на Иссык-Куле',path:'Rest'},
            {name:"Находки, отдам даром",path:'Finds'}
        ],
        icon: <CgMenuGridO/>
    },
    {
        id: 2,
        title: 'Транспорт',
        list: [
            {name:'Автомобили',path:'Cars'},
            {name:'Автозапчасти',path:'autoparts'},
            {name:'Аксессуары, шины и тюнинг',path:'accessories'},
            {name:'Грузовой и с/х транспорт',path:'freighttransport'},
            {name:'Мотоциклы и мопеды',path:'motorcycles'},
            {name:'Водный транспорт',path:'watertransport'},
            {name:'Другой транспорт',path:'othertransport'}
        ],
        icon:<BiCar/>
    },
    {
        id: 3,
        title: 'Недвижимость',
        list: [
            {name:'Квартиры',path:'apartments'},
            {name:'Дома',path:'house'},
            {name:'Земельные участки',path:'land'},
            {name:'Коммерчевская недвижимость',path:'commercialestate'},
            {name:'Комнаты',path:'rooms'},
            {name:'Гаражи',path:'garages'}
        ],
        icon:<HiHome/>
    },
    {
        id: 4,
        title: 'Электроника',
        list: [
            {name:'Мобильные телефоны и аксессуары',path:'mobileaccessories'},
            {name:'Компьютеры, ноутбуки и планшеты',path:'computers'},
            {name:'Бытовая техника',path:'appliances'},
            {name:'Техника для кухни',path:'kitchenappliances'},
            {name:'Видеоигры и приставки',path:'videogames'},
            {name:'ТВ и видео',path:'tvvideo'},
            {name:'Аудиотехника',path:'audio'},
            {name:'Автоэлектироника',path:'autoelectronics'},
            {name:'Фото и видеокамеры',path:'videocameras'}
        ],
        icon: <MdOutlineElectricalServices/>
    },
    {
        id: 5,
        title: 'Дом и сад',
        list: [
            {name:'Мебель',path:'furniture'},
            {name:'Ремонт и строительство',path:'repair'},
            {name:'Все для дома и сада',path:'houseandgarden'},
            {name:'Продукты питания',path:'food'},
            {name:'Декор для дома',path:'homedeco'},
            {name:'Кухонные принадлежности',path:'kitchenutensils'},
            {name:'Инструменты',path:'tools'},
            {name:'Комнатные растения',path:'houseplants'},
            {name:'Бытовая химия, хозтовары',path:'householdgoods'},
            {name:'Канцтовары',path:'stationery'},
            {name:'Сушилки',path:'dryers'},
            {name:'Сейфы',path:'safes'},
            {name:'Гладильные доски',path:'ironingboard'},
            {name:'Другие товары для дома',path:'othergoods'}
        ],
        icon:<GiSofa/>
    },
    {
        id: 6,
        title: 'Услуги',
        list: [
            {name:'Строительство и ремонт',path:'construction'},
            {name:'Автоуслуги',path:'autoservices'},
            {name:'Красота и здоровье',path:'beautyandhealth'},
            {name:'Ремонт техники',path:'equipmentrepair'},
            {name:'Мебельные услуги',path:'furnitureservices'},
            {name:'Обучение, курсы',path:'education'},
            {name:'Реклама, печать',path:'advertising'},
            {name:'Организация мероприятий',path:'organizationofevents'},
            {name:'Клининговые услуги',path:'Cleaningservice'},
            {name:'Пошив и ремонт одежды',path:'clothingrepair'},
            {name:'Детские сады, няни',path:'kindergartens'},
            {name:'Туристические услуги',path:'touristservices'},
            {name:'Другие услуги',path:'otherservices'}
        ],
        icon:<SlWrench/>
    },
    {
        id: 7,
        title: 'Работа',
        list: [
            {name:'Поиск сотрудников(Вакансии)',path:'jobs'},
            {name:'Ищу работу(Резюме)',path:'resume'}
        ],
        icon:<ImBriefcase/>
    },
    {
        id: 8,
        title: 'Оборудование для бизнеса',
        list: [
            {name:'Торговое оборудование',path:'shopequipment'},
            {name:'Для кафе, ресторанов',path:'forcafe'},
            {name:'Холодильное оборудование',path:'refrigerators'},
            {name:'Оборудование для производства',path:'forproduction'},
            {name:'Оборудование для типографии',path:'forprinting'},
            {name:'Оборудование для салонов красоты',path:'forbeautysalons'},
            {name:'Оборудование для швейных цехов',path:'forworkshops'},
            {name:'Автосервисное оборудование',path:'autoserviceequipment'},
            {name:'Строительное оборудование',path:'constructionequipment'},
            {name:'Рекламное оборудование',path:'advertisingequipment'},
            {name:'Упаковочно-фасовочные аппараты',path:'packagingmachines'},
            {name:'Аппараты для стирки ковров',path:'forwashingcarpets'},
            {name:'Готовый бизнес',path:'readybusiness'},
            {name:'Контейнеры',path:'containers'},
            {name:'Другое оборудование для бизнеса',path:'otherbusinessequipment'}
        ],
        icon:<FaOpencart/>
    },
    {
        id: 9,
        title: 'Животные',
        list: [
            {name:'С/х животные',path:'agriculturalanimals'},
            {name:'Собаки',path:'dogs'},
            {name:'Коты',path:'cats'},
            {name:'Зоотовары',path:'petsupplies'},
            {name:'Птицы',path:'birds'},
            {name:'Аквариумы',path:'aquariums'},
            {name:'Грызуны',path:'rodents'},
            {name:'Услуги ветеринара',path:'veterinarianservices'},
            {name:'Другие животные',path:'otheranimals'}
        ],
        icon:<IoPawSharp/>
    },
    {
        id: 10,
        title: 'Бизнес-профили',
        list: [],
        icon:<BsShop/>
    }
]