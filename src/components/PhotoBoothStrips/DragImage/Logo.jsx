import logo1 from "../../PhotoBoothStrips/assetsBooth/festa_logo.webp";

const Logo = ({ backgroundImage }) => {
  return (
    <div
      className={`pt-2 border-solid  border-4 w-40 h-36 max-sm:pb-2 max-sm:w-40 pb-10  ${
        backgroundImage ? "border-none" : "border-white"
      }`}
    >
      {backgroundImage ? "" : <img src={logo1} alt="logobeyondthearmy" />}
    </div>
  );
};

export default Logo;
