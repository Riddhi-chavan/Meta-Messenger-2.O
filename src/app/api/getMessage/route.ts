import type { NextApiRequest } from "next";
import redis from "../../../../radis";
import { Message } from "../../../../typings";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const messages = await redis.hgetall('message');

        const parsedMessages: Message[] = Object.values(messages).map(value => {
            const message: Message = JSON.parse(value)
            return message;
        });

        const validMessages = parsedMessages.filter(message => !!message).sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());

        return NextResponse.json(validMessages);
    } catch (error) {
        console.log("Error at getMessages api", error);
        return NextResponse.json({
            message: "Error while fetching user data from database",
            error: error,
        },
        { status: 500 });
    }
}