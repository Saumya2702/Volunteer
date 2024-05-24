import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:
      "Empowering local initiatives that address critical community needs.Investing in programs that foster economic growth, education, and health. Working with community partners to create lasting change. Providing resources and support to underserved populations. Creating a vibrant and inclusive community where everyone thrives.",
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:
      "We are committed to providing donors with clear and accurate information about how their contributions are used.  Our website displays impact updates, and information about our team and mission. We welcome questions from donors and strive to respond promptly and transparently. Your trust is essential to us, and we believe that transparency is crucial for building and maintaining that trust. By sharing our progress and financial data, we empower donors to make informed decisions about their support",
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "IMPACT MEASUREMENT",
      description:
      "Our mission is to create meaningful change through our fundraising efforts. We believe in transparency and accountability, which is why we track and measure the impact of every donation we receive. Your support enables us to provide vital resources, fund innovative programs, and empower individuals and communities in need. By partnering with us, you become a driving force behind positive change. Together, we can make a lasting difference",
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
          {qualities.map((elememt) => {
            return (
              <div className="card" key={elememt.id}>
                <div className="img-wrapper">
                  <img src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p className="description">{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;