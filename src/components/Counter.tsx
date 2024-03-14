import { useEffect, useState } from "react";
import Display from "./Display";

export default function Counter(props: {
    readonly initialValue?: number;
}) {
    const {initialValue = 0} = props;
    // Definizione di uno stato, di tipo number, 
    // inizializzato a 0
    const [contatore, setContatore] = useState(initialValue);
    console.log("Counter()", contatore);
    //funzione che vuole in ingresso 2 parametri, il primo è il comportamento che avviene durante il cambio (effetto)
    //il secondo parametro si chiama deps (lista delle dipendenze), si crea un array con le variabili
    //di cui vogliamo monitorare il cambiamento, invocando la funzione nello useEffect
    //quando almeno una delle variabili elencate nella lista delle dipendenze, allora viene invocato l'effetto

    useEffect(()=>{
        console.log("useEffect in azione", initialValue);
        setContatore(initialValue);
        return () => {
            console.log("useEffect unmount")
        }
    },[initialValue])

    return <>
        <Display n={contatore} color="blue" />
        <button onClick={() => {
            setContatore(contatore + 1);
            console.log("click!, contatore:", contatore);
        }}>premi</button>
        {contatore > 5 && <div>attenzione! maggiore di 5</div>}
    </>
}