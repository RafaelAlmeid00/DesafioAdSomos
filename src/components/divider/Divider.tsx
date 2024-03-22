
interface DividerProps {
    horizontal: boolean;
    size: number;
    width?: string;
    height?: string;
    color: string
}

function Divider({ horizontal, size, width, height, color }: DividerProps) {
    const style = {
        width: width,
        height: height,
        backgroundColor: color,
        margin: 'auto',
        marginTop: horizontal ? size / 2 : 0,
        marginBottom: horizontal ? size / 2 : 0,
        marginLeft: horizontal ? 0 : size / 2,
        marginRight: horizontal ? 0 : size / 2,
    };

    return (
        <>
            <div style={style} />
        </>
    );
}

export default Divider;

