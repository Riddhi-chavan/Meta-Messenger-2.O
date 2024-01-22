import type { NextApiRequest } from "next";
import redis from "../../../../radis";
import { Message } from "../../../../typings";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const messages = await redis.hgetall('message');

        const parsedMessages: (Message | null)[] = Object.values(messages).map(value => {
            try {
                const message: Message = JSON.parse(value);
                return message;
            } catch (error) {
                console.error("Error parsing JSON:", value);
                return null;
            }
        });

        const validMessages = parsedMessages.filter((message): message is Message => !!message).sort((a, b) => new Date(a!.created_at).getTime() - new Date(b!.created_at).getTime());

        return NextResponse.json(validMessages);
    } catch (error) {
        console.log("Error at getMessages api", error);
        return NextResponse.json({
            message: "Error while fetching user data from the database",
            error: error,
        },
        { status: 500 });
    }
}
