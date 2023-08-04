import boot from '../assets/boot.jpg'
import css from '../assets/css.png'
import exp from '../assets/exp.png'
import html from '../assets/html.png'
import js from '../assets/js.png'
import tail from '../assets/tail.png'
import mongo from '../assets/mongo.png'
import npm from '../assets/npm.png'
import reactLogo from '../assets/react-logo.png'
// import js from '../assets/js.png'


const Skills = () => {
    return (
        <div className='mx-16 mt-24'>
            <h1 className='text-2xl font-bold text-white mb-12'>Skills</h1>
            <div className='grid grid-cols-4 gap-8 mx-24' data-aos="fade-right" data-aos-duration="1500">
                <div>
                    <img className='w-24 h-24 rounded-full mb-6' src={reactLogo} alt="" />
                    <img className='w-24 h-24 rounded-full mb-6' src={mongo} alt="" />
                    <img className='w-24 h-24 rounded-full mb-6' src={js} alt="" />
                </div>
                <div>
                    <img className='w-24 h-24 rounded-full mb-6' src={npm} alt="" />
                    <img className='w-24 h-24 rounded-full mb-6' src={html} alt="" />
                    <img className='w-24 h-24 rounded-full mb-6' src={exp} alt="" />
                </div>
                <div>
                    <img className='w-24 h-24 rounded-full mb-6' src={html} alt="" />
                    <img className='w-24 h-24 rounded-full mb-6' src={tail} alt="" />
                    <img className='w-24 h-24 rounded-full mb-6' src={css} alt="" />
                </div>
                <div>
                    <img className='w-24 h-24 rounded-full mb-6' src={boot} alt="" />
                    <img className='w-24 h-24 rounded-full mb-6' src={tail} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Skills;