interface TextProps {
    text: string;
    pd?: string;
}
function Text({ text, pd }: TextProps) {

    return (
        <>
            <div className={`text ${pd}`}>
                <p className="text__content thirdcolor--color"> {text} </p>
            </div>
        </>
    )
}

export default Text
