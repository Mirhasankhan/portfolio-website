import profile from '../assets/hasan.jpg'
import react from '../assets/react.svg'
import bootstrap from '../assets/boot.jpg'
import js from '../assets/js.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import mongodb from '../assets/mongo.png'
import express from '../assets/exp.png'
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import Marquee from "react-fast-marquee";
import DownloadResume from './DownloadResume'
import { useEffect, useState } from 'react'
import 'animate.css';


const Home = () => {
    const [elements, setElements] = useState(['Full Stack Developer_', 'MERN Stack Developer_', 'React Developer_']);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % elements.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [elements.length])

    return (
        <div className='flex justify-start items-center mt-12 mx-16'>
            <div className='w-1/2' data-aos="fade-right" data-aos-duration="1500">
                <h1 className='text-xl font-medium'>Welcome To My World</h1>
                <h1 className='text-3xl font-bold my-2'>Hi,I'm <span className='text-green-300'>Mir Hasan</span></h1>
                <h3 className='text-xl font-medium'>I am a <span className='text-green-300'>{elements[currentIndex]}</span></h3>
                <p className='font-medium mt-2'>I’m a highly motivated Full stack web developer, skilled in creating modern and interactive web applications using React.js. Committed to producing high-quality code and exceeding client expectations and a deep passion for delivering exceptional user experiences with the ability to adapt with new technologies. I am excited to contribute to a dynamic development team and help drive innovation in the industry.
</p>
                <div className='flex text-3xl justify-start gap-8 mt-6'>
                    <a href="https://www.facebook.com/mir.hasan.794/"><FaFacebook /></a>
                    <a href="https://www.instagram.com/mirhasan762/?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D&fbclid=IwAR3EuwwUbRqTJMYlvLLG8ws-9TmJuzjT2uLzdET00rF85VhPQngebY97oN0"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/mir-hasan-9879a7277/"><FaLinkedin /></a>
                    <a href="https://github.com/Mirhasankhan"><FaGithub /></a>
                </div>
                <DownloadResume></DownloadResume>
                {/* <button className='btn btn-secondary my-3'>Download Resume <FaCloudDownloadAlt className='text-xl' /></button> */}
            </div>
            <div className='w-1/2'  data-aos="fade-left" data-aos-duration="1500">
                <img className='h-80 w-80 rounded-full mb-4 mx-auto border-4 border-sky-500' src={profile} alt="" />
                <Marquee>
                    <img className='h-16 mr-5 w-16 rounded-full' src={js} alt="" />
                    <img className='h-16 mr-5 w-16 rounded-full' src={react} alt="" />
                    <img className='h-16 mr-5 w-16 rounded-full' src={bootstrap} alt="" />
                    <img className='h-16 mr-5 w-16 rounded-full' src={express} alt="" />
                    <img className='h-16 mr-5 w-16 rounded-full' src={html} alt="" />
                    <img className='h-16 mr-5 w-16 rounded-full' src={css} alt="" />
                    <img className='h-16 mr-5 w-16 rounded-full' src={mongodb} alt="" />
                </Marquee>
            </div>
        </div>
    );
};

export default Home;