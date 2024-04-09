import { Meta, StoryFn } from '@storybook/react';
import { SemiCircleProgressWithIndicator, ISemiCircleProgressWithIndicator } from '~/components/SemiCircleProgressWithIndicator';

export default {
  title: 'SemiCircleProgressWithIndicator',
  component: SemiCircleProgressWithIndicator,
} as Meta;

const Template: StoryFn<ISemiCircleProgressWithIndicator> = (args: ISemiCircleProgressWithIndicator) => <SemiCircleProgressWithIndicator {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  strokeWidth: 10,
  percentage: 60,
  indicatorPercentage: undefined,
  size: { width: 650, height: 500 },
  includeText: false,
  strokeColor: "#04001b",
  indicatorColor: "#03C04A",
  indicatorRelativeSize: 0.6,
  hasBackground: true,
  bgStrokeColor: '#d3d3d3',
};