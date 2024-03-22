
interface ImageProps {
    height: string;
    width: string;
    src: string
}

const Image: React.FC<ImageProps> = ({ height, width, src }) => {
    return (
        <>
            <img className="image" src={src} alt="Eletrônicos" style={{ height: height, width: width }}/>
        </>
    )
}

export default Image
