import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {
    const apiURL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_96y5fmBcGQy5C9l1PPXzTTNz79InpVsP3o9IjVAn&currencies=EUR%2CUSD%2CGBP%2CCHF%2CAED%2CAUD%2CBGN%2CCAD%2CCNY%2CCZK%2CDKK%2CHKD%2CHUF%2CILS%2CJPY%2CMXN%2CNOK%2CNZD%2CRON%2CRSD%2CSEK%2CSGD%2CTHB%2CTRY%2CZAR&base_currency=PLN";
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const fetchApiData = async () => {
            try {
                const response = await axios.get(apiURL);

                setRatesData({
                    status: "success",
                    date: response.data.meta.last_updated_at,
                    rates: response.data.data,
                });
            } catch (error) {
                console.error(error);
                setRatesData({
                    status: "error",
                    date: null,
                });
            }
        }
        setTimeout(fetchApiData, 2000);
    }, []);

    return ratesData;
};