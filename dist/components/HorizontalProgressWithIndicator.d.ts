export type IHorizontalProgressWithIndicator = {
    strokeWidth: number;
    strokeLinecap?: "butt" | "round" | "square" | "inherit";
    percentage: number;
    indicatorPercentage?: number;
    width?: number;
    strokeColor?: string;
    indicatorColor?: string;
    indicatorRelativeSize: number;
    customText?: string;
    textPosition?: 'start' | 'end' | 'middle';
    fontStyle?: {
        fontFamily?: string;
        fontWeight: string;
        fill: string;
    };
    hasBackground?: boolean;
    bgStrokeColor?: string;
};
export declare const HorizontalProgressWithIndicator: ({ strokeWidth, strokeLinecap, percentage, indicatorPercentage, width, strokeColor, indicatorColor, indicatorRelativeSize, customText, fontStyle, hasBackground, bgStrokeColor, textPosition }: IHorizontalProgressWithIndicator) => import("react/jsx-runtime").JSX.Element;
