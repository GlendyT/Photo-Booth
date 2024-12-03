import { Link } from "react-router-dom";
import { commonClasses, links } from "../components/utils/LinkBoxes";
import Waves from "../components/FishingKSJ/waves/Waves";

function App() {
  return (
    <div className="relative min-h-screen  ">
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
      <Waves/>
    </div>
  );
}

export default App;

/* px-40 py-20 gap-6 max-sm:flex max-sm:flex-col max-sm:py-12 max-sm:gap-3 max-sm:px-0*/
