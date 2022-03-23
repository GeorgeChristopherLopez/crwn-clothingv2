import logo from './logo.svg';
import React from 'react';
import Home from './routes/home/home.component';
import { Route, Routes  } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './components/sign-in/sign-in.component';



const Shop = () => {
  return (
    <div>
    <h1>I am the shop page</h1>
    </div>
  )
}

const App = () => {

  return (
    <Routes >
      <Route path="/" element={<Navigation/>}>
      
       <Route index element={<Home/>}/>
       <Route path='/shop' element={<Shop/>}/>
       <Route path='/sign-in' element={<SignIn/>}/>
      </Route>
     
     
    </Routes>

  
  )
}

export default App;
