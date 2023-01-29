import styled from "styled-components";
import github from './../icons/github.png';
import linkedin from './../icons/linkedin.png';
import mail from './../icons/mail.png';
const Links = () => {
    const Div = styled.div
        `
            position: fixed;
            top: 40%;
            left: 0;
            border-radius: 0 25px 25px 0;
            box-shadow: rgba(0, 0, 0, 0.1) 0 10px 50px;
        `;

    return (
        <Div className={"links"}>
            <ul>
                <li><a className={"links"} target={"_blank"} href={"https://github.com/lucasvavon/"} rel="noreferrer"><img width={"50"} src={github} alt={"github"}/></a></li>
                <li><a className={"links"} target={"_blank"} href={"https://www.linkedin.com/in/lucas-vavon/"} rel="noreferrer"><img width={"50"} src={linkedin} alt={"linkedin"}/></a></li>
                <li><a className={"links"} target={"_blank"} href={"mailto:lucasvavon@icloud.com"} rel="noreferrer"><img width={"50"} src={mail} alt={"mail"}/></a></li>
            </ul>
        </Div>
    );
}

export default Links