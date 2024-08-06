import { useEffect, useRef, useState } from "react";

interface RenderImgProps {
  src: string;
  active: boolean;
}

const BANNER_URIS = [
  "https://www.eleconomista.com.mx/__export/1665373853713/sites/eleconomista/img/2022/10/09/edificios_en_construccixn__elr.jpg_185051853.jpg",
  "https://constructoresrivera.com/wp-content/uploads/2020/04/asi-son-las-nuevas-tendencias-en-la-construccion.jpg",
  "https://www.aceroform.com.mx/wp-content/uploads/2020/10/banner-construccion-1200x675.jpg",
];

const RenderImg = ({ src, active }: RenderImgProps) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (active) imgRef.current!.style.opacity = "1";

    return () => {
      if (active) imgRef.current!.style.opacity = "0";
    };
  }, [active]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt="banner"
      className="object-center md:object-fill object-cover w-full h-[calc(100vh+130px)] absolute top-[-130px] left-[0] transition-opacity"
    />
  );
};

export default function BannerCarrousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setActiveIndex((prev) => {
        if (prev >= BANNER_URIS.length - 1) return 0;
        return prev + 1;
      });
    }, 7000);
  }, []);

  console.log({ activeIndex });

  return (
    <>
      {BANNER_URIS.map((src, idx) => {
        return <RenderImg src={src} key={src} active={idx === activeIndex} />;
      })}
    </>
  );
}
