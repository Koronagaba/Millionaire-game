import { FormEvent, useState } from "react";
import { generateAIResponse } from "../../../api/aiResponse";
import chat from "../../../assets/icons/chat.png";

const ChatAI = () => {
  const [aiRequest, setAiRequest] = useState("");
  const [aiResponse, setAiResponse] = useState();
  const [inputValue, setInputValue] = useState("");
  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChat = () => {
    setIsChatVisible((prev) => !prev);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputValue) return;
    setAiRequest(inputValue);
    setInputValue("");
    const response = await generateAIResponse(aiRequest);
    setAiResponse(response.message);
  };

  return (
    <div className="chatContainer">
      {isChatVisible ? (
        <div className="chatBox">
          <button className="close-chat" onClick={toggleChat}>
            ×
          </button>
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
      ) : (
        <img
          className="chat-img"
          src={chat}
          alt="Open chat"
          onClick={toggleChat}
        />
      )}
    </div>
  );
};

export default ChatAI;
