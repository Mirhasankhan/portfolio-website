import about from '../assets/profile.jpg'
const About = () => {
    return (
        <div className='flex mt-24 mx-6'>
            <div className='w-1/3'>
                <h2 className='text-2xl font-semibold mb-4'>About Me</h2>
                <img className='h-64 w-64 rounded-full mb-4' src={about} alt="" />
            </div>
            <div className='w-2/3 font-medium'>
               <h5>Hi 👋 My name is Mir Hasan. I'm a Junior Frontend Developer from Bangladesh. I have done developing many web projects with extensive experience and I enjoy making websites.Adept in User interface, Branding & creating attractive, Fully Responsive and Bringing forth expertise in design. I always strive to achieve the best results and enhance my skills.</h5>
               <p className='mt-2'>Phone: +880 1839033505</p>
               <p>Email: mirhasan000034@gmail.com</p>
               <p>Address: Feni, Bangladesh</p>
               <button className='btn btn-primary mt-3'>Hire Me</button>
            </div>
        </div>
    );
};

export default About;