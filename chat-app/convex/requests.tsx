import { ConvexError } from "convex/values";
import { query } from "./_generated/server";
import { getUserbyClerkId } from "./_utils";

export const get = query({
    args: {},
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        };

        const currentUser = await getUserbyClerkId({
            ctx,
            clerkId: identity.subject,
        });

        if (!currentUser) {
            throw new ConvexError("User not found");
        };

        const requests = await ctx.db.query("requests").withIndex("by_reciever", q => q.eq("reciever", currentUser._id)).collect();

        const requestswithSender = await Promise.all(requests.map(async request => {
            const sender = await ctx.db.get(request.sender);

            if (!sender) {
                throw new ConvexError("Request sender could not be found!");
            };

            return { sender, request };
        })
        );
            return requestswithSender;
    }
});

export const count = query({
    args:{},
    handler:async (ctx,args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        };

        const currentUser = await getUserbyClerkId({
            ctx,
            clerkId: identity.subject,
        });

        if (!currentUser) {
            throw new ConvexError("User not found");
        };

        const requests = await ctx.db.query("requests").withIndex("by_reciever", q => q.eq("reciever", currentUser._id)).collect();

        return requests.length;
    },
})