import Card from "@/components/card/Card";
import BarChartComponent from "@/components/charts/BarChart";
import PieChartComponent from "@/components/charts/PieChart";
import CardIcon from "@/components/features/dashboard/CardIcon";
import CardMenu from "@/components/features/dashboard/CardMenu";
import CardValue from "@/components/features/dashboard/CardValue";
import Order from "@/components/order/Order";
import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <div
      className={css({
        display: {
          lgTo2xl: "grid",
          mdDown: "flex",
        },
        width: {
          mdDown: "100vw",
        },
        flexDir: {
          mdDown: "column",
        },
        gridTemplateColumns: {
          lgTo2xl: "3",
          mdDown: "100%",
        },
        gridTemplateRows: {
          lgTo2xl: "min-content",
          mdDown: "1fr",
        },
        columnGap: "20px",
        rowGap: "2.5rem",
        padding: "40px 20px",
      })}
    >
      <Card>
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            alignSelf: "stretch",
          })}
        >
          <CardIcon
            src="/assets/dashboard/graph.svg"
            bgColor="rgba(85, 112, 241, 0.12)"
          />
          <CardMenu options={[{ title: "This week", value: "c+w" }]} />
        </div>
        <div
          className={css({
            w: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          })}
        >
          <CardValue title="Sales" value="₦4,000,000.00" noPercentage />
          <CardValue title="Volume" value="450" percentage="+20.00%" />
        </div>
      </Card>

      <Card>
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            alignSelf: "stretch",
          })}
        >
          <CardIcon
            src="/assets/dashboard/user.svg"
            bgColor="rgba(255, 204, 145, 0.16)"
          />
          <CardMenu options={[{ title: "This week", value: "c+w" }]} />
        </div>
        <div
          className={css({
            w: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          })}
        >
          <CardValue title="Customers" value="1,250" percentage="+15.80%" />
          <CardValue title="Active" value="1,180" percentage="85%" />
        </div>
      </Card>

      <Card>
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            alignSelf: "stretch",
          })}
        >
          <CardIcon
            src="/assets/dashboard/bag.svg"
            bgColor="rgba(255, 204, 145, 0.16)"
          />
          <CardMenu options={[{ title: "This week", value: "c+w" }]} />
        </div>
        <div
          className={css({
            w: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          })}
        >
          <CardValue title="All Orders" value="450" noPercentage />
          <CardValue title="Pending" value="5" noPercentage />
          <CardValue title="Completed" value="445" noPercentage />
        </div>
      </Card>

      {/**Marketing Card */}
      <Card gridRow={"2"}>
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            alignSelf: "stretch",
          })}
        >
          <h2>Marketing</h2>
          <CardMenu options={[{ title: "This week", value: "c+w" }]} />
        </div>
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            w: "100%",
          })}
        >
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "10px",
            })}
          >
            <div
              className={css({
                h: "10px",
                w: "10px",
                borderRadius: "100%",
                bgColor: "#5570F1",
              })}
            ></div>
            <span>Active</span>
          </div>
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "10px",
            })}
          >
            <div
              className={css({
                h: "10px",
                w: "10px",
                borderRadius: "100%",
                bgColor: "#97A5EB",
              })}
            ></div>
            <span>Purchase</span>
          </div>
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "10px",
            })}
          >
            <div
              className={css({
                h: "10px",
                w: "10px",
                borderRadius: "100%",
                bgColor: "#FFCC91",
              })}
            ></div>
            <span>Retention</span>
          </div>
        </div>
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            w: "100%",
            h: "100%",
          })}
        >
          <PieChartComponent />
        </div>
      </Card>

      <div
        className={css({
          gridRow: "2",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            gap: {
              mdDown: "20px",
            },
          })}
        >
          <Card bgColor="primary">
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                alignSelf: "stretch",
              })}
            >
              <CardIcon
                src="/assets/dashboard/folder.svg"
                bgColor="rgba(255, 255, 255, 0.16)"
              />
            </div>

            <div
              className={css({
                w: "100%",
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              })}
            >
              <CardValue
                title="All Products"
                value="45"
                overrideColor="white"
                noPercentage
              />
              <CardValue
                title="Active"
                value="32"
                percentage="+24%"
                overrideColor="white"
              />
            </div>
          </Card>
          <Card>
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                alignSelf: "stretch",
              })}
            >
              <CardIcon
                src="/assets/dashboard/cart.svg"
                bgColor="rgba(255, 204, 145, 0.16)"
              />
              <CardMenu options={[{ title: "This week", value: "c+w" }]} />
            </div>
            <div
              className={css({
                w: "100%",
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              })}
            >
              <CardValue
                title="Abandoned Cart"
                value="20%"
                percentage="+0.00%"
              />
              <CardValue title="Customers" value="30" noPercentage />
            </div>
          </Card>
        </div>
      </div>

      <Card gridRow={"4"}>
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            alignSelf: "stretch",
          })}
        >
          <h2>Orders</h2>
        </div>
        <div
          className={css({
            display: "flex",
            flexDir: "column",
          })}
        >
          <Order
            date="12 Sept 2022"
            status="pending"
            item={{
              name: "iPhone 13",
              amt: "₦730,000.00 x 1",
              img: "/assets/users/iphone.png",
            }}
          />
          <Order
            date="12 Sept 2022"
            status="complete"
            item={{
              name: "iPhone 13",
              amt: "₦730,000.00 x 1",
              img: "/assets/users/iphone.png",
            }}
          />
          <Order
            date="12 Sept 2022"
            status="pending"
            item={{
              name: "iPhone 13",
              amt: "₦730,000.00 x 1",
              img: "/assets/users/iphone.png",
            }}
          />
          <Order
            date="12 Sept 2022"
            status="complete"
            item={{
              name: "iPhone 13",
              amt: "₦730,000.00 x 1",
              img: "/assets/users/iphone.png",
            }}
          />
          <Order
            date="12 Sept 2022"
            status="pending"
            item={{
              name: "iPhone 13",
              amt: "₦730,000.00 x 1",
              img: "/assets/users/iphone.png",
            }}
          />
          <Order
            date="12 Sept 2022"
            status="complete"
            item={{
              name: "iPhone 13",
              amt: "₦730,000.00 x 1",
              img: "/assets/users/iphone.png",
            }}
          />
          <Order
            date="12 Sept 2022"
            status="pending"
            item={{
              name: "iPhone 13",
              amt: "₦730,000.00 x 1",
              img: "/assets/users/iphone.png",
            }}
          />
          <Order
            date="12 Sept 2022"
            status="complete"
            item={{
              name: "iPhone 13",
              amt: "₦730,000.00 x 1",
              img: "/assets/users/iphone.png",
            }}
          />
          <Order
            date="12 Sept 2022"
            status="pending"
            item={{
              name: "iPhone 13",
              amt: "₦730,000.00 x 1",
              img: "/assets/users/iphone.png",
            }}
          />
        </div>
      </Card>
      <Card gridColumn={"2"} gridRow={"2"}>
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            alignSelf: "stretch",
          })}
        >
          <h2>Summary</h2>
          <CardMenu options={[{ title: "This week", value: "c+w" }]} />
        </div>
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            w: "100%",
            h: "100%",
            overflowX: "auto",
            fontSize: "11px",
            fontWeight: "400",
            fontStyle: "normal",
            color: "#BEC0CA",
          })}
        >
          <BarChartComponent />
        </div>
      </Card>
    </div>
  );
}
