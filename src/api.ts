export type Message = SuccessMessage | ErrorMessage;

export type SuccessMessage = {
    success: true,
    totalCost: number,
    steps: {
        cost: number,
        target: string,
        sacrifice: string,
        result: string
    }[]
}

export type ErrorMessage = {
    success: false,
    error: string
}