import styled from "styled-components";

function Intro() {
    const Div = styled.div`
          display: flex;
          justify-content: space-between;
    `;

    return (
        <section>
            <Div>
                Hi, I'm Lucas !
            </Div>
        </section>
    );
}

export default Intro