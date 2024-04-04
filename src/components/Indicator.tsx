export type IIndicator = {
  size: number,
  color?: string,
}

export const Indicator = ({ size, color }: IIndicator) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="50"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeDasharray="314"
        strokeDashoffset="0"
      />
    </svg>
  );
}