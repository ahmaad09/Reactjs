import Navigasi from "./Navigasi";

const Header = (props) => {
    const {
        children, type
    } = props;
    return (
        <div className="flex justify-between items-center text-black px-5 bg-white h-20 sticky top-0 py-10 z-20">
            <img src="/logo.svg" alt="logo jagoagro" width={"80px"} />
            {children}
        </div>
    )
}
export default Header;
