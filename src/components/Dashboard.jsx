import React, { useMemo } from "react";
import { Card, Typography, Menu } from "antd";
import { useMoralis } from "react-moralis";
import ERC20Balance from "components/ERC20Balance";
import NFTBalance from "components/NFTBalance";
import NativeBalance from "./NativeBalance";
import classes from "./Style.module.css";
import UsdTotalBalance from "./UsdTotalBalance";
import ChartDisplay from "./ChartDisplay";
import DashboardRecent from "./DashboardRecent";

const { Text, Title } = Typography;

const Dashboard = () => {
  const { Moralis } = useMoralis();

  const isInchDex = useMemo(
    () => (Moralis.Plugins?.oneInch ? true : false),
    [Moralis.Plugins?.oneInch],
  );
  return (
    <>
      {/* <div>
        <Title className={classes.heading}>
          Dashboard
        </Title>
      </div> */}

      <div className="container-fluid">
        <div className="row">

          <div className=" col-lg-8 col-md-8 col-sm-12 col-12">
            <Card className={classes.card} title={
              <>
                <Menu className={classes.menuclass}>
                  <div className="row row-cols-sm-2 row-cols-1">
                    <div className="col">
                      <Menu.Item>
                        <Text strong className={classes.title}>Portfolio Balance:</Text>
                      </Menu.Item>
                    </div>
                    <div className="col">
                      <Menu.Item>
                        <NativeBalance />
                      </Menu.Item>
                    </div>
                  </div>
                </Menu>
                <Menu className={classes.menuclass}>
                  <div className="row row-cols-sm-2 row-cols-1">
                    <div className="col">
                      <Menu.Item>
                        <Text strong className={classes.title}>Total:</Text>
                      </Menu.Item>
                    </div>
                    <div className="col">
                      <Menu.Item>
                        <UsdTotalBalance />
                      </Menu.Item>
                    </div>
                  </div>
                </Menu>
              </>}>

              <div className="chart">
                <div>
                  <ChartDisplay />
                </div>
              </div>
            </Card>


            <Card
              className={classes.card}
              title={
                <>
                  <Text strong className={classes.title}>My assets</Text>
                </>
              }>
              <div style={{ margin: 0, }}>
                <ERC20Balance />
              </div>
            </Card>
          </div>
          {/* first card */}

          <div className=" col-lg-4 col-md-4 col-sm-12 col-12 secondCard">
            <Card
              className={classes.card}
              title={
                <>
                  <Text strong className={classes.title}>My NFTs</Text>
                </>
              }>
              <div>
                <NFTBalance />
              </div>
            </Card>


            {/* <Card
              className={classes.card}
              title={
                <>
                  <Text strong className={classes.title}>Watchlist</Text>
                </>
              }>

              <Text delete className={classes.text}> Clone or fork{" "}
                <a
                  href="https://github.com/ethereum-boilerplate/ethereum-boilerplate#-quick-start"
                  target="_blank"
                  rel="noopener noreferrer"> ethereum-boilerplate </a>{" "}
              </Text>

              <Text delete className={classes.text}>
                Install all dependencies: <Text code>npm install</Text>
              </Text>

              <Text className={classes.text}>
                Sign up for a free account on{" "}
                <a
                  href="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplate"
                  target="_blank"
                  rel="noopener noreferrer"> Moralis </a>
              </Text>

              <Text className={classes.text}>
                Create a Moralis Server (
                <a
                  href="https://docs.moralis.io/moralis-server/getting-started/create-a-moralis-server"
                  target="_blank"
                  rel="noopener noreferrer"> How to start Moralis Server </a> )
              </Text>

              <Text className={classes.text}>
                Rename <Text code>.env.example</Text> to <Text code>.env</Text>{" "}
                and provide your <Text strong>appId</Text> and{" "}
                <Text strong>serverUrl</Text> from{" "}
                <a
                  href="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplate"
                  target="_blank"
                  rel="noopener noreferrer"> Moralis </a>:
              </Text>

              <Text code style={{ display: "block" }}>
                REACT_APP_MORALIS_APPLICATION_ID = xxxxxxxxxxxx
              </Text>
              <Text code style={{ display: "block" }}>
                REACT_APP_MORALIS_SERVER_URL =
                https://xxxxxx.grandmoralis.com:2053/server
              </Text>

              <Text className={classes.text}>
                Stop the app and start it again <Text code>npm run start</Text>
              </Text>

              <Text className={classes.text}>
                Install{" "}
                <a
                  href="https://moralis.io/plugins/1inch/?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplate"
                  target="_blank"
                  rel="noopener noreferrer"> 1inch Moralis Plugin</a>{" "}
                needed for the<Text code>{"<InchDex />"}</Text> component (optional)
              </Text>

              <Text className={classes.text}>BUIDL!!!</Text>
            </Card> */}


            <Card className={classes.card}
              title={
                <>
                  <Text strong className={classes.title}>Recent activities</Text>
                </>}>
              <DashboardRecent />
            </Card>

          </div>
          {/* second card */}
        </div>
      </div >
    </>
  )
};

export default Dashboard;