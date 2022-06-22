import React from 'react';
// import { getEllipsisTxt } from "../../helpers/formatters";
// import { getExplorer } from "../../helpers/networks";
import { useERC20Transfers } from "hooks/useERC20Transfers";

const DashboardRecent = () => {
    const { ERC20Transfers, chainId } = useERC20Transfers();

    let token1;
    let from1;
    let to1;
    let coin_value1;

    let token2;
    let from2;
    let to2;
    let coin_value2;

    let token3;
    let from3;
    let to3;
    let coin_value3;

    for (const prop in ERC20Transfers) {
        let token_this1 = ERC20Transfers[0].address;
        token1 = token_this1.substring(0, 7);

        let this_from1 = ERC20Transfers[0].from_address
        from1 = this_from1.substring(0, 7);

        let this_to = ERC20Transfers[0].to_address;
        to1 = this_to.substring(0, 7);

        let this_coin_value1 = ERC20Transfers[0].value;
        coin_value1 = this_coin_value1.substring(0, 7);

        // ...............................................................
        // ...............................................................

        let token_this2 = ERC20Transfers[1].address;
        token2 = token_this2.substring(0, 7);

        let this_from2 = ERC20Transfers[1].from_address
        from2 = this_from2.substring(0, 7);

        let this_to2 = ERC20Transfers[1].to_address;
        to2 = this_to2.substring(0, 7);

        let this_coin_value2 = ERC20Transfers[1].value;
        coin_value2 = this_coin_value2.substring(0, 7);

        // ...............................................................
        // ...............................................................

        let token_this3 = ERC20Transfers[2].address;
        token3 = token_this3.substring(0, 7);

        let this_from3 = ERC20Transfers[2].from_address
        from3 = this_from3.substring(0, 7);

        let this_to3 = ERC20Transfers[2].to_address;
        to3 = this_to3.substring(0, 7);

        let this_coin_value3 = ERC20Transfers[2].value;
        coin_value3 = this_coin_value3.substring(0, 7);
    }

    return (
        <div className='table-responsive'>
            <table className='table text-white'>
                <thead>
                    <th>Token</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Value</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{token1}</td>
                        <td>{from1}</td>
                        <td>{to1}</td>
                        <td>{coin_value1}</td>
                    </tr>
                    <tr>
                        <td>{token2}</td>
                        <td>{from2}</td>
                        <td>{to2}</td>
                        <td>{coin_value2}</td>
                    </tr>
                    <tr>
                        <td>{token3}</td>
                        <td>{from3}</td>
                        <td>{to3}</td>
                        <td>{coin_value3}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DashboardRecent