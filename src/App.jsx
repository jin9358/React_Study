import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Router1 from './RouterStudy/Router1/Router1'
import Effect1 from './study/components/Effect/Effcet1/Effect1'
import Effect2 from './study/components/Effect/Effect2/Effect2'
import Emotion from './study/components/Emotion/Emotion'
import Emotion2 from './study/components/Emotion/Emotion2'
import HelloJsx from './study/components/HelloJsx/HelloJsx'
import HelloProps from './study/components/HelloProps/HelloProps'
import HelloReact from './study/components/HelloReact/HelloReact'
import DomRef from './study/components/Ref/DomRef/DomRef'
import Calculator from './study/components/State/Calculator/Calculator'
import CountState from './study/components/State/CountState/CountState'
import InputState1 from './study/components/State/InputState1/InputState1'
import InputState2 from './study/components/State/InputState2/InputState2'
import InputState3 from './study/components/State/InputState3/InputState3'
import InputState4 from './study/components/State/InputState4/InputState4'
import Index from './TodoList/pages/Index'
import Router2 from './RouterStudy/Router2/Router2'
import Router3 from './RouterStudy/Router3/Router3'
import Router4 from './RouterStudy/Router4/Router4'

function App() {

  return <BrowserRouter>
    {/* <HelloReact/> */}
    {/* <HelloJsx /> */}
    {/* <HelloProps/> */}
    {/* <CountState/> */}
    {/* <Calculat`or /> */}
    {/* <InputState1 /> */}
    {/* <InputState2 /> */}
    {/* <InputState3/> */}
    {/* <InputState4/> */}  
    {/* <DomRef/> */}
    {/* <Effect1/> */}
    {/* <Effect2/> */}
    {/* <Emotion/> */}
    {/* <Emotion2/> */}
    {/* <Index /> */}
    {/* <Router1 /> */}
    {/* <Router2 /> */}
    <Router3 />
    {/* <Router4/> */}
  </BrowserRouter>
}

export default App
