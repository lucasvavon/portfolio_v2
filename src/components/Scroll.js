import {useState} from "react";

function Scroll() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button
            id={"scroll_button"}
            onClick={scrollToTop}
            style={{display: visible ? 'block' : 'none'}}
        >
            scroll to top -->
        </button>
    );
}

export default Scroll;
