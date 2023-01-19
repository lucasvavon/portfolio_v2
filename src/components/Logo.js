import me from './../me.jpg';

function Logo() {
    return (
        <div className={"logo"}>
            <img className={"me"} src={me} alt="logo" />
        </div>
    );
}

export default Logo