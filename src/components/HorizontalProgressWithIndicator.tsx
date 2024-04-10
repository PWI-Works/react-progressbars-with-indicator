import {Indicator} from "~/components/Indicator";

export type IHorizontalProgressWithIndicator = {
  strokeWidth: number;
  strokeLinecap?: "butt" | "round" | "square" | "inherit";
  percentage: number;
  indicatorPercentage?: number;
  width: number;
  strokeColor?: string;
  indicatorColor?: string;
  indicatorRelativeSize: number;
  customText?: string;
  fontStyle?: {
    fontSize: string;
    fontFamily?: string;
    fontWeight: string;
    fill: string;
  };
  hasBackground?: boolean;
  bgStrokeColor?: string;
};

export const HorizontalProgressWithIndicator = ({
                                                  strokeWidth,
                                                  strokeLinecap,
                                                  percentage,
                                                  indicatorPercentage,
                                                  width,
                                                  strokeColor,
                                                  indicatorColor,
                                                  indicatorRelativeSize,
                                                  customText,
                                                  fontStyle,
                                                  hasBackground = true,
                                                  bgStrokeColor
                                                }: IHorizontalProgressWithIndicator) => {


  const strokeStartX = strokeLinecap === "round" || strokeLinecap === "square" ? strokeWidth : 0;
  const strokeEndX = width - (strokeLinecap === "round" || strokeLinecap === "square" ? strokeWidth : 0);
  const strokeLength = strokeEndX - strokeStartX;
  const progressStrokeEndX = strokeStartX + strokeLength * (percentage / 100);
  const indicatorPositionX = strokeStartX + strokeLength * ((indicatorPercentage || 0) / 100);

  const indicatorWidth = strokeWidth * indicatorRelativeSize;
  const strokeIndicatorGap = 1;

  const height = strokeWidth + indicatorWidth + strokeIndicatorGap;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="_horizontal-progress"
    >

    </svg>
  );
}