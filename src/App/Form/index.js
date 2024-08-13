import { useState } from "react";
import Result from "./Result";
import { Button, ErrorStatus, Field, FieldSelect, Fieldset, Grid, Legend, LoadingStatus, Paragraph, StyledForm } from "./styled";
import { useRatesData } from "./useRatesData";
import { RatesUpdatedTime } from "./RatesUpdatedTime";
import { LoadingAnimation } from "./LoadingAnimation";

const Form = () => {
    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null);
    const ratesData = useRatesData();

    console.log(ratesData);

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency].value;

        setResult(amount / rate);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        ratesData.status === "loading" ? (
            <LoadingStatus>
                Zaczekaj chwilę.<br /> Ładuję aktualne kursy walut...
                <LoadingAnimation />
            </LoadingStatus>)
            : ratesData.status === "error" ? (
                <ErrorStatus>
                    Coś poszło nie tak!
                </ErrorStatus>)
                : (
                    <StyledForm onSubmit={onSubmit}>
                        <Fieldset>
                            <Legend>Zamień na złotówki:</Legend>
                            <Paragraph>
                                <Grid>
                                    <span> Waluta: </span>
                                    <FieldSelect
                                        onChange={({ target }) => setCurrency(target.value)}
                                        name="convertFrom"
                                        value={currency}
                                    >
                                        {!!ratesData.rates && Object.keys(ratesData.rates).map(currency => (
                                            <option key={currency} value={currency}>
                                                {currency}
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
                            <Paragraph>
                                <Button>Przelicz</Button>
                            </Paragraph>
                            <Paragraph>
                                <RatesUpdatedTime ratesData={ratesData} />
                            </Paragraph>
                        </Fieldset>
                        <Result result={result} />
                    </StyledForm>
                )
    );
};

export default Form;