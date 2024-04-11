import { Meta, StoryFn } from '@storybook/react';
import { SemiCircleProgressWithIndicator, ISemiCircleProgressWithIndicator } from '~/components/SemiCircleProgressWithIndicator';

export default {
  title: 'SemiCircleProgressWithIndicator',
  component: SemiCircleProgressWithIndicator,
} as Meta;

const Template: StoryFn<ISemiCircleProgressWithIndicator> = (args: ISemiCircleProgressWithIndicator) => <div style={{width: "600px"}}>
  <SemiCircleProgressWithIndicator {...args} /></div>;

  export const Primary = Template.bind({});

Primary.args = {
  strokeWidth: 10,
  percentage: 60,
  indicatorPercentage: undefined,
  includeText: false,
  strokeColor: "#04001b",
  indicatorColor: "#03C04A",
  indicatorRelativeSize: 0.6,
  hasBackground: true,
  bgStrokeColor: '#d3d3d3',
};