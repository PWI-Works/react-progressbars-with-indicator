export type ISemiCircleProgressWithIndicator = {
    strokeWidth: number;
    strokeLinecap?: "butt" | "round" | "square" | "inherit";
    percentage: number;
    indicatorPercentage?: number;
    percentageSeparator?: string;
    width?: number;
    strokeColor?: string;
    indicatorColor?: string;
    indicatorRelativeSize: number;
    includeText?: boolean;
    fontStyle?: {
        fontSize: string;
        fontFamily?: string;
        fontWeight: string;
        fill: string;
    };
    hasBackground?: boolean;
    bgStrokeColor?: string;
};
export declare const SemiCircleProgressWithIndicator: ({ strokeWidth, percentage, indicatorPercentage, strokeColor, indicatorColor, width, indicatorRelativeSize, strokeLinecap, percentageSeparator, includeText, fontStyle, hasBackground, bgStrokeColor, }: ISemiCircleProgressWithIndicator) => import("react/jsx-runtime").JSX.Element;
