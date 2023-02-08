import Links from './Links';
import Navbar from './Navbar';

const Intro = () => {
    return (
        <section id={'section1'} className={'bloc'}>
            <div className={'intro-container'}>
                <div className={'text-intro'}>
                    <h1>Hello. I'm Lucas.</h1>
                    <h3>Web developer based in France.</h3>
                    <Links />
                </div>
            </div>
            <Navbar />
        </section>
    );
};

export default Intro;
