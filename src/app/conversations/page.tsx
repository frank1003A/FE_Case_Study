"use client";
import Button from "@/components/buttons/Button";
import SearchBar from "@/components/features/conversation/SearchBar";
import ChatCard from "@/components/features/conversation/cards/ChatCard";
import ConversationCard from "@/components/features/conversation/cards/ConversationCard";
import Chat from "@/components/features/conversation/chat/Chat";
import ChatBubble from "@/components/features/conversation/chat/ChatBubble";
import ChatControls from "@/components/features/conversation/chat/ChatControls";
import Chatheader from "@/components/features/conversation/chat/Chatheader";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "../../../styled-system/css";
//
import { useMediaQuery } from "@/hook/useMediaQuery";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

export default function Conversations() {
  //
  const media = useMediaQuery("lg");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    if (media) {
      setIsOpen((prevState) => !prevState);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (!media && isOpen) {
      setIsOpen(false);
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, media]);

  return (
    <div
      className={css({
        padding: "10px 16px",
        height: "100%",
        display: "flex",
        flexDir: "column",
        gap: "1rem",
        justifyContent: "space-around",
      })}
    >
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        })}
      >
        <h2>Conversations with Customers</h2>
        <div
          className={css({
            hideBelow: "md",
          })}
        >
          <Button>New Message</Button>
        </div>
        {/** Mobile Button */}
        <div
          className={css({
            hideFrom: "lg",
          })}
        >
          <Button>
            <FontAwesomeIcon icon={faComment} />
          </Button>
        </div>
      </div>
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: {
            mdTo2xl: "400px 1fr",
            mdDown: "1fr",
          },
          gridTemplateRows: "auto",
          gap: "20px",
          flex: "1 0 0",
          maxH: "460px",
          h: "100%",
        })}
      >
        <ConversationCard>
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              w: "100%",
              p: "0px 16px",
            })}
          >
            <h2>Contacts</h2>
            <span>34</span>
          </div>
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              w: "100%",
              p: "0px 16px",
            })}
          >
            <SearchBar />
          </div>
          <div
            className={css({
              display: "flex",
              flexDir: "column",
              width: "100%",
              overflowX: "hidden",
              overflowY: "auto",
            })}
          >
            <Chat
              active
              onClick={toggleDrawer}
              now
              user={{
                avatar: "/assets/users/janedoe.png",
                name: "Jane Doe",
                message:
                  "Hi, i would like to make inquiries about your product",
              }}
            />
            <Chat
              now
              user={{
                avatar: "/assets/users/janethade.png",
                name: "Janeth Adekunle",
                message:
                  "Hi, i made an order and haven't recieved  after 2 days",
              }}
            />
            <Chat
              now
              user={{
                avatar: "/assets/users/kunleade.png",
                name: "Kunle Adekunle",
                message:
                  "Hi, i made an order and haven't recieved  after 2 days",
              }}
            />
            <Chat
              hasBadge
              badgeValue={2}
              user={{
                avatar: "/assets/users/janethade.png",
                name: "Janeth Adekunle",
                message:
                  "Hi, i made an order and haven't recieved  after 2 days",
              }}
            />
            <Chat
              hasBadge
              badgeValue={5}
              user={{
                avatar: "/assets/users/kunleade.png",
                name: "Kunle Adekunle",
                message:
                  "Hi, i made an order and haven't recieved  after 2 days",
              }}
            />
            <Chat
              user={{
                avatar: "/assets/users/janethade.png",
                name: "Janeth Adekunle",
                message:
                  "Hi, i made an order and haven't recieved  after 2 days",
              }}
            />
            <Chat
              user={{
                avatar: "/assets/users/kunleade.png",
                name: "Kunle Adekunle",
                message:
                  "Hi, i made an order and haven't recieved  after 2 days",
              }}
            />
          </div>
        </ConversationCard>
        <ChatCard hideBelow="md">
          <Chatheader
            user={{
              name: "Jane Doe",
              image: "/assets/users/janedoe.png",
              time: "12:55 am",
            }}
          />
          {/** Chats Container */}
          <div
            className={css({
              w: "100%",
              h: "100%",
              overflowX: "hidden",
              overflowY: "auto",
              pos: "relative",
              padding: "0px 21px",
              display: "flex",
              flexDir: "column",
              gap: ".5rem",
            })}
          >
            {/** Chat Date */}
            <div
              className={css({
                w: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: "8px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  p: "8px 12px",
                  bgColor: "#F4F5FA",
                  color: "#1C1D22",
                  borderRadius: "8px",
                })}
              >
                12 August 2022
              </div>
            </div>

            {/**Chats */}
            <ChatBubble
              time="12:55 am"
              variant="customer"
              content="Hello, I want to make enquiries about your product"
              item={{
                name: "iPhone 13",
                amt: "₦730,000.00",
                inStock: "12",
                img: "/assets/users/iphone.png",
              }}
            />
            <ChatBubble
              time="12:55 am"
              variant="cca"
              content="Hello Janet, thank you for reaching out"
            />
            <ChatBubble
              time="12:55 am"
              variant="cca"
              content="What do you need to know?"
            />

            {/** Chat Date */}
            <div
              className={css({
                w: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: "8px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  p: "8px 12px",
                  bgColor: "#F4F5FA",
                  color: "#1C1D22",
                  borderRadius: "8px",
                })}
              >
                Today
              </div>
            </div>

            <ChatBubble
              time="12:55 am"
              variant="customer"
              content="I want to know if the price is negotiable, i need 
              about 2 Units"
            />
          </div>
          <ChatControls />
        </ChatCard>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        size={"100%"}
        style={{
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <div
          className={css({
            pos: "absolute",
            top: "20px",
            right: "20px",
            border: "1px solid #555",
            borderRadius: "100%",
            p: "8px",
            height: "20px",
            w: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          })}
          onClick={toggleDrawer}
        >
          <FontAwesomeIcon icon={faClose} />
        </div>
        <ChatCard>
          <Chatheader
            user={{
              name: "Jane Doe",
              image: "/assets/users/janedoe.png",
              time: "12:55 am",
            }}
          />
          {/** Chats Container */}
          <div
            className={css({
              w: "100%",
              h: "100%",
              overflowX: "hidden",
              overflowY: "auto",
              pos: "relative",
              padding: "0px 21px",
              display: "flex",
              flexDir: "column",
              gap: ".5rem",
            })}
          >
            {/** Chat Date */}
            <div
              className={css({
                w: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: "8px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  p: "8px 12px",
                  bgColor: "#F4F5FA",
                  color: "#1C1D22",
                  borderRadius: "8px",
                })}
              >
                12 August 2022
              </div>
            </div>

            {/**Chats */}
            <ChatBubble
              time="12:55 am"
              variant="customer"
              content="Hello, I want to make enquiries about your product"
              item={{
                name: "iPhone 13",
                amt: "₦730,000.00",
                inStock: "12",
                img: "/assets/users/iphone.png",
              }}
            />
            <ChatBubble
              time="12:55 am"
              variant="cca"
              content="Hello Janet, thank you for reaching out"
            />
            <ChatBubble
              time="12:55 am"
              variant="cca"
              content="What do you need to know?"
            />

            {/** Chat Date */}
            <div
              className={css({
                w: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: "8px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  p: "8px 12px",
                  bgColor: "#F4F5FA",
                  color: "#1C1D22",
                  borderRadius: "8px",
                })}
              >
                Today
              </div>
            </div>

            <ChatBubble
              time="12:55 am"
              variant="customer"
              content="I want to know if the price is negotiable, i need 
              about 2 Units"
            />
          </div>
          <ChatControls />
        </ChatCard>
      </Drawer>
    </div>
  );
}
