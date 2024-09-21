import pfp from "./assets/pfp.png"

function Card (){

    return (
        <div className="card">
            <img className = "card-image" src = {pfp} alt="Profile Picture"></img>
            <h2 className = "card-title">Neha</h2>
            <p className = "card-text" >Awesome Student </p>
            <a className = "card-text" href="https://github.com/nehaneha8"> My GitHub</a>
        </div>

    );

}

export default Card;