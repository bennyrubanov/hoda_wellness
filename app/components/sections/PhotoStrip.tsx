import Image from "next/image";

const photos = [
  {
    src: "/images/PersonMountainHoda.jpg",
    alt: "Woman sitting peacefully on a mountain cliff, looking out over a green valley",
  },
  {
    src: "/images/WaterHoda.jpg",
    alt: "Hand gently touching sparkling water — connection with nature and renewal",
  },
  {
    src: "/images/YogandflowersHoda.jpg",
    alt: "Person practicing yoga outdoors surrounded by flowers — movement and serenity",
  },
];

export default function PhotoStrip() {
  return (
    <div className="grid grid-cols-3 h-56 sm:h-72 lg:h-80">
      {photos.map((photo) => (
        <div key={photo.src} className="relative overflow-hidden">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="33vw"
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      ))}
    </div>
  );
}
