import styled from "styled-components";
import Typewriter from 'typewriter-effect';

const Intro = () => {
    const Div = styled.div
        `
            display: flex;
            justify-content: space-between;
            font-size: 45px;
        `;

    return (
        <section>
                <Div>

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