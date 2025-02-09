import { useMutation } from "convex/react";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useMutationState = (mutationToRun: any) => {
    const [pending, setPending] = useState(false);
    const mutationFn = useMutation(mutationToRun);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mutate = (payload: any) => {
        setPending(true);
        return mutationFn(payload).then(res => 
        {
         return res 
        }).catch((error) => {
         throw error 
        }).finally(() => setPending(false));
    };
    return {mutate,pending};
}