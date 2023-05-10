import React from 'react';
import { favicon } from '../../assets/images/foto for Favicon.jpg';
import {navLinksdata} from "../../constants"

const Navbar = () => {
	return (
		<div>
			{/* <div className='w-full h-20 mx-auto flex justify-between items-center'>
				<img src={favicon} alt="favicon"/>
			</div> */}
			<div>
				<ul className='w-full h-20 mx-auto flex justify-end items-center gap-10'>
					 {
						navLinksdata.map((navlink) =>(
							<li>
								{navlink.title}
							</li>
						))
					 }
				</ul>
			</div>
		</div>
	)
}

export default Navbar
