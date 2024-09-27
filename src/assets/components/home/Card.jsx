import React from "react";

function Card() {
  const testimonialsCard = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolor quasi ullam voluptatem sed dolores pariatur odit voluptatibus expedita. Impedit numquam, quam libero praesentium consectetur laudantium qui velit ex repellendus beatae veniam quibusdam ipsum accusantium delectus, eos quae. Ea incidunt ",
      avatar: "/assets/home/card-avatar.avif",
      name: "Gladis Lennon",
      title: "Head of SEO",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolor quasi ullam voluptatem sed dolores pariatur odit voluptatibus expedita. Impedit numquam, quam libero praesentium consectetur laudantium qui velit ex repellendus. ",
      avatar: "/assets/home/card-avatar.avif",
      name: "Gladis Lennon",
      title: "Head of SEO",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolor quasi ullam voluptatem sed dolores pariatur odit voluptatibus expedita. Impedit numquam, quam libero praesentium.",
      avatar: "/assets/home/card-avatar.avif",
      name: "Gladis Lennon",
      title: "Head of SEO",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolor quasi ullam voluptatem sed dolores pariatur odit voluptatibus expedita. Impedit numquam, quam ",
      avatar: "/assets/home/card-avatar.avif",
      name: "Gladis Lennon",
      title: "Head of SEO",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolor quasi ullam voluptatem sed dolores pariatur odit voluptatibus expedita. Impedit numquam, quam libero praesentium consectetur laudantium qui velit ex repellendus.",
      avatar: "/assets/home/card-avatar.avif",
      name: "Gladis Lennon",
      title: "Head of SEO",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolor quasi ullam voluptatem sed dolores pariatur odit.",
      avatar: "/assets/home/card-avatar.avif",
      name: "Gladis Lennon",
      title: "Head of SEO",
    },
  ];

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className=" sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {testimonialsCard.map((card, index) => (
            <div
              key={"card" + index}
              className="card p-6 shadow-lg mb-4 bg-gray-50 rounded-lg"
            >
              <div className="cardAvatar flex gap-4 mb-3">
                <img
                  src={card.avatar}
                  alt={card.name}
                  className="h-10 w-10 rounded-full"
                />
                <div className="title">
                  <h1>{card.name}</h1>
                  <h3>{card.title}</h3>
                </div>
              </div>
              <div className="cardContent">{card.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
