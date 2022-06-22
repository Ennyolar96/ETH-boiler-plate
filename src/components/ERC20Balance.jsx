import { useEffect } from "react";
import { useMoralis, useERC20Balances } from "react-moralis";
import { Skeleton, Table } from "antd";
// import { getExplorer, getWrappedNative, getChainById } from "../../src/helpers/networks";
// import { getEllipsisTxt } from "../helpers/formatters";
import TokenPrice from "components/TokenPrice";
// import Chains from "./Chains";
import { useERC20Balance } from "hooks/useERC20Balance";
// import NativeBalance from "./NativeBalance";
import { Link } from "react-router-dom";
import classes from "./Style.module.css";



const chainIds = {
  "0x1": "eth",
  "0x38": "bsc",
  "0x89": "polygon",
};

const getChainIdByName = (chainName) => {
  for (let chainId in chainIds) {
    if (chainIds[chainId] === chainName) return chainId;
  }
};

function ERC20Balance(props) {
  const { data: assets } = useERC20Balances(props);
  const { ERC20Balance, chainId } = useERC20Balance();
  const { Moralis } = useMoralis();
  console.log(assets)
  useEffect(() => {
    // console.log(ERC20Balance);
  }, [ERC20Balance]);

  const columns = [
    {
      title: "Token",
      dataIndex: "name",
      key: "name",
      render: (name) => name,
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
      render: (symbol) => symbol,
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      render: (value, item) =>
        parseFloat(Moralis?.Units?.FromWei(value, item.decimals)).toFixed(6),
    },
    {
      title: "Price(USD | BNB)",
      dataIndex: "token_address",
      key: "token_address",
      render: (address) => <TokenPrice
        address={address}
        chain="bsc"
        size="40px"
      />
    },
    {
      title: "Contract",
      dataIndex: "token_address",
      key: "token_address",
      render: (address) => (
        <a
          href={
            chainId === "0x1"
              ? `https://etherscan.io/address/${address}`
              : chainId === "0x38"
                ? `https://bscscan.com/address/${address}`
                : chainId === "0x4"
                  ? `https://rinkeby.etherscan.io/address/${address}`
                  : `https://blockscan.com/address/${address}`
          }
          target="_blank"
          rel="noreferrer"
        >
          View Contract
        </a>
      ),
    },
  ];

  return (
    <div className="container-fluid">
      <div className={classes.BalContainer}>
        <div className={classes.bal_btn_container}>
          <Link to="swap" className={classes.btn}> Trade</Link>
          <Link to="transfer" className={classes.btn}> Transfer </Link>
        </div>
        <div className="table-responsive">
          <div className={classes.balance20}>
            <Skeleton loading={!assets}>
              <Table
                dataSource={assets}
                columns={columns}
                rowKey={(record) => {
                  return record.token_address;
                }}
              />
            </Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ERC20Balance;
