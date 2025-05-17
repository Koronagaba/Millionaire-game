const baseURL = "http://localhost:4000";

export const generateAIResponse = async (request: string) => {
  const response = await fetch(`${baseURL}/api/ai-response`, {
    method: "POST",
    body: JSON.stringify({ prompt: request }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
