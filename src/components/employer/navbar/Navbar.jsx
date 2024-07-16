import { useSelector } from "react-redux";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

const Navbar = () => {
  const { employer } = useSelector((state) => state.employerReducer);

  return (
    employer && (
      <div className="w-full px-[10%] flex items-center justify-between shadow">
        <NavLeft />
        <NavRight employer={employer} />
      </div>
    )
  );
};

export default Navbar;
