import profile_pic from "./assets/react.svg"

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profile_pic} alt="profile picture" />
            <h2 className="card-title">John Sellers</h2>
            <p className="card-body">I will be the founder and run a successful business</p>
        </div>
    )
}

export default Card