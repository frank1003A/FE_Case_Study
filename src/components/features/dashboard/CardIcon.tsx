import { css } from "../../../../styled-system/css";
import IconButton from "../../buttons/IconButton";

interface CardIconProps {
  src: string;
  bgColor: string;
}
const CardIcon = ({ src, bgColor }: CardIconProps) => {
  return (
    <IconButton
      className={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px",
        w: "36px",
        h: "36px",
        borderRadius: "8px",
        bgColor: bgColor ? bgColor : "rgba(85, 112, 241, 0.12)",
      })}
      src={src}
    />
  );
};

export default CardIcon;
