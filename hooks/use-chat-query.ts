import qs from "query-string";
import { useInfiniteQuery } from "@tanstack/react-query";

import { useSocket } from "@/components/providers/socket-provide";

interface ChatQueryProps {
  queryKey: string;
  apiUrl: string;
  paramKey: "channelId" | "conversationId";
  paramValue: string;
};

export const useChatQuery = ({
  queryKey,
  apiUrl, //    apiUrl="/api/messages" //where we fetch our messages from
            // socketUrl="/api/socket/messages
  paramKey,
  paramValue
}: ChatQueryProps) => {
  const { isConnected } = useSocket();

  const fetchMessages = async ({ pageParam = undefined }) => {
    const url = qs.stringifyUrl({
      url: apiUrl,
      query: {
        cursor: pageParam,
        [paramKey]: paramValue,
      }
    }, { skipNull: true });

    const res = await fetch(url);
    return res.json();
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: [queryKey],
    queryFn: fetchMessages,
    getNextPageParam: (lastPage) => lastPage?.nextCursor,
    refetchInterval: isConnected ? false : 1000, //if websocket server fails use polling , every 1sec fetch all messages for the page 
  });

  return {
    data, //batch size messages in1 fetch, on subsequent keeps appending
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  };
}