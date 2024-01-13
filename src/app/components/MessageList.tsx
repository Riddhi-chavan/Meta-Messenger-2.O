"use client"
import React, { useEffect } from 'react';
import useSWR from 'swr';
import fetcher from '../../../utils/FetchMessages';
import { Message } from '../../../typings';
import MessageComponent from './MessageComponent';
import { clientPusher } from '../../../pusher';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type Props = {
  initialMessages: Message[];
};

function MessageList({ initialMessages }: Props) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/auth/signin');
    }
  }, [session, router]);

  const { data: fetcherData, error, mutate } = useSWR("/api/getMessage", fetcher);
  const messages = fetcherData?.data || [];

  useEffect(() => {
    const channel = clientPusher.subscribe('messages');
    channel.bind('new-message', async (data: Message) => {
      if (messages?.find((message) => message.id === data.id)) return;

      mutate(fetcher, {
        optimisticData: {
          data: [data, ...messages!],
          error: null,
        },
        rollbackOnError: true,
      });
    });

    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages, mutate, clientPusher]);

  const filteredMessages = messages.filter((message) => message.id !== 'optimistic-id');

  return (
    <div className='space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto '>
      {(filteredMessages || initialMessages).map((message: Message) => (
        <MessageComponent key={message.id} message={message} />
      ))}
    </div>
  );
}

export default MessageList;
