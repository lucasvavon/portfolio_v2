import styled from 'styled-components'
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Scroll from "./components/Scroll";

function App() {

    const Title = styled.h1`
          font-size: 1em;
        `;


    return (
        <>
        <header>
            <Title> Lucas </Title>
            <Navbar />
            {/*<Weather />*/}
        </header>
        <Intro />
        <section id="skills">
            BLABLABLA
        </section>
        <section id="works">
            BLABLABLA
        </section>
        <section id="contact">
            BLABLABLA
        </section>
        <Scroll />
        </>
    );
}

export default App;
