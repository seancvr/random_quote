import { JSX } from "react";
import RandomQuote from "./component";

export default async function Page(): Promise<JSX.Element> {
  return (
    <div>
      <RandomQuote />
    </div>
  );
}
          