import type { NextApiRequest } from "next";
import redis from "../../../../radis";
import { Message } from "../../../../typings";
import { NextResponse } from "next/server";
import { serverPusher } from "../../../../pusher";

export async function POST(request: Request) {
    try {
        const { message } = await request.json();
        console.log("Received message:", message);

        const existingMessage = await redis.hget('message', message.id);

        if (existingMessage) {
            // If a message with the same ID exists, update it
            const parsedExistingMessage: Message = JSON.parse(existingMessage);
            const updatedMessage = {
                ...parsedExistingMessage,
                // Add any properties you want to update here
                created_at: Date.now(),
            };

            await redis.hset('message', message.id, JSON.stringify(updatedMessage));
            
            return NextResponse.json(updatedMessage);
        } else {
            // If the message doesn't exist, add a new one
            const newMessage = {
                ...message,
                created_at: Date.now(),
            };

            await redis.hset('message', message.id, JSON.stringify(newMessage));
            serverPusher.trigger('messages' , 'new-message' , newMessage)
            return NextResponse.json(newMessage);
        }
    } catch (error) {
        console.log("Error at addMessage api", error);
        return NextResponse.json({
            message: "Error while storing user data in the database",
            error: error,
        },
        { status: 500 });
    }
}
