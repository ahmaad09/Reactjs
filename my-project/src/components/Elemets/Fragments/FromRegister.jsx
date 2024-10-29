import Button from "../Button/Index";
import InputForm from "../Input/Index";
import Chexbox from "../Button/Forgot";
import { Link } from "react-router-dom";

const FromRegister = () => {
    return (
        <form action="" method="post">
            <InputForm
                type="eamil"
                name="email"
                placeholder="Email"
            />
            <InputForm
                type="password"
                name="password"
                placeholder="Password" />

            <InputForm
                type="password"
                name="password"
                placeholder="Confirm Password" />
                <b className="flex justify-center mb-3 text-white">or</b>
            <Link to="./www.goggle.com" className=" flex justify-center">
                    <img src="/img/pk.png" alt="" className="w-[50%] bg-white p-2 rounded-full"/>
                </Link>
            <div className="flex justify-center w-full mt-10"> 
                <Button classname="bg-yellow-500 text-white w-1/3 hover:bg-yellow-600">
                    Sign Up
                </Button>
            </div>
        </form>
    );
};
export default FromRegister;
