/* eslint-disable react/prop-types */
import "./main.styles.scss";

const MainComponent = ({ children }) => {
  return (
    <>
      <main className="container">{children}</main>
    </>
  );
};

export default MainComponent;
