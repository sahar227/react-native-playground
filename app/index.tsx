import { Link } from "expo-router";
import App from "../App";

export default function Page() {
  return (
    <>
      <Link className="p-10 text-red-500 bg-slate-200" href="/calculator">
        Calculator
      </Link>
      <App />
    </>
  );
}
