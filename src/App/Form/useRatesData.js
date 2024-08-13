import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const fetchApiData = async () => {
            try {
                const response = await axios.get("data.json");

                setRatesData({
                    status: "success",
                    data: response.data.meta,
                    rates: response.data.data,
                });
            } catch (error) {
                console.error(error);
                setRatesData({
                    status: "error",
                    data: null,
                });
            }
        }
        setTimeout(fetchApiData, 1000);
    }, []);

    return ratesData;
};