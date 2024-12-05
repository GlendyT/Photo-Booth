import { Link } from "react-router-dom";
import { commonClasses, links } from "../components/utils/LinkBoxes";

function App() {
  return (
    <div className=" min-h-screen flex justify-center bg-backmain bg-cover bg-no-repeat max-sm:bg-center bg-black ">
      <div className="flex flex-wrap items-center justify-center gap-2 max-sm:flex-col">
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
