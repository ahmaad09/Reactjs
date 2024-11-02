import Forgot from "../Button/Forgot";
import Button from "../Button/Index";
import InputForm from "../Input/Index";

const FromLogin = () => {
    const hendeleLogin = (event) => {
        localStorage.setItem("username", event.target.username.value)
        localStorage.setItem("password", event.target.password.value)
        event.preventDefault();
        window.location.href = "/dashboard"
    }
    return (
        <form form onSubmit={hendeleLogin} className="flex flex-col">
            <InputForm
                type="username"
                name="username"
                placeholder="Username"
                htmlFor="username"
                id="username"
            />

            <InputForm
                type="password"
                name="password"
                placeholder="Password"
            />
            <Forgot>Forgot Acount?</Forgot>
            <div className="flex justify-center w-full mt-4">
                <Button classname="bg-yellow-500 text-white w-1/3 hover:bg-yellow-600" type="submit">
                    Sign In
                </Button>
            </div>
        </form>

    );
};
export default FromLogin;