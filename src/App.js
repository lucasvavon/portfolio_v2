import styled from 'styled-components'
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Scroll from "./components/Scroll";
import Skills from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Logo from './components/Logo.js'
import Links from "./components/Links";

function App() {

    const Title = styled.div`
      font-size: 1em;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
        `;

    return (
        <>
            <header>
                <div className={"title"}>
                    <Logo />
                    <Title><div>Lucas</div></Title>
                </div>

                <Navbar />
            </header>
            <main id={"container"}>
                <Intro />
                <Skills /><Works /><Contact /><Scroll />
            </main>
        </>
    );
}

export default App;
