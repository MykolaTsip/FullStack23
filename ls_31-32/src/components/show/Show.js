

export const Show = ({clickSh}) => {

    return (
    <div 
    // onClick={clickSh}
    onClick={() => clickSh(222)}
    >
        I'm show
    </div>
    )
};