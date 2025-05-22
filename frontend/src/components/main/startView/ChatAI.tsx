import { FormEvent, useState } from "react";
import { generateAIResponse } from "../../../api/aiResponse";

const ChatAI = () => {
  const [aiRequest, setAiRequest] = useState("");
  const [aiResponse, setAiResponse] = useState();
  const [inputValue, setInputValue] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputValue) return;
    setAiRequest(inputValue);
    setInputValue("");
    const response = await generateAIResponse(aiRequest);
    setAiResponse(response.message);
  };

  return (
    <div className="chatBox">
      <form
        onSubmit={onSubmit}
        className={`chatForm ${aiResponse ? "expanded" : "collapsed"}`}
      >
        <input
          type="text"
          placeholder="Practice before the game..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className="chatInput"
        />
        {aiResponse && <p className="aiResponse">{aiResponse}</p>}
      </form>
    </div>
  );
};

export default ChatAI;
