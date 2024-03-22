interface TitleProps {
    text: string;
    pd?: string;
}

function Title({ text, pd }: TitleProps) {

    return (
        <>
            <div className={`${pd} title`}>
                <h1 className="title__text secondcolor--color"> {text} </h1>
            </div>
        </>
    )
}

export default Title
