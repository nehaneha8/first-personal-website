
function Button() {

    const styles = {
        backgroundColor: "rgb(170, 103, 103)",
        color: "rgb(255, 255, 255)",
        borderRadius: "5px",
        padding: "5px",
        display: "inline-block",
        cursor: "grab",
    }



    return(
        <button style={styles}>Click Me!</button>
    )

}


export default Button;