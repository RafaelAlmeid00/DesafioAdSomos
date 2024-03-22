
import { IconType } from 'react-icons';

interface ButtonProps {
    icon?: IconType;
    width: string;
    height: string;
    text: string;
    link: string;
}

function Button({ text, icon: Icon, width, height, link }: ButtonProps) {
    const style = {
        width: width,
        height: height,
        
    };

    return (
        <a className='button--link' href={link}>
            <button className='button content--marginleft content--marginright' style={style}>
                {Icon && <Icon className='button__icon' />}
                <p className='button__text'>{text}</p>
            </button>
        </a>
    );
}

export default Button;
