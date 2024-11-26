import Button from "../Button/Index";
import InputForm from "../Input/Index";
import { Link } from "react-router-dom";

const FromRegister = (props) => {
    const hendelRegister = (event) => {
        event.preventDefault();
        localStorage.setItem("email", event.target.email.value);
        localStorage.setItem("password", event.target.password.value);
        localStorage.setItem("confirmPassword", event.target.confirmPassword.value);
        window.location.href = "/login";
    };

    return (
        <form action="" method="post" onSubmit={hendelRegister}>
            <InputForm
                type="email"
                name="email"
                placeholder="Email"
            />
            <InputForm
                type="password"
                name="password"
                placeholder="Password"
            />
            <InputForm
                type="password"
                name="confirmPassword" 
                placeholder="Confirm Password"
            />
            <b className="flex justify-center mb-3 text-white">or</b>
            <Link to="https://www.google.com" className="flex justify-center">
                <img src="/img/pk.png" alt="" className="w-[50%] bg-white p-2 rounded-full"/>
            </Link>
            <div className="flex justify-center w-full mt-10"> 
                <Button classname="bg-yellow-500 text-white w-1/3 hover:bg-yellow-600" type="submit">
                    Sign Up
                </Button>
            </div>
        </form>
    );
};
export default FromRegister;
