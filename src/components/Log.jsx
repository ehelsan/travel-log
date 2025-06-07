function Log(props) {
  return (
    <article className = "log">
      <div className="location-img-container">
        <img
          className="location-img"
          src={props.locationImg}
          alt={props.locationAlt}
        />
      </div>
      <div className="log-info">
        <img 
          className="marker-img"
          src={props.markerImg}
        />
        <span className="country">{props.country}</span>
        <a className="mapslink" href={props.mapslink}>View location on Google Maps</a>
        <h2 className="location-name">{props.locationName}</h2>
        <p className="date">{props.date}</p>
        <p className="text">{props.text}</p>
      </div>
    </article>
  )
}

export default Log