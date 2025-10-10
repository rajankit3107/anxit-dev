import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Career() {
  const data = [
    { src: "/travel/project_showcase.jpeg" },
    { src: "/travel/table.jpeg" },
    { src: "/travel/banner.jpeg" },
    { src: "/travel/friends.jpeg" },
    { src: "/travel/friendsonbike.jpeg" },
    { src: "/travel/group.jpeg" },
    { src: "/travel/park.jpeg" },
  ];

  return (
    <div className="py-10">
      <div className="flex">
        <Marquee speed={50} pauseOnHover className="py-2">
          {data.map((item, idx) => (
            <CareerCard key={idx} {...item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

const CareerCard = ({ src }: { src: string }) => {
  return (
    <div className="shadow-custom mx-2 flex h-40 w-auto max-w-[250px] flex-col justify-center overflow-hidden rounded-md transition duration-300 hover:shadow-xl">
      <Image
        src={src}
        alt="No Image Found"
        width={600}
        height={600}
        className="h-full w-full object-cover"
      />
    </div>
  );
};
