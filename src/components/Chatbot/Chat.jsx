import { useState } from "react";
import { styled } from "styled-components";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";

const ChatStyled = styled.div`
  width: 452px;
  height: 479.86px;
  border: 3px solid #0c4ca3;
  border-radius: 17px;
  position: fixed;
  background-color: white;
  top: 30%;
  right: 9%;
  .title {
    background-color: #0c4ca3;
    color: white;
    border-radius: 10px;
    padding: 5px 20px;
  }
  .macdinh {
    background-color: #d9d9d9;
    width: 245px;
    border-radius: 10px;
    padding: 5px 15px;
    margin-left: 20px;
    margin-top: 50px;
  }
  .input {
    width: 332px;
    margin-left: 50px;
    margin: 0 auto;
    margin-top: 15px;
  }
  .chatbox {
    width: 452px;
    height: 80px;
    top: 265px;
    border-top: 1px solid #d9d9d9;
    position: relative;
  }
`;

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setMessages([...messages, { text: inputValue, sender: "user" }]);
    setInputValue("");
  }
  return (
    <ChatStyled>
      <div className="title">Send us a message</div>
      <div>
        <div className="macdinh">
          <div>Hi. </div>
          <div>Have any questions? Please ask</div>
        </div>
      </div>

      <div className="chatbox">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <Input
              className="input"
              size="sm"
              placeholder="Small"
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
          </Stack>
        </form>
      </div>
    </ChatStyled>
  );
};
export default Chat;
