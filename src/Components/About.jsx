import { Link } from 'react-scroll';
import about from '../assets/profile.jpg'
const About = () => {
    return (
        <div className='flex mt-24 mx-16'>
            <div className='w-1/3' data-aos="fade-right" data-aos-duration="1500">
                <h2 className='text-2xl font-semibold mb-4'>About Me</h2>
                <img className='h-64 w-64 rounded-full mb-4' src={about} alt="" />
            </div>
            <div className='w-2/3 font-medium' data-aos="fade-left" data-aos-duration="1500">
                <h5>Hi 👋 My name is Mir Hasan. I'm a junior frontend developer from Bangladesh. I have done many web projects with extensive experience and I enjoy making websites.Adapt in User interface, Branding & creating attractive, Fully responsive and bringing forth expertise in design. I always strive to achieve the best results and enhance my skills.
                </h5>
                <p className='mt-2'>Phone: +880 1839033505</p>
                <p>Email: mirhasan000034@gmail.com</p>
                <p>Address: Feni, Bangladesh</p>
                <Link to="contact" smooth={true} duration={500}><button className='main-button mt-3'>Hire Me</button></Link>
            </div>
        </div>
    );
};

export default About;