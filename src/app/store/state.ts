
export interface ClickerState {
    name: string;
    startGame: boolean;
    counter: number;
}

export const initialState: ClickerState = {
    name: null,
    startGame: false,
    counter: 0
};
