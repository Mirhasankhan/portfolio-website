import './App.css'
import profile from '../src/assets/profile.jpg'

function App() {

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-[#001E3C] text-white ml-1">
          <div id='home' className='flex justify-start items-center mx-6'>
            <div className='w-1/2'>
              <h1>Welcome To My World</h1>
              <h1>Hi,I'm Mir Hasan</h1>
              <h3>I am a MERN Stack Developer</h3>
              <p>Hey,I'm Rakib. I am an Junior Frontend Developer.I am a website developer from Bangladesh. I create professional websites. As a web developer, I have a passion for creating dynamic and engaging online experiences.</p>
            </div>
            <img className='h-64 w-64 rounded-full ml-6' src={profile} alt="" />
          </div>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 h-full bg-[#001E3C] text-white">
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
