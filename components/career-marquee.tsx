import { motion } from "motion/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Career() {
  const data = [
    { src: "/projects/shopify.png" },
    { src: "/projects/shopify.png" },
    { src: "/projects/shopify.png" },
    { src: "/projects/shopify.png" },
    { src: "/projects/shopify.png" },
    { src: "/projects/shopify.png" },
    { src: "/projects/shopify.png" },
  ];

  return (
    <div className="py-10">
      <div className="flex [mask-image:linear-gradient(to_right,rgba(0,0,0,0.1),rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0.1))]">
        <Marquee speed={50} pauseOnHover className="py-4">
          {data.map((item, idx) => (
            <CareerCard index={idx} key={idx} {...item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

const CareerCard = ({ src, index }: { src: string; index: number }) => {
  return (
    <div className="shadow-custom mx-4 flex h-50 w-full max-w-60 flex-col justify-between gap-4 rounded-xl p-4 transition duration-300 hover:shadow-xl">
      <div className="flex items-center gap-4">
        <Image src={src} alt="No Image Found" width={600} height={600} />
      </div>
    </div>
  );
};
