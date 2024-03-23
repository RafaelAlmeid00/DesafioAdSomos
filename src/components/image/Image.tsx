
interface ImageProps {
    height: string;
    width: string;
    src: string;
    alt: string;
    border?: string;
}

const Image: React.FC<ImageProps> = ({ height, width, src, alt, border }) => {

    return (
        <>
            <img className={`image ${border}`} src={src} alt={alt} style={{ height: height, width: width }} />
        </>
    )
}

export default Image
