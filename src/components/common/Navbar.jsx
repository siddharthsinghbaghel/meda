import React from 'react'
import logo from "../../Assets/Logo/medalogo.png"
import {Link, matchPath} from "react-router-dom"
import { NavbarLinks } from '../data/navbar-links'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MdAddBox } from "react-icons/md";
import ProfileDropDown from '../core/homepage/auth/ProfileDropDown'
const Navbar = () => {

    const {token} = useSelector((state)=>state.auth);
    const {user} = useSelector((state)=>state.profile);
    const {totalItems} = useSelector((state)=>state.add);





    const location = useLocation();

    const matchRoute = (route)=> {
        return matchPath({path:route}, location.pathname);

    }

  return (
    <div className='flex h-14  justify-center items-center  border-b-[1px] border-b-richblack-700'>
        <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
        <Link to="/"> 
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>

        

        {/* nav links */}

        <nav>
            <ul className='flex gap-x-6 text-richblack-800'>
                {
                    NavbarLinks.map((link,index)=> (
                        <li key={index}>
                            {
                                link.title === "Catalog" ? (<div></div>) : (
                                    <Link to ={link?.path}>
                                        <p className={`${matchRoute(link?.path) ? "text-yellow-25": "text-richblack-800"}`}>
                                            {link.title}
                                        </p>
                                    </Link>
                                )
                            }
                        </li>
                    ))
                }

            </ul>
        </nav>

        {/* login/sihnup/dashboard*/}
        <div className='flex gap-x-4 items-center'>
            {
                user && user?.accountType !="instructor"&& (

                    <Link to ="/dashboard/add" className='relative'>
                        <MdAddBox />
                        {
                            totalItems > 0 && (
                                <span>
                                    {totalItems}
                                </span>
                            )
                        }
                    </Link>
                )
            }
            {
                token === null && (
                    <Link to ="/login">
                        <div className='border border-richblack-700  bg-richblack-800 text-richblack-50 rounded-md'>
                            Log in
                        </div>
                    </Link>
                )
            }

            {
                token === null && (
                    <Link to ="/signup">
                        <button className='border border-richblack-700  bg-richblack-800 text-richblack-50 rounded-md'>
                            Sign Up
                        </button>
                    </Link>
                )
            }
            {
                token !== null && <ProfileDropDown/>
            }

        </div>







        </div>
        
        </div>


  )
}

export default Navbar

