 "use client";
import { JSX, useState, useEffect } from "react";

export default function RandomQuote(): JSX.Element {

  const [quote, setQuote] = useState<ApiReturnData>({
    content: "No quote yet...",
    author: "",
  });

  const [loading, setLoading] = useState(false);
  const [trigger, setTrigger] = useState(0);

  async function fetchQuote(): Promise<void> {
    setLoading(true);
    
    try {
      const response = await fetch("/api/quote");
      const data = await (response.json()) as ApiReturnData;
      setQuote({
        // Nullish coalescing operator (??)
        // => if data.content == null || undefined, use right hand side
        content: data.content ?? "No quote found.",
        author: data.author ?? "",
      });
    } catch {
      console.error("Error fetching quote:");
      setQuote({
        content: "Error fetching quote",
        author: "",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchQuote(); }, [trigger])

  return (
    <div>
      <button
        className="btn" 
        onClick={() => setTrigger(trigger + 1)}>
        Fetch new quote
      </button>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
        <blockquote>
          {quote.content}
          <footer>{quote.author}</footer>
        </blockquote>
        )}
      </div>
    </div>
  );
}
