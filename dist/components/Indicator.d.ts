export type IIndicator = {
    width: number;
    color?: string;
    style?: 'equilateral' | 'fill-square';
    cornerRadius?: number;
};
export declare const Indicator: ({ width, color, style, cornerRadius }: IIndicator) => import("react/jsx-runtime").JSX.Element;
