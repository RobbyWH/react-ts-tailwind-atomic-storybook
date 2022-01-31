export const textSizeArr =  ['text-sm', 'text-base', 'text-lg'] as const;
export type TextSize = typeof textSizeArr[number];