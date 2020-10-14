import React, { useState } from "react"
import { FaGithub } from "react-icons/fa";

const Services = () => {
    const [header] = useState({
        title: "SERVICES",
        mainHeading: "My Services",
        mainContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",

    });
    const [services] = useState([
        {
            id:1, icon: 'FaGithub', title: "Web Development", text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
        },
        {
            id:2, icon: 'FaCamera', title: "Photography", text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
        },
        {
            id:3, icon: 'FaCircleNotch', title: "Web Design", text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
        },
        {
            id:4, icon: 'FaApple', title: "App Developing", text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
        },
        {
            id:5, icon: 'FaFileVideo', title: "Video Editing", text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
        },
        {
            id:6, icon: 'FaSearchDollar', title: "SEO Expart", text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
        }
    ]);
    return (
        <div className="services">
            <div className="container">
                <div className="services__header">
                <div className="common">
                    <h3 className="heading">{header.title}</h3>
                    <h1 className="mainHeader">{header.mainHeading} </h1>
                    <p className="mainContent">{header.mainContent}</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="row bgMain">
                    { services.map(service => (
                        <div className="col-4 bgMain">
                            <div className="services__box">
                                <FaGithub className="commonIcons" />
                                <div className="services__box-header">{service.title}</div>
                                <div className="services__box-p">{service.text}</div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
