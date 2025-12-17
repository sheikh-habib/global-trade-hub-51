import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

fetch("https://c-repository.vercel.app/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        buyerName: "ABC Traders",
        product: "Steel Pipes",
        quantity: 500,
        price: 12000
    })
})
.then(res => res.text())
.then(data => alert(data));

