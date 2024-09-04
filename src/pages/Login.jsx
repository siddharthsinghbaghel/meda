import loginImg from "../Assets/images/login.webp"
import Template from "../components/core/homepage/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="guide yourself with Mediguide."
      description2="information hub to aware regarding healthcare."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login