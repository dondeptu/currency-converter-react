import { useState } from "react";
import { currenciesRate } from "../currenciesRate";
import Result from "./Result";
import { Button, Field, FieldSelect, Fieldset, Grid, Legend, Paragraph, StyledForm } from "./styled";

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
        <StyledForm onSubmit={onSubmit}>
            <Fieldset>
                <Legend>Zamień na złotówki:</Legend>
                <Paragraph>
                    <Grid>
                        <span> Waluta: </span>
                        <FieldSelect
                            onChange={({ target }) => setCurrency(target.value)}
                            name="convertFrom"
                        >
                            {currenciesRate.map(currency => (
                                <option key={currency.shortName} value={currency.shortName}>
                                    {currency.name}
                                </option>
                            ))}
                        </FieldSelect>
                    </Grid>
                </Paragraph>
                <Paragraph>
                    <Grid>
                        <span> Kwota: </span>
                        <Field as="input"
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            type="number"
                            name="amountToConvert"
                            required
                            min="1"
                            step="any"
                            placeholder="1"
                            autoFocus
                        />
                    </Grid>
                </Paragraph>
            </Fieldset>
            <Button>Przelicz</Button>
            <Result result={result} />
        </StyledForm>
    );
};

export default Form;