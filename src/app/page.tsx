import Image from 'next/image'
// import MessageList from './components/MessageList'
// import ChatInput from './components/ChatInput'
import { Message } from '../../typings'

async function Home() {


  // const data =  await fetch(`${process.env.BASE_URL}/api/getMessage`).then((res) => res.json())

  // const message : Message[] = data.messages;

  return (
    <div>
      {/* <MessageList initialMessages={message}/> */}
      {/* <ChatInput /> */}
      <div className='flex flex-col  items-center space-y-5'>
        <div className='flex space-x-2 items-center'>


          <p className='text-blue-400  text-3xl mt-14'>
            Welcome to Meta Messenger 2.O
          </p>
        </div>
        </div>


      </div>
      )
}

      export default Home;
