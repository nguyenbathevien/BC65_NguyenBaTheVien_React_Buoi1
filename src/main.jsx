import React from 'react'
import ReactDOM from 'react-dom/client'
import DemoState from './components/DemoState'
import { Headers } from './components/Headers'
import Content from './components/Content'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import Databinding from './dataBinding/Databinding'
import HandleEvent from './components/handleEvent/HandleEvent'
import State from './components/State'
import Style from './components/style/Style'
import RenderWithMap from './RenderWithMap/RenderWithMap'
import DemoProp from './Props/DemoProp'
import ExWithMap_Props from './Props/ExWithMap_Props'
import BaiTapXemChiTiet from './Props/BaiTapXemChiTiet'
import ExerciseCarStore from './Props/ExerciseCarStore/ExerciseCarStore'
import ExCart from './Props/ExCart/ExCart'
import Shop from './Props/BaiTapShoeShop/Shop'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Shop/>
  </div>
  
)
