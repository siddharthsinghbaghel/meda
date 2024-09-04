import React, { useEffect } from 'react'
import logo from "../../Assets/Logo/medalogo.png"
import {Link, matchPath} from "react-router-dom"
import { NavbarLinks } from '../data/navbar-links'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MdAddBox } from "react-icons/md";
import ProfileDropDown from '../core/homepage/Auth/ProfileDropDown'
import { apiConnector } from '../../services/apiconnector'
import { categories} from '../../services/apis'
import { useState } from 'react'
import { IoIosArrowDropdownCircle } from 'react-icons/io'

const subLinks = [
    {
        title: "basic medicines",
        link: "/catalog/basic medicines"
    },
    {
        title: "advanced medicines",
        link: "/catalog/advanced medicines"
    }
]
const Navbar = () => {

    const {token} = useSelector((state)=>state.auth);
    const {user} = useSelector((state)=>state.profile);
    const {totalItems} = useSelector((state)=>state.add);
    const location = useLocation();


    //const [subLinks, setSubLinks]= useState([]);

  //  const fetchSublinks = async()=> {
    //    try{
      //      const result = await apiConnector("GET",categories.CATEGORIES_API);
        //    console.log("printing Sublinks result :" , result);
          //  setSubLinks(result.data.data);
        //}
//
  //  catch(error){
    //    console.log("could not fetch the category list");
    //}

    //}
    //useEffect(  () =>{
        //fetchSublinks();

    //},[]
    //)



    const matchRoute = (route)=> {
        return matchPath({path:route}, location.pathname);

    }

  return (
    <div className='flex h-14  justify-center items-center  border-b-[1px] border-b-richblack-700'>
        <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
        <Link to="/"> 
            <img src={logo} alt="Logo" width={70} height={16} loading="lazy"/>
        </Link>

        

        {/* nav links */}

        <nav>
            <ul className='flex gap-x-6 text-white'>
                {
                    NavbarLinks.map((link,index)=> (
                        <li key={index}>
                            {
                                link.title === "Catalog" ? (
                                <div className=' relative  flex items-center gap-2'>
                                    <p>{link.title}</p>
                                    <IoIosArrowDropdownCircle/>

                                    <div className='invisible absolute left-[50%]  translate-x-[-50%] translate-y-[80%] top-[50%] flex flex-col rounded-md text-richblack-800 bg-richblack-600 p-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px]'>
                                        <div className='absolute left-[50%] top-0 translate-x-[80%] translate-y-[-40%] h-6 w-6 rotate-45 rounded  bg-richblack-5'>

                                        </div>
                                        
                                            {
                                                subLinks.length ? (
                                                        subLinks.map((subLink, index) =>(
                                                            <Link to={`${subLink.link}`} key={index}>
                                                                <p>{subLink.title}</p>

                                                            </Link>
                                                        ))

                                                    
                                                )  : (<div></div>)
                                            }
                                        


                                    </div>

                                </div>) : (
                                    <Link to ={link?.path}>
                                        <p className={`${matchRoute(link?.path) ? "text-yellow-25": "text-richblack-25"}`}>
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
                        <button className='border border-richblack-700  bg-richblack-800 text-richblack-50 rounded-md  '>
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

