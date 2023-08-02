import {
  faFaceSmile,
  faPaperPlane,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "../../../../../styled-system/css";

const ChatControls = () => {
  return (
    <div
      className={css({
        display: "flex",
        w: "100%",
        bgColor: "white",
        padding: "8px",
      })}
    >
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          w: "100%",
          borderRadius: "8px",
          border: "1px solid #E1E2E9",
          padding: "8px",
          gap: "10px",
        })}
      >
        <button
          className={css({
            w: "32px",
            h: "32px",
            p: "4px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: "0",
            borderRadius: "8px",
            bgColor: "#FFF2E2",
            cursor: "pointer",
            fontSize: "16px",
            fontStyle: "normal",
            lineHeight: "normal",
            fontWeight: "400",
          })}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <input
          type="text"
          name="chat-message"
          id="chat-message"
          placeholder="Your message"
          className={css({
            fontSize: "16px",
            fontStyle: "normal",
            lineHeight: "normal",
            fontWeight: "400",
            outline: "none",
            w: "100%",
          })}
        />
        <button
          className={css({
            w: "24px",
            h: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "primary",
            cursor: "pointer",
            fontSize: "16px",
            fontStyle: "normal",
            lineHeight: "normal",
            fontWeight: "400",
          })}
        >
          <FontAwesomeIcon icon={faFaceSmile} />
        </button>
        <button
          className={css({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            w: "fit-content",
            p: "8px 16px",
            gap: "4px",
            borderRadius: "6px",
            bgColor: "#FFF2E2",
            cursor: "pointer",
            fontSize: "16px",
            fontStyle: "normal",
            lineHeight: "normal",
            fontWeight: "400",
          })}
        >
          Send
          <span>
            <FontAwesomeIcon icon={faPaperPlane} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ChatControls;
