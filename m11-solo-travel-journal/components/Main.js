import React from "react"


export default function Main(props) {
    return (
        <section className="card-container">
            <div className="card">
                <div>
                    <img className="card-img" src={props.imageUrl}/>
                </div>
                <div>
                    <p><img src="./Map-Pin-Icon.png" className="map-pin"/> <span className="uppercase">{props.location}</span><a href={props.googleMapsUrl}>View on Google Maps</a></p>
                    <h2>{props.title}</h2>
                    <p className="card-dates">{props.startDate} - {props.endDate}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </section>
    )
}