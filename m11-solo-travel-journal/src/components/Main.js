import React from "react"


export default function Main(props) {
    const {imageUrl, location, googleMapsUrl, title, startDate, endDate, description} = props
    return (
        <main className="card-container">
            <div className="card">
                <div>
                    <img className="card-img" alt="" src={imageUrl}/>
                </div>
                <div>
                    <p><img src={require ("../images/map-pin-icon.png")} alt="map pin icon" className="map-pin"/> <span className="uppercase">{location}</span><a href={googleMapsUrl} target="_blank">View on Google Maps</a></p>
                    <h2>{title}</h2>
                    <p className="card-dates">{startDate} - {endDate}</p>
                    <p>{description}</p>
                </div>
            </div>
        </main>
    )
}
