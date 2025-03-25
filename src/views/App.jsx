import { Link } from "react-router-dom";
import { commonClasses, links } from "../utils/LinkBoxes";

function App() {
  return (
    <div className=" min-h-screen flex justify-center bg-backmain bg-cover bg-no-repeat max-md:bg-center ">
      <div className="flex flex-wrap items-center justify-center gap-2 py-4 px-1">
        {links.map(({ to, bg, hoverBg, label }) => (
          <Link
            key={to}
            to={to}
            className={`${commonClasses} ${bg} ${hoverBg}`}
            aria-label={label}
          ></Link>
        ))}
      </div>
    </div>
  );
}

export default App;
