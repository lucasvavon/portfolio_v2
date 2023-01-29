import styled from "styled-components";
import Typewriter from 'typewriter-effect';
import Logo from "./Logo";

const Intro = () => {
    const Div = styled.div
        `
            display: flex;
            font-size: 45px;
        `;

    return (
        <section>
                <Div>
                    <Logo />

                    <Typewriter
                        options={{
                            strings: ['Bonjour,<br/>Je suis Lucas,<br/>developpeur web.'],
                            autoStart: true,
                            loop: true,
                            pauseFor: 1500
                        }}
                    />
                </Div>
        </section>
    )
}

export default Intro