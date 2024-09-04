import signupImg from "../Assets/images/signup.webp"
import Template from "../components/core/homepage/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join the millions of medical information hub , MEDIGUIDE"
      description1="get aware of medicines and precautions."
      description2="medical awareness and selfcare is important too."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup