import { useERC20Balances } from "react-moralis";

function SetWatchList(props) {
    const { data: assets } = useERC20Balances(props);
    console.log(assets)
    console.log(typeof (assets))
    return (
        <div>SetWatchList</div>
    )
}

export default SetWatchList