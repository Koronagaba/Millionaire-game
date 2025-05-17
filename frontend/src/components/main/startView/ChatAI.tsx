import { FormEvent, useState } from "react";
import { generateAIResponse } from "../../../api/aiResponse";

const ChatAI = () => {
  const [aiRequest, setAiRequest] = useState("");
  const [aiResponse, setAiResponse] = useState();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await generateAIResponse("say hello");
    console.log(response.message);

    setAiResponse(response.message);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Practice before the game..."
          value={aiRequest}
          onChange={(event) => setAiRequest(event.target.value)}
        />
      </form>
    </div>
  );
};

export default ChatAI;
