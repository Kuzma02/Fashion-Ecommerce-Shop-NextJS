"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import styles from "./Carousel.module.css";

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div ref={emblaRef} className={styles.embla}>
      <div className={styles.embla__container} style={{height: "800px"}}>
        <div className={styles.embla__slide}><Image src="/static/banner1.jpg" width={1800} height={600} className="object-fill" /></div>
        <div className={styles.embla__slide}><Image src="/static/banner2.jpg" width={1800} height={600} className="object-fill" /></div>
        <div className={styles.embla__slide}><Image src="/static/banner3.jpg" width={1800} height={600} className="object-fill" /></div>
      </div>
    </div>
  );
};

export default Carousel;
