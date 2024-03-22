import { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import Image from "../image/Image";

interface SliderProps {
    images: Array<string>
}

function Slider({ images }: SliderProps) {
    const [startIndex, setStartIndex] = useState(0);

    const goToPrevSlide = () => {
        const newStartIndex = (startIndex - 1 + images.length) % images.length;
        setStartIndex(newStartIndex);
    };

    const goToNextSlide = () => {
        const newStartIndex = (startIndex + 1) % images.length;
        setStartIndex(newStartIndex);
        const skipLastImage = images.length - 2
        console.log('a', skipLastImage);
        console.log('a',startIndex);

        if (skipLastImage == startIndex) {
            console.log('foi');
            setStartIndex(0)
        }
    };

    console.log(startIndex, images.length);
    

    const visibleImages = images.slice(startIndex, startIndex + 2);

    return (
        <div className="slider">
            <IoMdArrowDropleft className="slider__iconleft" onClick={goToPrevSlide} />
            {visibleImages.map((src, index) => (
                <Image key={index} height={"25vh"} width={"25vw"} src={src} alt={`Slide ${startIndex + index}`} />
            ))}
            <IoMdArrowDropright className="slider__iconright" onClick={goToNextSlide} />
        </div>
    );
}

export default Slider;
