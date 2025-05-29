import type { Metadata } from "next";
import "./globals.css";
import { JSX } from "react";

export const metadata: Metadata = {
  title: "Random quote",
  description: "Example of a nextjs app that fetches a random quote from an API",
};

export default function RootLayout(props: Readonly<{children: React.ReactNode;}>): JSX.Element {
  return (
    <html lang="en">
      <body>
        <main>
          <h1 className="mb-5">Random Quote</h1>         
          {props.children}
        </main>
      </body>
    </html>
  );
}
