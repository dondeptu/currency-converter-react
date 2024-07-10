import { useState } from "react";
import { currenciesRate } from "./currenciesRate";
import Form from "./Form";
import "./App.css";

function App() {
    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = currenciesRate.find(({ shortName }) => shortName === currency).rate;

        setResult({
            inputAmount: amount,
            currency,
            getResult: amount / rate,
        });
    };

    return (
        <div className="app">
            <header>
                <h1 className="app__header">Kalkulator walut</h1>
            </header>
            <main>
                <Form result={result} calculateResult={calculateResult} />
            </main>
        </div>
    );
}

export default App;