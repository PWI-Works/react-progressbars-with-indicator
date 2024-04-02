import { Meta, Story } from '@storybook/react';
import { SemiCircleProgressWithIndicator, ISemiCircleProgressWithIndicator } from '~/components/SemiCircleProgressWithIndicator';

export default {
  title: 'SemiCircleProgressWithIndicator',
  component: SemiCircleProgressWithIndicator,
} as Meta;

const Template: Story<ISemiCircleProgressWithIndicator> = (args) => <SemiCircleProgressWithIndicator {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  strokeWidth: 10,
  percentage: 50,
  indicatorPercentage: 50,
  size: { width: 100, height: 100 },
};