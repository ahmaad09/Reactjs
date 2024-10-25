import FromLogin from "../components/Elemets/Fragments/FromLogin";
import AutsLayouts from "../components/Elemets/Layouts/AutsLayout";

const LoginPages = () => {
    return (
        <AutsLayouts title="Login" type='login' bg="login">
            <FromLogin />
        </AutsLayouts>
    )
}
export default LoginPages;