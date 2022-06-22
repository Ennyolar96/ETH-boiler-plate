import React from 'react';
import { useMoralis, useNativeBalance } from "react-moralis";
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';
import classes from './Style.module.css';

const ChartDisplay = (props) => {
    const { data: balance } = useNativeBalance(props);
    const { account, isAuthenticated } = useMoralis();
    let totalBal = balance.formatted;
    let usdBalance = parseFloat(totalBal) * 215.62;
    let UsdTotal = usdBalance.toFixed(2);
    let UsdTotal_1 = usdBalance.toFixed(0);
    let UsdTotal_2 = usdBalance.toFixed(3);
    let UsdTotal_3 = usdBalance.toFixed(2);
    let UsdTotal_4 = usdBalance.toFixed(1);
    let UsdTotal_5 = usdBalance.toFixed(0);

    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let getdate = new Date();
    const get_month = monthName[getdate.getMonth()];
    const get_date = getdate.getDate();
    console.log(get_month + (get_date - 1))

    const data = [
        { x: get_month + (get_date - 5), y: UsdTotal },
        { x: get_month + (get_date - 4), y: UsdTotal_1 },
        { x: get_month + (get_date - 3), y: UsdTotal_2 },
        { x: get_month + (get_date - 2), y: UsdTotal_3 },
        { x: get_month + (get_date - 1), y: UsdTotal_4 },
        { x: get_month + get_date, y: UsdTotal_5 }
    ];

    if (!account || !isAuthenticated) return null;
    return (
        // style={{ textAlign: "center", whiteSpace: "nowrap", color: "#262626" }}
        <div className={classes.innerChart}>
            <VictoryChart>
                <VictoryAxis tickFormat={(y) => y}
                    style={{
                        axis: { stroke: 'white' },
                        tickLabels: {
                            fill: 'white'
                        },
                        // grid: {
                        //     stroke: 'white',
                        //     strokeDasharray: '2',
                        // }
                    }}
                />
                <VictoryLine
                    interpolation="cardinal"
                    data={data} style={{
                        data: {
                            fill: '#f67803',
                            fillOpacity: '0.7',
                            stroke: '#ff0000;',
                            strokeWidth: 1
                        }
                    }} />
            </VictoryChart>
        </div>
    );
}

export default ChartDisplay