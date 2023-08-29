import { createRoot } from "react-dom/client";
import Hello from "./Hello";

const container = document.getElementById("root")! as HTMLDivElement;
const root = createRoot(container);
root.render(<Hello />);