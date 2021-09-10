import React, {useState} from "react";
import {isBoolean} from "util";
import {Button} from "../../../main/ui/commonStyle";


interface IModalUp {
    speed?: number
}

const ModalUp: React.FC<IModalUp> = ({speed = 10}) => {
    const [show, setShow] = useState<boolean>(false);

    const handleScroll = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 300) {
            setShow(true)
        } else if (scrolled <= 300) {
            setShow(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', handleScroll);

    return (
        <Button>
            onClick={scrollToTop}
            style={{display: show ? 'inline' : 'none'}}
        </Button>
    )
}

export default ModalUp;