import logo from "../images/me-min.png"

const Logo = () => {

    return (
        <div className={'bloc'}>
            <img loading="lazy" className={'logo'} src={logo} alt={"logo"}/>
        </div>
    );
};

export default Logo;
