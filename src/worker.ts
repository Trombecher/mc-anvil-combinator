import {best, Branch, bruteForceOptimized, Item} from "./mceb.ts";
import {Message} from "./api.ts";

onmessage = e => {
    const encoded = e.data as string;

    let branch: Branch;

    try {
        branch = best(bruteForceOptimized(
            encoded.split("-").map(pack => Item.unpack(pack))
        ))!;
    } catch(e) {
        postMessage({
            success: false,
            error: (e as Error).message
        } satisfies Message);
        return;
    }

    postMessage({
        success: true,
        totalCost: branch.totalCost,
        steps: branch.steps.map(step => ({
            cost: step.cost,
            target: step.target.pack(),
            sacrifice: step.sacrifice.pack(),
            result: step.result.pack()
        }))
    } satisfies Message);
}