import Image from 'next/image'
import MessageList from './components/MessageList'
import ChatInput from './components/ChatInput'
import { Message } from '../../typings'

async function Home() {


  const data =  await fetch(`${process.env.BASE_URL}/api/getMessage`).then((res) => res.json())

  const message : Message[] = data.messages;

  return (
    <div>
      <MessageList initialMessages={message}/>
      <ChatInput />
      </div>
      )
}

      export default Home;
