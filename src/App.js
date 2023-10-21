import logo from './logo.svg';
import './App.css';
import {ChatViewComponent, lightChatTheme, ChatUIProvider} from '@pushprotocol/uiweb'
import { useParams } from 'react-router-dom';
function App() {
  const { chat } = useParams();
  console.log(chat)
  return (
<div><ChatUIProvider env={"staging"} theme={lightChatTheme}>
        <ChatViewComponent
          chatId="499ebaf4f26444fc00e90b6e3196b5f54a9f976177ab4fa6ede4c49e3b58f8ae"
          limit={10}
        />
      </ChatUIProvider></div>  );
}

export default App;
