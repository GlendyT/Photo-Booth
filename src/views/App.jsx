import { Link } from "react-router-dom";
import { commonClasses, links } from "../components/utils/LinkBoxes";

function App() {
  return (
    <div className="relative min-h-screen bg-backmain bg-cover bg-no-repeat max-sm:bg-center">
      <div className="grid grid-cols-3 lg:grid-cols-5 px-32 py-32 gap-6 max-sm:flex max-sm:flex-col max-sm:py-12 max-sm:gap-3 max-sm:px-0">
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
