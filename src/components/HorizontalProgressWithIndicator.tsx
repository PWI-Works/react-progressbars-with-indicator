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
  textPosition?: 'start' | 'end' | 'middle';
  fontStyle?: {
    fontFamily?: string;
    fontWeight: string;
    fill: string;
  };
  hasBackground?: boolean;
  bgStrokeColor?: string;
};

export const HorizontalProgressWithIndicator = ({
                                                  strokeWidth,
                                                  strokeLinecap = 'round',
                                                  percentage,
                                                  indicatorPercentage,
                                                  width,
                                                  strokeColor,
                                                  indicatorColor,
                                                  indicatorRelativeSize,
                                                  customText,
                                                  fontStyle,
                                                  hasBackground = true,
                                                  bgStrokeColor,
                                                  textPosition = 'end'
                                                }: IHorizontalProgressWithIndicator) => {

  if (isNaN(width) || width <= 0) {
    throw new Error("width must be a positive number");
  }

  if (isNaN(strokeWidth) || strokeWidth <= 0) {
    throw new Error("Stroke width must be a positive number");
  }

  if (percentage < 0 || percentage > 100) {
    throw new Error("Indicator percentage must be between 0 and 100");
  }

  if (indicatorPercentage != undefined && (indicatorPercentage < 0 || indicatorPercentage > 100)) {
    throw new Error("Indicator percentage must be between 0 and 100");
  }

  const defaultStrokeColor = "#04001b";
  const defaultBackgroundColor = "#d3d3d3";

  const showIndicator = indicatorPercentage !== undefined;
  const indicatorWidth = strokeWidth * indicatorRelativeSize;

  const indicatorStrokeOffset = showIndicator ? indicatorWidth / 2 : 0;
  const strokeStartX = (strokeLinecap === "round" || strokeLinecap === "square") ? strokeWidth / 2 : indicatorStrokeOffset;
  const strokeEndX = width - (strokeLinecap === "round" || strokeLinecap === "square" ? strokeWidth : indicatorStrokeOffset);
  const strokeLength = strokeEndX - strokeStartX;
  const progressStrokeEndX = strokeStartX + strokeLength * (percentage / 100);
  const indicatorPositionX = strokeStartX + strokeLength * ((indicatorPercentage || 0) / 100);


  const strokeIndicatorGap = strokeWidth * 0.1;

  const indicatorPositionY = strokeWidth + strokeIndicatorGap;
  const indicator = <Indicator width={indicatorWidth} color={indicatorColor}/>;

  const placedIndicator = (
    <g
      transform={`translate(${indicatorPositionX - indicatorWidth / 2}, ${indicatorPositionY})`}> {/*set start position of indicator to point at dead center*/}
      {indicator}
    </g>
  );

  const backgroundPathDescription = `M ${strokeStartX} ${strokeWidth / 2} L ${strokeEndX} ${strokeWidth / 2}`;
  const progressPathDescription = `M ${strokeStartX} ${strokeWidth / 2} L ${progressStrokeEndX} ${strokeWidth / 2}`;

  const height = strokeWidth + indicatorWidth + strokeIndicatorGap;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="_horizontal-progress"
    >
      {hasBackground && (
        <path
          d={backgroundPathDescription}
          style={{
            stroke: bgStrokeColor || defaultBackgroundColor,
            strokeLinecap: strokeLinecap,
            strokeWidth: strokeWidth,
          }}
          fill="none"
        />
      )}
      <path
        d={progressPathDescription}
        style={{
          stroke: strokeColor || defaultStrokeColor,
          strokeLinecap: strokeLinecap,
          strokeWidth: strokeWidth,
        }}
        fill="none"
      />

      {showIndicator && placedIndicator}

      {customText && (
        <text
          x={textPosition === 'start' ? strokeStartX : textPosition === 'end' ? strokeEndX : width/2}
          y={strokeWidth / 2 + strokeWidth * 0.08}
          textAnchor={textPosition}
          dominantBaseline="middle"
          fill="white"
          fontFamily='Arial'
          fontSize={strokeWidth}
          style={{
            ...fontStyle,
          }}
        >
          {customText}
        </text>
      )}
    </svg>
  );
}