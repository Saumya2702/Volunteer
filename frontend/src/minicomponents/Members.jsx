import React from 'react'

const Members = () => {
  const members = [
    {
      id: 1,
      image: "/v1.jpg",
      title: "Rishav Anand",
    },
    {
      id: 2,
      image: "/v2.jpg",
      title: "Rihanna Fernandes",
    },
    {
      id: 3,
      image: "/v3.jpg",
      title: "Manish Bishnoi",
    },
    {
      id: 4,
      image: "/v4.jpg",
      title: "Reyansh Lamba",
    },
    {
      id: 5,
      image: "/v5.jpg",
      title: "Aariv Singha",
    },
    {
      id: 6,
      image: "/v6.jpg",
      title: "Vanya Mishra",
    },
    {
      id: 7,
      image: "/v7.jpg",
      title: "Wriddhi Ray",
    },
  ];
  return (
    <>
      <section className="members">
        <div className="container">
          <div className="heading_section">
            <h2 className="heading">MEMBERS</h2>
            <p>
            Our Members: The Heart of Our Cause!Meet the Individuals Making a Difference.
            At Volunteer Community, our members are the driving force behind our mission. 
            They are everyday people who believe in the power of collective action to create positive change. 
             Our members come from diverse backgrounds, each with their own unique experiences and motivations. 
             But they share one common goal: to support our cause and make a lasting impact on our community.
            </p>
          </div>
          <div className="members_container">
            {members.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
