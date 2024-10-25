import Button from "../Button/Index";
import InputForm from "../Input/Index";
import Chexbox from "../Button/Chexbox";


const FromRegister = () => {
    return (
        <form action="" method="post">
            <InputForm
                label="Fullname"
                type="text"
                name="username"
                placeholder="Enter your username"
            />

            <InputForm
                label="Email"
                type="email"
                name="email"
                placeholder="Enter your email"
            />

            <InputForm
                label="Password"
                type="password"
                name="password"
                placeholder="password"
            />
            <Chexbox>Setuju dengan syarat yang berlaku</Chexbox>
            <Button classname="bg-blue-600 w-full">Register</Button>
        </form>

    )
}
export default FromRegister;