import NavDesktop from "./nav-desktop";
import NavMobile from "./nav-mobile";

const Nav = () => {
  return <>
    <div className="w-full sticky top-0 left-0 z-30">
      <div className="hidden md:block">
          <NavDesktop/>
      </div>
      <div className="md:hidden">
          <NavMobile/>
      </div>
    </div>
  </>
};

export default Nav;
