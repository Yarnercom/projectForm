import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import MyAccount from "./Pages/MyAccount/MyAccount";
import BusinessAccount from "./Pages/BusinessAccount/BusinessAccount";
import AnotherAccount from "./Pages/AnotherAccount/AnotherAccount";
import AddPost from "./Pages/AddPost/AddPost";
import Product from "./Pages/Product/Product";
import './scss/Style.scss'
import Header from "./Layout/Header/Header";

function App() {

  const [user, setUser] = useState({});
  useEffect(()=>{
    if (JSON.parse(localStorage.getItem('user')) !== null){
        setUser(JSON.parse(localStorage.getItem('user')))
    }
  }, [])



  return (
    <div className="App">
      <Header user={user} setUser={setUser}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/myaccount' element={<MyAccount/>}/>
          <Route path='/businessaccount' element={<BusinessAccount/>}/>
          <Route path='/anotheraccount' element={<AnotherAccount/>}/>
          <Route path='/addpost' element={<AddPost/>}/>
          <Route path='/product/:id' element={<Product/>}/>
        </Routes>
    </div>
  );
}

export default App;
