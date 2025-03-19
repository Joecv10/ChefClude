/* eslint-disable react/prop-types */
import "./card.styles.scss";
import { CiLocationOn } from "react-icons/ci";

const Card = (props) => {
  console.log(props);
  const { img, location, mapRef, title, date, description } = props.places;
  const { url, alt } = img;

  return (
    <>
      <article className="card">
        <div className="image-card">
          <img className="image-journal" src={url} alt={alt} />
        </div>
        <div className="text-card">
          <div className="upper-text">
            <div className="location">
              <CiLocationOn className="icon-location" />
              <h5>{location}</h5>
              <small>
                <a href={mapRef}>View on Google Maps</a>
              </small>
            </div>
            <h3>{title}</h3>
          </div>
          <div className="lower-text">
            <h6>{date}</h6>
            <p>{description}</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
