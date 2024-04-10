type ISemiCircleProgress = {
    strokeWidth: number;
    strokeLinecap?: "butt" | "round" | "square" | "inherit";
    percentage: number;
    percentageSeparator?: string;
    size: {
        width: number;
        height: number;
    };
    strokeColor?: string;
    fontStyle?: {
        fontSize: string;
        fontFamily?: string;
        fontWeight: string;
        fill: string;
    };
    hasBackground?: Boolean;
    bgStrokeColor?: string;
};
declare const SemiCircleProgressWithIndicator: ({ strokeWidth, percentage, indicatorPercentage, strokeColor, size, strokeLinecap, percentageSeparator, fontStyle, hasBackground, bgStrokeColor, }: ISemiCircleProgress) => JSX.Element;
export { SemiCircleProgressWithIndicator };
