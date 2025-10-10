import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Image from "next/image";

export function DraggableCard() {
  const items = [
    {
      title: "it's me",
      image: "travel/meonbike.jpeg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Bikers",
      image: "travel/friendsonbike.jpeg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Dalhousie",
      image: "travel/friendsontree.jpeg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Fun Nights",
      image: "travel/group.jpeg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "uk i love bikes",
      image: "travel/two.jpeg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "trio",
      image: "travel/trio.jpeg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
    {
      title: "Kasol",
      image: "travel/bike.jpeg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "me",
      image: "travel/pfp.jpeg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative ml-20 flex min-h-[30rem] w-full items-center justify-center overflow-clip rounded-md">
      {items.map((item) => (
        <DraggableCardBody key={item.title} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-50 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-base font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
