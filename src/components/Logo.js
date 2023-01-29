import me from '../images/me.jpg';

const Logo = () => {
    return (
        <div className={"logo"}>
            <img className={"me"} src={me} alt="logo" />
        </div>
    );
}

export default Logo