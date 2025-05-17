import { FormEvent, useState } from "react";
import { generateAIResponse } from "../../../api/aiResponse";

const ChatAI = () => {
  const [aiRequest, setAiRequest] = useState("");
  const [aiResponse, setAiResponse] = useState();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await generateAIResponse(aiRequest);
    console.log(response.message);

    setAiResponse(response.message);
  };

  return (
    <div className="chatBox">
      <form onSubmit={onSubmit} className="chatForm">
        <input
          type="text"
          placeholder="Practice before the game..."
          value={aiRequest}
          onChange={(event) => setAiRequest(event.target.value)}
          className="chatInput"
        />
        {aiResponse && <p className="aiResponse">{aiResponse}</p>}
      </form>
    </div>
  );
};

export default ChatAI;
