import { Fragment } from "react";

// Card Newas
const CardNews = (props) => {
    const CardNews = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quod.",
            date: "11 November 2024",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quod."
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quod.",
            date: "11 November 2024",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quod."
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quod.",
            date: "11 November 2024",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quod."
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quod.",
            date: "11 November 2024",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quod."
        },
        {
            id: 5,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quod.",
            date: "11 November 2024",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quod."
        },

    ]
    return (
        <Fragment>
            <h1 className="mx-5 font-semibold text-hijau text-4xl border-b-2 border-hijau w-fit my-12">News</h1>
            {CardNews.map((item) => (
                <div key={item.id} className="mx-5 flex items-center my-5">
                    <div className="bg-hijau w-32 h-32 rounded-xl"></div>
                    <div className=" flex flex-col mx-5">
                        <h2 className="font-semibold text-hijau text-2xl">{item.title}</h2>
                        <span className="italic text-sm text-hijau">{item.date}</span>
                        <p>{item.desc}</p>
                    </div>
                </div>
            ))}
        </Fragment>
    )
};
export default CardNews;