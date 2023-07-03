import './App.css'
import About from './Components/About'
import Home from './Components/Home'
import Services from './Components/Services'
import Skills from './Components/Skills'


function App() {

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-[#001E3C] text-white ml-1">
          <div id='home'>
            <Home></Home>            
          </div>
          <div id='about'>
            <About></About>            
          </div>
          <div id='service'>
            <Services></Services>           
          </div>
          <div id='skill'>
             <Skills></Skills>          
          </div>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 h-full bg-[#001E3C] text-white text-xl font-medium">
            {/* Sidebar content here */}
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#service'>Service</a></li>
            <li><a href='#skill'>Skill</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>

        </div>
      </div>
    </>
  )
}

export default App
