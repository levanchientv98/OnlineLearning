import {
  ChatEngine,
  ChatList,
  ChatCard,
  NewChatForm,
  ChatFeed,
  ChatHeader,
  IceBreaker,
  MessageBubble,
  IsTyping,
  NewMessageForm,
  ChatSettings,
  ChatSettingsTop,
  PeopleSettings,
  PhotosSettings,
  OptionsSettings,
} from "react-chat-engine";
// import ChatFeed from "components/ChatFeed";
import React from "react";
import { styled } from "styled-components";

const StyledDiv = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62, 5%;

  border: 1px solid #cdcdcd;
  border-radius: 4px;
  font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  letter-spacing: 0.5px;

  .ce-chat-list {
    background-color: rgb(240, 240, 240) !important;
  }

  .ce-chats-container {
    background-color: rgb(240, 240, 240) !important;
  }

  .ce-active-chat-card {
    background-color: #cabcdc !important;
    border: 4px solid #cabcdc !important;
    border-radius: 0px !important;
  }

  .ce-chat-subtitle-text {
    color: #595959 !important;
  }

  .ce-chat-form-container {
    padding-bottom: 20px !important;
  }

  .ce-text-input {
    border-radius: 6px !important;
    border: 1px solid #3b2a50 !important;
  }

  .ce-primary-button {
    border-radius: 6px !important;
    background-color: #7554a0 !important;
    position: relative;
    bottom: 1px;
  }

  .ce-danger-button {
    background-color: white !important;
    border-radius: 22px !important;
  }

  .ce-settings {
    background-color: rgb(240, 240, 240) !important;
  }

  .ce-autocomplete-input {
    border-radius: 6px !important;
    border: 1px solid #3b2a50 !important;
  }

  .ce-autocomplete-options {
    border-radius: 6px !important;
    border: 1px solid #3b2a50 !important;
    background-color: white !important;
  }

  .ce-chat-settings-container {
    padding-top: 12px !important;
  }

  .ce-chat-avatars-row {
    display: none !important;
  }

  /* CUSTOM FEED */

  .chat-feed {
    height: 100%;
    width: 100%;
    overflow: scroll;
    background-color: rgb(240, 240, 240);
  }

  .chat-title-container {
    width: calc(100% - 36px);
    padding: 18px;
    text-align: center;
  }

  .chat-title {
    color: #7554a0;
    font-weight: 800;
    font-size: 24px;
  }

  .chat-subtitle {
    color: #7554a0;
    font-weight: 600;
    font-size: 12px;
    padding-top: 4px;
  }

  .message-row {
    float: left;
    width: 100%;
    display: flex;
    margin-left: 18px;
  }

  .message-block {
    width: 100%;
    display: inline-block;
  }

  .message-avatar {
    width: 44px;
    height: 44px;
    border-radius: 22px;
    color: white;
    text-align: center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 48px;
  }

  .message {
    padding: 12px;
    font-size: 16px;
    border-radius: 6px;
    max-width: 60%;
  }

  .message-image {
    margin-right: 18px;
    object-fit: cover;
    border-radius: 6px;
    height: 30vw;
    /* width: 30vw; */
    max-height: 200px;
    max-width: 200px;
    min-height: 100px;
    min-width: 100px;
  }

  .read-receipts {
    position: relative;
    bottom: 6px;
  }

  .read-receipt {
    width: 13px;
    height: 13px;
    border-radius: 13px;
    margin: 1.5px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 14px;
  }

  .message-form-container {
    position: absolute;
    bottom: 0px;
    width: calc(100% - 36px);
    padding: 18px;
    background-color: rgb(240, 240, 240);
  }

  .message-form {
    overflow: hidden;
    border-radius: 6px;
    border: 1px solid #3b2a50;
    background-color: white;
  }

  .message-input {
    height: 40px;
    width: calc(100% - 132px);
    background-color: white;
    border: 1px solid white;
    padding: 0px 18px;
    outline: none;
    font-size: 15px;
  }

  .image-button {
    cursor: pointer;
    padding: 0px 12px;
    height: 100%;
  }

  .send-button {
    height: 42px;
    background-color: white;
    border: 1px solid white;
    padding: 0px 18px;
    cursor: pointer;
  }

  .send-icon {
    top: 1px;
    position: relative;
    transform: rotate(-90deg);
  }

  .picture-icon {
    top: 1px;
    position: relative;
    font-size: 14px;
  }
`;

const ChatUser = () => {
  const userName = localStorage.getItem("myUsername");
  return (
    <StyledDiv>
      {/* <div className={styles.chatUserContainer}> */}{" "}
      {/* Use the class from CSS Module */}
      <ChatEngine
        height="750px"
        projectID="4a0bfdaf-2586-45db-bd0e-a3522092e0e6"
        userName={userName}
        userSecret="123456"
        // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
        // Customize UI
        renderChatList={(chatAppState) => <ChatList {...chatAppState} />}
        renderChatCard={(chat, index) => (
          <ChatCard key={`${index}`} chat={chat} />
        )}
        renderNewChatForm={(creds) => <NewChatForm creds={creds} />}
        renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
        renderChatHeader={(chat) => <ChatHeader />}
        renderIceBreaker={(chat) => <IceBreaker />}
        renderMessageBubble={(
          creds,
          chat,
          lastMessage,
          message,
          nextMessage
        ) => (
          <MessageBubble
            lastMessage={lastMessage}
            message={message}
            nextMessage={nextMessage}
            chat={chat}
          />
        )}
        renderIsTyping={(typers) => <IsTyping />}
        renderNewMessageForm={(creds, chatID) => <NewMessageForm />}
        renderChatSettings={(chatAppState) => (
          <ChatSettings {...chatAppState} />
        )}
        renderChatSettingsTop={(creds, chat) => <ChatSettingsTop />}
        renderPeopleSettings={(creds, chat) => <PeopleSettings />}
        renderPhotosSettings={(chat) => <PhotosSettings />}
        renderOptionsSettings={(creds, chat) => <OptionsSettings />}
      ></ChatEngine>
      {/* </div> */}
    </StyledDiv>
  );
};

export default ChatUser;
