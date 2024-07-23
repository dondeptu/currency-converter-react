import { useState } from "react";
import { currenciesRate } from "../currenciesRate";
import "./style.css";
import Result from "./Result";

const Form = () => {
    const [currency, setCurrency] = useState(currenciesRate[0].shortName);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null);

    const calculateResult = (currency, amount) => {
        const rate = currenciesRate.find(({ shortName }) => shortName === currency).rate;

        setResult(amount * rate);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <form onSubmit={onSubmit} className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Zamień na złotówki:</legend>
                <p className="form__paragraph">
                    <label className="form__grid">
                        <span> Waluta: </span>
                        <select
                            onChange={({ target }) => setCurrency(target.value)}
                            name="convertFrom"
                            className="form__field form__field--select"
                        >
                            {currenciesRate.map(currency => (
                                <option key={currency.shortName} value={currency.shortName}>
                                    {currency.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </p>
                <p className="form__paragraph">
                    <label className="form__grid">
                        <span> Kwota: </span>
                        <input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            type="number"
                            name="amountToConvert"
                            required
                            min="1"
                            step="any"
                            placeholder="1"
                            autoFocus
                            className="form__field"
                        />
                    </label>
                </p>
            </fieldset>
            <button className="form__button">Przelicz</button>
            <Result result={result} />
        </form>
    );
};

export default Form;