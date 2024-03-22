
interface ImageProps {
    height: string;
    width: string;
    src: string;
    alt: string;
}

const Image: React.FC<ImageProps> = ({ height, width, src, alt }) => {
    return (
        <>
            <img className="image" src={src} alt={alt} style={{ height: height, width: width }}/>
        </>
    )
}

export default Image
