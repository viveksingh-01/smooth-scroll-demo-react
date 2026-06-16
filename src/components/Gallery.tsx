import { galleryData } from "../data/gallery";
import Image from "./Image";

export default function Gallery() {
  return (
    <section className="grid grid-cols-8 grid-rows-20 gap-2 overflow-hidden">
      {galleryData.map((item) => (
        <Image {...item} />
      ))}
    </section>
  );
}
