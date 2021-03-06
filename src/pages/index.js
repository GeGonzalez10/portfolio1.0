import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { HomeSection } from '../components/HomeSection';
import { AboutMe } from '../components/AboutMe';
import { AboutDataObj } from '../components/AboutMe/AboutData';

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <HomeSection/>
        <AboutMe {...AboutDataObj}/>
        </>
    );
};

export default Home;