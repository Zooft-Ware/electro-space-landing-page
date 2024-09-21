import { useEffect, useRef, useState } from "react";

interface RenderImgProps {
  src: string;
  active: boolean;
}

const BANNER_URIS = ["videos/banner_hd.mp4"];

const RenderMedia = ({ src, active }: RenderImgProps) => {
  const mediaRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (active) {
      mediaRef.current!.style.opacity = "1";
      mediaRef.current!.style.zIndex = "1";
    }

    return () => {
      if (active) {
        mediaRef.current!.style.opacity = "0";
        mediaRef.current!.style.zIndex = "0";
      }
    };
  }, [active]);

  return (
    <video
      className="object-center md:object-fill object-cover w-full h-[calc(100vh+130px)] absolute top-[-130px] left-[0] transition-opacity duration-1000"
      muted
      loop
      preload="1"
      playsInline
      autoPlay
      ref={mediaRef}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default function BannerCarrousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (BANNER_URIS.length === 1) return;
    setInterval(() => {
      setActiveIndex((prev) => {
        if (prev >= BANNER_URIS.length - 1) return 0;
        return prev + 1;
      });
    }, 7000);
  }, []);

  return (
    <>
      {BANNER_URIS.map((src, idx) => {
        const active = idx === activeIndex;
        return <RenderMedia src={src} key={idx} active={active} />;
      })}
    </>
  );
}
