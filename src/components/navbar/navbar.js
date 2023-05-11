import React from "react";
import { navLinksdata } from "../../constants";
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <div>
      <div>
        <ul className="w-full h-20 mx-auto flex justify-end items-center gap-10 font-titleFont">
          {navLinksdata.map(({ _id, title, link }) => (
            <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" key={_id}>
              <Link
							activeClass="active"
							to={link}
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
