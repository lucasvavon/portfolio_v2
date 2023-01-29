import { useMediaQuery } from "react-responsive";

function Navbar() {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' })

    const menuDesktopStyle = {
        "width": '40%',
        "display": 'flex',
        "flex-flow": 'row',
        "justify-content": 'space-between',
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
        </>
    );
}

export default Navbar;