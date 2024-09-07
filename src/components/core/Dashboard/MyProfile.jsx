import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import IconBtn from '../../common/IconBtn'
const MyProfile = () => {
    const{user} = useSelector((state) => state.profile)
    const navigate = useNavigate();
  return (
    <div className='text-white'>

        <h1>
            My Profile
        </h1>
        {/* section 1*/}

        <div>
            <div>

                <img
                src={user?.image}
                alt={`profile-${user?.firstName}`}
                className='aspect-square w-[78px] rounded-full object-cover'/>
                <div>
                    <p>{user?.firstName + " " + user?.lastName} </p>
                    <p>{user?.email}</p>
                </div>
            </div>
            <IconBtn
            
            text="edit"
            onClick={() =>{
                navigate("/dashboard/settings")
            }}
            />

            


        </div>
        {/* sectionn 2*/}

        <div>
            <div>
                <p>About</p>
                <IconBtn
                text="Edit"
                onClick={()=> {
                    navigate("/dashboard/settings")
                }}
                />
                
            </div>
            <p>{user?.additionalDetails?.about ?? "write seomething about yourself"} </p>

        </div>
        {/*secton 3*/}

        <div>
            <div>
                <p>Personal details</p>
                <IconBtn
                text="Edit"
                onClick={()=> {
                    navigate("/dashboard/settings")
                }}
                />

            </div>

            <div>
                <div>
                    <p>First Name</p>
                    <p>{user?.firstName}</p>
                </div>

                <div>
                    <p>Email</p>
                    <p>{user?.email}</p>
                </div>
                <div>
                    <p>gender</p>
                    <p>{user?.additionalDetails?.gender}</p>
                </div>

                <div>
                    <p>Last Name</p>
                    <p>{user?.lastName}</p>
                </div>
                
            </div>
        </div>



      
    </div>
  )
}

export default MyProfile
