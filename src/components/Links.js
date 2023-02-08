const Links = () => {
    return (
        <nav className={'links_nav'}>
            <a
                className={'links'}
                target={'_blank'}
                href={'https://github.com/lucasvavon/'}
                rel="noreferrer"
            >
                <i className="fa-brands fa-github fa-xl"></i>
            </a>
            <a
                className={'links'}
                target={'_blank'}
                href={'https://www.linkedin.com/in/lucas-vavon/'}
                rel="noreferrer"
            >
                <i className="fa-brands fa-linkedin fa-xl"></i>
            </a>
            <a
                className={'links'}
                target={'_blank'}
                href={'mailto:lucasvavon@icloud.com'}
                rel="noreferrer"
            >
                <i className="fa-solid fa-envelope fa-xl"></i>
            </a>
        </nav>
    );
};

export default Links;
