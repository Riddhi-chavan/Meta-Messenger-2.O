import { Message } from "../typings";

const fetcher = async () => {
  try {
    const res = await fetch("/api/getMessage");
    const data = await res.json();
    
    // Assuming data is an array of Message objects
    const messages: Message[] = data;

    return { data: messages, error: null };
  } catch (error) {
    // Handle any errors that might occur during the fetch
    return { data: null, error: error || "An error occurred during fetch." };
  }
};

export default fetcher;
