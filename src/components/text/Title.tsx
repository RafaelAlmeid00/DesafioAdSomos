interface TitleProps {
    text: string;
}

function Title({ text }: TitleProps) {

    return (
        <>
            <div className="title">
                <h1 className="title__text secondcolor--color"> {text} </h1>
            </div>
        </>
    )
}

export default Title
