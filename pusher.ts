import Pusher from 'pusher';
import CleintPusher from 'pusher-js';

console.log("app_id" ,process.env.PUSHER_SERVER_KEY!)

export const serverPusher = new Pusher({
    appId: process.env.PUSHER_SERVER_ID!,
    key: process.env.PUSHER_SERVER_KEY!,
    secret: process.env.PUSHER_SERVER_SECRET!,
    cluster: "ap2",
    useTLS: true
})


export const clientPusher = new CleintPusher(String(process.env.PUSHER_SERVER_KEY), {
    cluster: 'ap2' ,
    forceTLS : true ,
    
    
  });

 