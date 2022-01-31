export const textColorArr =  ['text-black', 'text-white', 'text-gray', 'text-blue'] as const;
export type TextColor = typeof textColorArr[number];