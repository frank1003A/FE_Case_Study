import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { css } from "../../../../../styled-system/css";

interface ChatheaderProps {
  user: { name: string; image: string; time: string };
}
const Chatheader = ({ user }: ChatheaderProps) => {
  return (
    <div
      className={css({
        display: "flex",
        flexDir: {
          lgTo2xl: "row",
          mdDown: "column",
        },
        w: "100%",
        p: "16px 21px 15px 22px",
        justifyContent: "space-between",
        alignItems: {
          lgTo2xl: "center",
          mdDown: "flex-start",
        },
        borderBottom: "1px solid #F1F3F9",
      })}
    >
      <div
        className={css({
          display: "flex",
          gap: "1rem",
          h: "100%",
        })}
      >
        {/** Avatar */}
        <Image
          src={user.image}
          alt={`user_${user.image}`}
          width={80}
          height={80}
          className={css({
            borderRadius: "8px",
            width: "auto",
            height: "auto",
            maxH: {
              mdDown: "40px",
            },
          })}
        />

        {/** Details */}
        <div
          className={css({
            h: "100%",
            display: "flex",
            flexDir: "column",
            justifyContent: "space-between",
          })}
        >
          <span
            className={css({
              fontSize: "16px",
              fontWeight: "500",
              fontStyle: "normal",
              lineHeight: "normal",
              color: "#45464E",
              maxW: "150px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            })}
          >
            Jane Doe
          </span>

          <div
            className={css({
              display: "flex",
              flexDir: "column",
            })}
          >
            <div
              className={css({
                color: "primary",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              })}
            >
              <div
                className={css({
                  color: "primary",
                  display: "flex",
                  alignItems: "center",
                })}
              >
                <span
                  className={css({
                    w: "12px",
                    h: "12px",
                    flexShrink: "0",
                    border: "2px solid",
                    borderColor: "#F7F7FC",
                    bgColor: "primary",
                    borderRadius: "100%",
                  })}
                ></span>
                <span>Online</span>
              </div>
              <span
                className={css({
                  maxW: "100px",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  color: "#8B8D97",
                })}
              >
                {user.time}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={css({
          h: "100%",
          display: "flex",
          flexDir: {
            lgTo2xl: "column",
            mdDown: "row",
          },
          justifyContent: "space-between",
          gap: {
            mdDown: "1rem",
          },
          mt: {
            mdDown: "12px",
          },
        })}
      >
        <div className={css({ display: "flex", gap: "1rem" })}>
          <span
            className={css({
              display: "flex",
              alignItems: "center",
              p: "2px 7px",
              borderRadius: "8px",
              bgColor: "#FEF5EA",
              fontSize: "12px",
              fontWeight: "400",
              fontStyle: "normal",
              lineHeight: "normal",
            })}
          >
            New Customer
          </span>
          <span
            className={css({
              color: "primary",
            })}
          >
            View Profile
          </span>
        </div>
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            gap: "5px",
            color: "#8B8D97",
          })}
        >
          <FontAwesomeIcon icon={faCartShopping} />
          <span
            className={css({
              maxW: "100px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            })}
          >
            0 orders
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chatheader;
