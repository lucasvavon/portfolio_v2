import './App.css';
import Intro from './components/Intro';
import Logo from './components/Logo.js';

const App = () => {
    return (
        <section id={'main'}>
            <Logo />
            <Intro />
        </section>
    );
};

export default App;
