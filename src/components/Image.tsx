import type { CSSProperties } from "react";

type ImageProps = {
  src: string;
  row: number;
  col: number;
};

const Image: React.FC<ImageProps> = ({ src, row, col }) => {
  return (
    <div className="grid__item shadow-md col-span-1 row-span-1" style={{ "--r": row, "--c": col } as CSSProperties}>
      <img src={`/assets/img/${src}`} />
    </div>
  );
};

export default Image;
