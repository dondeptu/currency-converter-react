import "./style.css";

const Form = () => {


    return (
        <form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Przelicz z:</legend>
                <p className="form__paragraph">
                    <label>
                        <span className="form__labelText"> Waluta: </span>
                        <select name="convertFrom" className="form__field form__field--select">
                            <option value="pln">PLN (Polski Złoty)</option>
                            <option value="eur">EUR (Euro)</option>
                            <option value="gbp">GBP (Brytyjski Funt)</option>
                            <option value="usd">USD (Amerykański Dolar)</option>
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
                        <select name="convertTo" className="form__field form__field--select">
                            <option value="pln">PLN (Polski Złoty)</option>
                            <option value="eur" selected>EUR (Euro)</option>
                            <option value="gbp">GBP (Brytyjski Funt)</option>
                            <option value="usd">USD (Amerykański Dolar)</option>
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