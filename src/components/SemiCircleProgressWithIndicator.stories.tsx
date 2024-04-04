import { Meta } from '@storybook/react';
import { SemiCircleProgressWithIndicator, ISemiCircleProgressWithIndicator } from '~/components/SemiCircleProgressWithIndicator';

export default {
  title: 'SemiCircleProgressWithIndicator',
  component: SemiCircleProgressWithIndicator,
} as Meta;

const Template: Story<ISemiCircleProgressWithIndicator> = (args: ISemiCircleProgressWithIndicator) => <SemiCircleProgressWithIndicator {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  strokeWidth: 10,
  percentage: 60,
  indicatorPercentage: 20,
  size: { width: 300, height: 200 },
  includeText: false,
  strokeColor: "#04001b",
  indicatorColor: "#03C04A",
  hasBackground: true,
  bgStrokeColor: '#d3d3d3',
};