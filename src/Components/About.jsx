import React, { useState } from 'react'

const About = () => {
    const [header] = useState({
        title: "About Me",
        mainHeading: "About Me",
        mainContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",

    });
    const [about] = useState({
        title: "Hi There",
        mainContentOne: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
        mainContentTwo: "nunc id efficitur sagittis, urna est ultricies eros, ac portasem turpis porta sem turpis quis leo. Nulla in feugiat elit.",

    });
    const [contacts] = React.useState([
        { id: 1, title: "Name:", text: "John Doe" },
        { id: 2, title: "Email:", text: "example@domain.com" },
        { id: 3, title: "Phone:", text: "+1 023 454 345" },
        { id: 4, title: "Linkedin", text: "Jonathan_123" },
      ]);
    return (
        <div className="about">
            <div className="container">
                <div className="services__header">
                    <div className="common">
                        <h3 className="heading">{header.title}</h3>
                        <h1 className="mainHeader">{header.mainHeading} </h1>
                        <p className="mainContent">{header.mainContent}</p>
                        <div className="commonBorder"></div>
                    </div>
                </div>
                <div className="row  h-650 alignCenter">
                    <div className="col-6">
                        <div className="about__img">
                        <img src="/images/man-01.png" alt="man" />
                        </div>
                    </div>
                    <div className="col-6">
                    <div className="about__info">
                    <h1>{about.title}</h1>
                    <div className="about__info-p1">
                        {about.mainContentOne}
                    </div>
                    <div className="about__info-p2">
                        {about.mainContentTwo}
                    </div>
                    <div className="info__contacts">
                        <div className="row">
                            {contacts.map((contact) => (
                                <div className="col-6">
                                    <strong>{contact.title}</strong>
                                    <p>{contact.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default About
