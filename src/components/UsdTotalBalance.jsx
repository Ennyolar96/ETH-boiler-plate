import { BgColorsOutlined } from "@ant-design/icons";
import { useMoralis, useNativeBalance } from "react-moralis";
import classes from './Style.module.css';

function UsdTotalBalance(props) {
    const { data: balance } = useNativeBalance(props);
    const { account, isAuthenticated } = useMoralis();
    let totalBal = balance.formatted;
    let usdBalance = parseFloat(totalBal) * 215.62;
    let UsdTotal = usdBalance.toFixed(3) + " USD"
    console.log(UsdTotal)

    if (!account || !isAuthenticated) return null;
    return (
        <div className={classes.bal_number}>
            {UsdTotal}
        </div>
    );
}

export default UsdTotalBalance