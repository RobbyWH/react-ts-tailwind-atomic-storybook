export const backgroundColorArr = ['bg-black', 'bg-white', 'bg-gray', 'bg-blue'] as const;
export type BackgroundColor =  typeof backgroundColorArr[number];