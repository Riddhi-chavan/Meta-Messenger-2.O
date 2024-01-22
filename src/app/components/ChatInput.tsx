"use client"
import React, { FormEvent, useState , useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Message } from '../../../typings';
import useSWR from 'swr';
import fetcher from '../../../utils/FetchMessages';
import { useSession } from 'next-auth/react';


function ChatInput() {
  const [input, setInput] = useState('');
  const { data: messages, error, mutate } = useSWR("/api/getMessage", fetcher );
  // const { data: session } = useSession(); 

  console.log("Received messages:", messages);

  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (!input || !session) return;
    if(!input) return ;

    const messageToSend = input;
    setInput('');
    
    const id = uuid();
    
    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: "Riddhi chavan" ,
      profilePic: "/avatar/jpg",
      email: "riddhic164@gmail.com",
    };
    
    
  
    const uploadMessageToUpstash = async () => {
      try {
        const isOptimisticMessageAdded = messages?.data?.some((msg: Message) => msg.id === 'optimistic-id');
    
        // Update the local data optimistically
        if (!isOptimisticMessageAdded) {
          const optimisticData = {
            data: [{ ...message, id: 'optimistic-id' }, ...(messages?.data || [])],
            error: null,
          };
    
          mutate(optimisticData, false);
        }
        
    
        const response = await fetch(`/api/addMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message,
          }),
        });
    
        const data = await response.json();
    
        if (!response.ok) {
          // Rollback in case of an error
          throw new Error('Failed to add message: ' + await data.text());
        }
    
        // Remove the 'optimistic-id' from local data
        const updatedData = messages?.data?.filter((msg: Message) => msg.id !== 'optimistic-id');
        mutate(prev => ({ data: updatedData || [], error: null }), false);

        
    
        // Update the local data with the new messages
        mutate((prevData) => ({
          data: [...(prevData?.data || []), data],
          error: null,
        }), false);
    
        // console.log('MESSAGE ADDED>>>', data);
      } catch (error) {
        console.error('Error adding message:', message);
        console.error('Error details:', error); // Additional error details
        throw error;
      }
    };
    
    
    
 uploadMessageToUpstash();



if (error) {
  console.error("Error fetching messages:", error);
  return <div>Error loading messages</div>;
}

if (!messages) {
  // If messages are still undefined, render a loading state or return null
  return <div>Loading...</div>;
}

  };

  return (
    <form
      onSubmit={addMessage}
      className='fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2  bg-[#050E21]'
    >
     <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        // placeholder={session ? 'Enter Message here...' : 'Sign in to send a message'}
        placeholder='enter Message here'
        // className={`flex-1 rounded border border-[#D9E3F9] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-[#D9E3F9] bg-[#050E21] px-3 py-3 ${
        //   !session ? 'disabled:opacity-50 disabled:cursor-not-allowed' : ''
        className={`flex-1 rounded border border-[#D9E3F9] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-[#D9E3F9] bg-[#050E21] px-3 py-3 
        }`}
        // disabled={!session} // Disable the input if not authenticated
      />
      <button
        type='submit'
        disabled={!input}
        className='bg-blue-500 hover:bg-blue-700 text-[#D9E3F9] font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed'
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
