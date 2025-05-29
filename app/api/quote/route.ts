// app/api/quote/route.ts

interface ZenQuoteApiResponse {
  q: string;
  a: string;
  h: string;
}

export async function GET(): Promise<Response> {
  let data: ZenQuoteApiResponse[];

  try {
    const response = await fetch("https://zenquotes.io/api/random/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
      // => execution jumps to the nearest catch block
    }
    data = (await response.json()) as ZenQuoteApiResponse[];;
    
  } catch {
    return Response.json(
      {
        content: "Error fetching quote",
        author: "",
      }, 
      {status: 500}
    );
  }

  // Catch edge case where data = []. Prevents crash at data[0].q
  if (!data.length) {
    return Response.json(
      {
        content: "No data returned from API",
        author: "",
      },
      {status: 502}
    );
  }

  return Response.json(
      {
        content: data[0].q,
        author: data[0].a,
      }
    );
}