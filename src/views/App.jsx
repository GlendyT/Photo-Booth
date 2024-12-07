import { Link } from "react-router-dom";
import { commonClasses, links } from "../components/utils/LinkBoxes";


function App() {
  return (
    <div className="relative min-h-screen  bg-backmain bg-cover bg-no-repeat max-sm:bg-center ">
      <div className="flex flex-wrap items-center justify-center gap-4 max-sm:flex-col ">
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

/* */
