import Button from "../Button/Index";
import InputForm from "../Input/Index";

const FromLogin = () => {
    const hendeleLogin = (event) => {
        localStorage.setItem("email",event.target.email.value)
        localStorage.setItem("password",event.target.password.value)
        event.preventDefault();
        window.location.href="/products"
    }
    return (
        <form onSubmit={hendeleLogin}>
            <InputForm
                label="Email"
                type="email"
                name="email"
                placeholder="Enter your email"
                htmlFor="email"
                id="email"
            />

            <InputForm
                label="Password"
                type="password"
                name="password"
                placeholder="Enter your password"
            />
            <Button classname="bg-blue-600 w-full"
                type="submit"
            >
                Login
            </Button>
        </form>

    );
};
export default FromLogin;