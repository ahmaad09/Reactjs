import { Fragment } from "react";
import Footer from "../components/Elemets/Fragments/Footer";
import Header from "../components/Elemets/Fragments/Header"
import Navigasi from "../components/Elemets/Fragments/Navigasi"

const Panduan = () => {
    return (
        <Fragment>
            <Header>
                <Navigasi
                    dashboardText="Dashboard"
                    forumText="Forum"
                    panduanText="Panduan"
                    pengaturanText="Pengaturan"
                />
            </Header>
            <div className="container mx-auto mt-10">
                <h1 className="text-2xl text-hijau font-semibold w-fit border-b-2 border-hijau mt-10">Panduan</h1>
                <div className="bg-hijau w-full h-screen rounded-md my-10">
                    <div className="flex">
                        <div className="bg-slate-500 w-64 h-44 rounded-md"></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Panduan;