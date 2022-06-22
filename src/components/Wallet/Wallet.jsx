import Transfer from "./components/Transfer";
import NativeBalance from "../NativeBalance";
import Address from "../Address/Address";
import Blockie from "../Blockie";
import { Card } from "antd";
import styles from "../../components/Style.module.css"

function Wallet() {
  return (
    <div className="container mb-5">
      <Card
        className={styles.transfer_card}
        title={
          <div className={styles.header}>
            <Blockie scale={5} avatar currentWallet style />
            <Address size="6" copyable />
            <NativeBalance />
          </div>
        }>

        <Transfer />

      </Card>
    </div>
  );
}

export default Wallet;
