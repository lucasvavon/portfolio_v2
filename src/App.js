import styled from 'styled-components'
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Scroll from "./components/Scroll";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {

    const Title = styled.h1`
          font-size: 1em;
        `;

    return (
        <>
        <header>
            <Title> Lucas </Title>
            <Navbar />
        </header>
            <div id={"container"}>
                <Intro /><Skills /><Works /><Contact /><Scroll />
            </div>

        </>
    );
}

export default App;
