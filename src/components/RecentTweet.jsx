import { api } from "../utils/api";
import { InfinityTweetList } from "~/components/InfinityTweetList";
export function RecentTweets() {
  const tweets = api.tweet.InfFeed.useInfiniteQuery(
    {},
    { getNextPageParam: (lastPage) => lastPage.nextCursor }
  );
  if (tweets.data == undefined) return <h1>No tweets</h1>;
  return (
    <InfinityTweetList
      isError={tweets.isError}
      tweets={tweets.data.pages.flatMap((page) => page.mappedTweets)}
      hasMore={tweets.hasNextPage || false}
      fetchData={tweets.fetchNextPage}
    />
  );
}
