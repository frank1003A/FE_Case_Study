import { css } from "../../../../styled-system/css";

interface CardValueProps {
  title: string;
  value: string;
  percentage?: string;
  noPercentage?: boolean;
  overrideColor?: string;
}
const CardValue = ({
  title,
  value,
  percentage,
  noPercentage,
  overrideColor,
}: CardValueProps) => {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flex: "1 0 0",
        gap: "8px",
        w: "fit-content",
      })}
    >
      <span
        className={css({
          fontSize: "14px",
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "normal",
          alignItems: "center",
          color: overrideColor ? overrideColor : "#8B8D97",
        })}
      >
        {title}
      </span>
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          gap: "2px",
        })}
      >
        <span
          className={css({
            fontSize: "20px",
            fontWeight: "500",
            fontStyle: "normal",
            lineHeight: "normal",
            alignItems: "center",
            color: overrideColor ? overrideColor : "#45464E",
          })}
        >
          {value}
        </span>
        {noPercentage ? (
          ""
        ) : (
          <span
            className={css({
              fontSize: "12px",
              fontWeight: "400",
              fontStyle: "normal",
              lineHeight: "normal",
              alignItems: "center",
              color: overrideColor ? overrideColor : "#519C66",
            })}
          >
            {percentage}
          </span>
        )}
      </div>
    </div>
  );
};

export default CardValue;
