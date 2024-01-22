import { Message } from "../typings";

const fetcher = async () => {
  try {
    const res = await fetch(`/api/getMessage`);
    console.log("Fetch response:", res);

    const data = await res.json();
    console.log("Fetched data:", data);

    const messages: Message[] = data;

    return { data: messages, error: null };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { data: null, error: error || "An error occurred during fetch." };
  }
};

export default fetcher;
