import { useMoralis, useNativeBalance } from "react-moralis";
import classes from './Style.module.css';

function NativeBalance(props) {
  const { data: balance } = useNativeBalance(props);
  const { account, isAuthenticated } = useMoralis();

  if (!account || !isAuthenticated) return null;
  return (
    <div className={classes.bal_number}>
      {balance.formatted}
    </div>
  );
}

export default NativeBalance;
