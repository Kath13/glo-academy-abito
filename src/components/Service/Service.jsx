import './Service.css'

export const Service = ({service}) => {
    const {title, description, imageURL} = service
    return (
        <>
            <div className="service">
                <img className="service--img" src={`/image/${imageURL}`} alt={title}/>
                <h5 className="service--title">{title}</h5>
                <p className="service--desc">{description}</p>
            </div>
        </>
    )
}