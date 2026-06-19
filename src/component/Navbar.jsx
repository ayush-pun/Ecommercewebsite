import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <div className="
            w-11 h-11
            rounded-full
            bg-zinc-900
            text-white
            flex items-center justify-center
            font-bold
            text-sm
            transition-all duration-300
            group-hover:scale-110
            group-hover:bg-zinc-700
          ">
            AP
          </div>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center space-x-10 text-sm font-medium text-zinc-600">

          <li>
            <Link
              to="/"
              className="
                relative
                hover:text-zinc-900
                transition
                after:content-['']
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[1px]
                after:w-0
                after:bg-zinc-900
                after:transition-all
                hover:after:w-full
              "
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/aboutus"
              className="
                relative
                hover:text-zinc-900
                transition
                after:content-['']
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[1px]
                after:w-0
                after:bg-zinc-900
                after:transition-all
                hover:after:w-full
              "
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/contactus"
              className="
                relative
                hover:text-zinc-900
                transition
                after:content-['']
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[1px]
                after:w-0
                after:bg-zinc-900
                after:transition-all
                hover:after:w-full
              "
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile placeholder */}
        <div className="md:hidden text-zinc-500 text-sm">
          Menu
        </div>

      </div>
    </nav>
  );
};

export default Navbar;