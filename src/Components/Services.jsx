import web from '../assets/paint-palette.png'
import web2 from '../assets/web.png'
import full from '../assets/fullstack-php-js.jpg'

const Services = () => {
    return (
        <div className='mt-24 mx-16'>
            <h2 className='text-3xl my-3'>Services</h2>
            <div className='flex gap-3'>
                <div className='bg-green-400 p-5 rounded-lg'>
                    <img className='w-32 h-32 rounded-full mx-auto' src={web} alt="" />
                    <h2 className='text-2xl text-center my-2 font-medium'>Web Design</h2>
                    <p>Web design is the process of creating and arranging visual elements, layouts, and interactive features to produce an engaging and user-friendly website. It involves combining aesthetics, usability, and functionality to deliver a cohesive and visually appealing online experience to users</p>
                </div>              
                <div className='bg-blue-400 p-5 rounded-lg'>
                    <img className='w-32 h-32 rounded-full mx-auto' src={web2} alt="" />
                    <h2 className='text-2xl text-center my-2 font-medium'>Web Development</h2>
                    <p>Web design is the process of creating and arranging visual elements, layouts, and interactive features to produce an engaging and user-friendly website. It involves combining aesthetics, usability, and functionality to deliver a cohesive and visually appealing online experience to users</p>
                </div>              
                <div className='bg-red-400 p-5 rounded-lg'>
                    <img className='w-32 h-32 rounded-full mx-auto' src={full} alt="" />
                    <h2 className='text-2xl text-center my-2 font-medium'>Front End Development</h2>
                    <p>Web design is the process of creating and arranging visual elements, layouts, and interactive features to produce an engaging and user-friendly website. It involves combining aesthetics, usability, and functionality to deliver a cohesive and visually appealing online experience to users</p>
                </div>              
            </div>
        </div>
    );
};

export default Services;