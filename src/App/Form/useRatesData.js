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
        setTimeout(fetchApiData, 1000);
    }, []);

    return ratesData;
};