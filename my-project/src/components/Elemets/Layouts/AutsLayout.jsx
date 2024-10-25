import { Link } from "react-router-dom";
const AutsLayouts = (props) => {
  const { children, title, type, bg } = props;
  return (
    <div className="flex justify-center items-center h-screen relative w-full bg-slate-100 gap-10">
      <Background bg={bg} />
      <div className="w-full max-w-xs">
        <h1 className="text-blue-700 font-bold text-3xl">{title}</h1>
        <p className="text-slate-500 font-semibold mt-3 mb-8">Welcome, pless enter your detail</p>
        {children}
        <Navigation type={type} />
      </div>
    </div >
  )
}
const Navigation = ({ type }) => {
  if (type === 'login') {
    return (
      <p className="text-sm text-center my-3">
        Don't have an acount{" "}
        <Link to="/register" className="text-blue-600 font-semibold">
          Register
        </Link>     </p>
    )
  }
  else {
    return (
      <p className="text-sm text-center mt-5">
        Al ready have an acount{" "}
        <Link to="/login" className="text-blue-600 font-semibold">
          Login
        </Link>
      </p>
    )
  }
}

const Background = ({ bg }) => {
  if (bg === 'login') {
    return (
      <div className="bg-[url('./img/login.png')] h-96 w-full max-w-xs bg-cover bg-center order-2 rounded-md"></div>
    )
  }
  else {
    return (
      <div className="bg-[url('./img/padi.jpg')] h-[30rem] w-full max-w-xs bg-cover bg-center order-2 rounded-md"></div>
    )
  }
}

export default AutsLayouts;   