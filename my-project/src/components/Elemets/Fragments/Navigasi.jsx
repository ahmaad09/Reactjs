import { Fragment } from "react";
import { Link } from "react-router-dom";

const Navigasi = (props) => {
    const { dashboardText, forumText, panduanText, pengaturanText,kontakKamiText,signIn,tentangKami } = props;

    return (
        <div className="flex justify-center items-center gap-10 font-semibold">
            <Link className="hover:text-hijau hover:border-b-2 text-md hover:border-hijau" to="/dashboard">{dashboardText}</Link>
            <Link className="hover:text-hijau hover:border-b-2 text-md hover:border-hijau" to="/forum">{forumText}</Link>
            <Link className="hover:text-hijau hover:border-b-2 text-md hover:border-hijau" to="/cart">{panduanText}</Link>
            <Link className="hover:text-hijau hover:border-b-2 text-md hover:border-hijau" to="/about">{pengaturanText}</Link>
            <Link className="hover:text-hijau hover:border-b-2 text-md hover:border-hijau" to="/about">{kontakKamiText}</Link>
            <Link className="hover:text-hijau hover:border-b-2 text-md hover:border-hijau" to="/">{tentangKami}</Link>

            <Link className="hover:border-b-2 text-md hover:bg-kuning py-1 px-5 bg-hijau rounded-xl text-white" to="/login">{signIn}</Link>

        </div>
    );
}

export default Navigasi;
