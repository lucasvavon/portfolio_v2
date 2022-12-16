import { useMediaQuery } from "react-responsive";

function Navbar() {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' })

    const menuDesktopStyle = {
        "width": '50%',
        "display": 'flex',
        "flex-flow": 'row',
        "justify-content": 'space-between',
        "align-items": 'center'
    };
    const menuMobileStyle= {
        "display": 'flex',
        "flex-flow": 'column'
    };

    return (
        <>
            <nav
                id={isDesktopOrLaptop ? "desktop_nav" : "mobile_nav"}
                style={isDesktopOrLaptop ? menuDesktopStyle : menuMobileStyle}>
                <a href={"#skills"}>Skills</a>
                <a href={"#works"}>Works</a>
                <a href={"#contact"}>Contact</a>
            </nav>
        </>
    );
}

export default Navbar;