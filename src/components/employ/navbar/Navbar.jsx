import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

const Navbar = () => {
  return (
    <div className="w-full px-[10%] flex items-center justify-between shadow">
      <NavLeft />
      <NavRight />
    </div>
  );
};

export default Navbar;
