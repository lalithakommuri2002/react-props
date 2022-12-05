/*import ClassComponent from './ClassComponent'
import ClassComponent2 from './ClassComponent2'
function App(){
  return(
    <div>
       <h1>navya the beauty</h1>
       <p>good morning everyone</p>
       <img src="https://i.pinimg.com/originals/4a/43/90/4a4390c7ce0e3504686d717254a292a6.jpg" alt=""/>
       <ClassComponent/>
       <ClassComponent2/>

    </div>

    )
}
export default App*/

//import PropsExample from './PropsExample'
//import FuncPropExample from './FuncPropExample'
//import StateExample from "./StateExample"
//import Events from './Events'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
function App(){
  return(
      <div>
        <BrowserRouter>
        <Navbar/>
           <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/contact" element={<Contact/>}/>
               <Route path="*" element={<NotFound/>}/>
           </Routes>
        </BrowserRouter>
          {/*<h1> This is about props example</h1>
          <PropsExample name="lalitha" age="20"/>
          <PropsExample name="manasa" age="20"/>
          <PropsExample name="navya" age="20"/>*/}
          {/*<FuncPropExample framework="react" number="2" name="lalli" age="20"/>
          
          <StateExample/>
          <Events/>*/}
      </div>
    )
}
export default App