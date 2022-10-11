export type Action = { type: "ADD_TOKEN"; payload: string } //tipo e informação da action

export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token,
});