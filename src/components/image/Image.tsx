
interface ImageProps {
    height: string;
    width: string;
    src: string;
    alt: string;
    border?: string;
}

const Image: React.FC<ImageProps> = ({ height, width, src, alt, border }) => {
    const handleClick = () => {
        window.location.href = 'https://adsomos.com'; // Redirecionamento ao clicar na imagem
    };

    return (
        <>
          <img className={` ${border} image`} src={src} alt={alt} style={{ height: height, width: width, cursor: "pointer" }} onClick={handleClick}/>
        </>
    )
}

export default Image
