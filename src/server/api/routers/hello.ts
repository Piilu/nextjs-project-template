import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getError } from "~/server/utils/errorUtils";

export const helloRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) =>
    {
      try
      {
        return {
          greeting: `Hello ${input.text}`,
        };
      }
      catch (error)
      {
        throw new Error(getError(error))
      }
    }),

});
