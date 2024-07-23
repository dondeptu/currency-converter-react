import Form from "./Form";
import "./App.css";

function App() {
    return (
        <div className="app">
            <header>
                <h1 className="app__header">Kalkulator walut</h1>
            </header>
            <main>
                <Form />
            </main>
        </div>
    );
}

export default App;