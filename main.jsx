import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import MyFunctions from "./functions/MyFunctions.jsx";
import MyPromises from './functions/MyPromises.jsx';
import MyPromisesAll from './functions/MyPromisesAll.jsx';
import MyPromisesRace from './functions/MyPromisesRace.jsx';
import MyFetchAPIs from './functions/MyFetchAPIs.jsx';
import MyFetchPost from './functions/MyFetchPost.jsx';
import MyFetchPut from './functions/MyFetchPut.jsx';
import MyDataTypes from './methods/MyDataTypes.jsx';
import MyObjects from './methods/MyObjects.jsx'
import { Contador } from './components/Contador.jsx';
import { ContadorHook } from './components/ContadorHook.tsx';
import { Login } from './components/Login.tsx';
import { Usuarios } from './components/Usuarios.tsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MyFunctions/> */}
    {/* <MyPromises/> */}
    {/* <MyPromisesAll/> */}
    {/* <MyPromisesRace/> */}
    {/* <MyFetchAPIs/> */}
    {/* <MyFetchPost/> */}
    {/* <MyFetchPut/> */}
    {/* <MyDataTypes/> */}
    {/* <MyObjects/> */}
    {/* <Contador/> */}
    {/* <ContadorHook/> */}
    {/* <Login/> */}
    <Usuarios/>
    </StrictMode>,
);