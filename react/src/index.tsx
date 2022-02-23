import React from 'react'
import {render} from 'react-dom'
import "./App.css";

import {SwiperComp} from './compornents/SwiperComp'

const Main = (
    <>
     <h1>ReactReact!</h1>
     <SwiperComp/>
    </>
)

render(Main, document.getElementById('app'))