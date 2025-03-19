/* eslint-disable react/prop-types */
import "./header.styles.scss";

const Header = (props) => {
  const { title, img } = props.header;
  const { url, alt } = img;

  return (
    <>
      <header>
        <img src={url} alt={alt} />
        <h2>{title}</h2>
      </header>
    </>
  );
};

export default Header;
