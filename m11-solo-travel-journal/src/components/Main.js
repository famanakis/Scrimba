import React from "react"


export default function Main(props) {
    return (
        <main className="card-container">
            <div className="card">
                <div>
                    <img className="card-img" alt="" src={props.imageUrl}/>
                </div>
                <div>
                    <p><img src={require ("../images/map-pin-icon.png")} alt="map pin icon" className="map-pin"/> <span className="uppercase">{props.location}</span><a href={props.googleMapsUrl}>View on Google Maps</a></p>
                    <h2>{props.title}</h2>
                    <p className="card-dates">{props.startDate} - {props.endDate}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </main>
    )
}
