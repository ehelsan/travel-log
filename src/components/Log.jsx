function Log(props) {
  console.log(props)
  return (
    <article className = "log">
      <div className="location-img-container">
        <img
          className="location-img"
          src={props.log.src}
          alt={props.log.alt}
        />
      </div>
      <div className="log-info">
        <img 
          className="marker-img"
          src={props.log.markerImg}
        />
        <span className="country">{props.log.country}</span>
        <a className="mapslink" href={props.log.mapslink}>View location on Google Maps</a>
        <h2 className="location-name">{props.log.locationName}</h2>
        <p className="date">{props.log.date}</p>
        <p className="text">{props.log.text}</p>
      </div>
    </article>
  )
}

export default Log