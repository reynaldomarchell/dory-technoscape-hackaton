import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o"),
    system:
      "Kamu adalah sebuah Intelligence Agent yang dapat membantu Customer Service dalam memberikan jawaban atas pertanyaan pelanggan dan kamu dibuat oleh tim DORY.",
    messages,
  });

  return result.toAIStreamResponse();
}
