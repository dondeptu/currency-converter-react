import { useState } from "react";
import { currenciesRate } from "../currencies";
import "./style.css";

const Form = () => {
    const [currency, setCurrency] = useState(currenciesRate[0].shortName);

    return (
        <form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Przelicz z:</legend>
                <p className="form__paragraph">
                    <label>
                        <span className="form__labelText"> Waluta: </span>
                        <select onChange={({ target }) => setCurrency(target.value)} name="convertFrom" className="form__field form__field--select">
                            {currenciesRate.map(currency => (
                                <option key={currency.shortName} value={currency.shortName}>
                                    {currency.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </p>
                <p className="form__paragraph">
                    <label>
                        <span className="form__labelText"> Kwota: </span>
                        <input type="number" name="amountToConvert" required min="1" step="any" placeholder="1"
                            autofocus className="form__field" />
                    </label>
                </p>
            </fieldset>
            <div className="form__buttons">
                <button className="form__button">Przelicz</button>
                <button className="form__button" type="button">Zamień</button>
            </div>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Przelicz na:</legend>
                <p className="form__paragraph">
                    <label>
                        <span className="form__labelText"> Waluta: </span>
                        <select onChange={({ target }) => setCurrency(target.value)} name="convertTo" className="form__field form__field--select">
                            {currenciesRate.map(currency => (
                                <option key={currency.shortName} value={currency.shortName}>
                                    {currency.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </p>
                <p className="form__paragraph">
                    <label>
                        <span className="form__labelText"> Kwota: </span>
                        <input name="amountAfterConvert" readonly className="form__field" />
                    </label>
                </p>
            </fieldset>
        </form>
    );
};

export default Form;