import { Link } from 'react-scroll'
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Services from './Components/Services'
import Skills from './Components/Skills'
import { FaHome, FaUser, FaBuffer, FaDiscourse, FaBriefcase, FaCommentAlt } from 'react-icons/fa';
import Footer from './Components/Footer'
import Portfolio from './Components/Portfolio'


function App() {

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-[#001E3C] text-white ml-[2px]">
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
          <div id='portfolio'>
            <Portfolio/>
          </div>
          <div id='contact'>
            <Contact></Contact>
          </div>
          <Footer></Footer>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 h-full bg-[#001E3C] text-white font-medium">
            {/* Sidebar content here */}
            <li className='hover:text-red-400'><Link to="home" smooth={true} duration={500}><FaHome />Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}><FaUser />About</Link></li>
            <li><Link to="service" smooth={true} duration={500}><FaBriefcase />Service</Link></li>
            <li><Link to="portfolio" smooth={true} duration={500}><FaBuffer />Portfolio</Link></li>
            <li><Link to="skill" smooth={true} duration={500}><FaCommentAlt />Skills</Link></li>
            <li><Link to="contact" smooth={true} duration={500}><FaDiscourse />Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
