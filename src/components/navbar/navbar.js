import React, { useState } from "react";
import { navLinksdata } from "../../constants";
import { Link } from 'react-scroll';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";


const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 py-20 z-20 bg-bodyColor sticky top-0 flex justify-end items-start font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <ul className="hidden mdl:inline-flex w-full h-20 mx-auto flex justify-center
				 items-center gap-6 lg:gap-10 font-titleFont">
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
				<span onClick={() => setShowMenu(!showMenu)} className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"> <FiMenu /></span>
				{
					showMenu && (
						<div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
							<div className="flex flex-col gap-8 py-2  relative">
							<div>
								<p className="text-sm text-gray-400 mt-2">Lorem	</p>
							</div>
							<ul className="flex flex-col gap-4">
								{
									navLinksdata.map((item) => (
									<li key={item._id}  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
										<Link
										onClick={() => setShowMenu(false)}
										activeClass="active"
										to={item.link}
										spy={true}
										smooth={true}
										offset={-70}
										duration={500}
										>{item.title}</Link>
									</li>
									))
								}
							</ul>
							<div className="flex flex-col gap-4">
			<h2 className="text-base uppercase font-tutleFont mb-4 "> FIND ME </h2>
			<div className="flex gap-4">
				<span className="bannerIcon">
					<FaLinkedinIn />
				</span>
				<span className="bannerIcon">
					<FaGithub />
				</span>
			</div>
		</div>
							<span 
								 onClick={() => setShowMenu(false)}
								 className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
								 >
									<MdClose />
								 </span>
							</div>
				
						</div>
					)
				}
      </div>
    </div>
  );
};

export default Navbar;
