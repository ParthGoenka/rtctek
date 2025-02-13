function Card ({url, description}){
    return(
        <div className="p-5 ">
            <img src={url} className="mb-5 "></img>
            <p>{description}</p>
        </div>
    )
}
export default Card;