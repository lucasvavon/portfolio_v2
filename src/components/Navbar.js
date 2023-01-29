import { useMediaQuery } from "react-responsive";

function Navbar() {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' })

    const menuDesktopStyle = {
        "width": '40%',
        "display": 'flex',
        "flex-flow": 'row',
        "justify-content": 'space-evenly',
        "align-items": 'center'
    };
    const menuMobileStyle= {
        "display": 'flex',
        "flex-flow": 'column',
        "text-align": 'right',
        "justify-content": 'space-between'
    };

    return (
        <>
            <nav
                id={isDesktopOrLaptop ? "desktop_nav" : "mobile_nav"}
                style={isDesktopOrLaptop ? menuDesktopStyle : menuMobileStyle}>
                <a className={"menu_option"} href={"#about"}>About</a>
                <a className={"menu_option"} href={"#works"}>Works</a>
                <a className={"menu_option"} href={"#contact"}>Contact</a>
            </nav>
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Info</li></a>
                    <a href="#"><li>Contact</li></a>
                    <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
                </ul>
            </div>
        </>
    );
}

export default Navbar;