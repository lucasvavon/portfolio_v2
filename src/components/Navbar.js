import { useRef } from 'react';

const Navbar = () => {
    const handleClick = (e) => {
        console.log(e.target.id);
    };

    return (
        <nav className={'navbar'}>
            <input type="radio" className={'toggle'} id="toggle1" />
            <label htmlFor={'toggle1'} className={'button-nav'}>
                About.
            </label>

            <input
                type="radio"
                className={'toggle'}
                id="toggle2"
                onClick={handleClick}
            />
            <label htmlFor={'toggle2'} className={'button-nav'}>
                Works.
            </label>

            <input
                type="radio"
                className={'toggle'}
                id="toggle3"
                onClick={handleClick}
            />
            <label htmlFor={'toggle3'} className={'button-nav'}>
                Contact.
            </label>
        </nav>
    );
};

export default Navbar;
