import { createTRPCRouter } from "~/server/api/trpc";
import { TweetRouter } from "~/server/api/routers/Tweet";
import { ProfilesRouter } from "~/server/api/routers/profiles";
import { PhotoRouter } from "./routers/photo";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  tweet: TweetRouter,
  profiles: ProfilesRouter,
  photo: PhotoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
