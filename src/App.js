import styled from 'styled-components'
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Scroll from "./components/Scroll";
import Skills from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Logo from './components/Logo.js'
import {Title} from './styles/styles';
import Links from "./components/Links";

function App() {

    return (
        <>
            <header>
                <div className={"title"}>
                    <Title><div>Lucas</div></Title>
                </div>

                <Navbar />
            </header>
            <main id={"container"}>
                <Intro />
                <Skills />
                <Works />
                <Contact />
                <Scroll />
                <Links />
            </main>
        </>
    );
}

export default App;
