import React from 'react';
import {
  ChatViewComponent,
  ChatUIProvider,
  lightChatTheme,
  CreateGroupModal,
} from "@pushprotocol/uiweb";

function CreateGroup() {
  return (
    <ChatUIProvider env="staging" theme={lightChatTheme}>
      <ChatViewComponent>
        <CreateGroupModal onClose={() => console.log("closing")} />
      </ChatViewComponent>
    </ChatUIProvider>
  );
}

export default CreateGroup;


// account 
// signer
// decrepted pgp 