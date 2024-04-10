import { Meta, StoryFn } from '@storybook/react';
import { HorizontalProgressWithIndicator, IHorizontalProgressWithIndicator } from '~/components/HorizontalProgressWithIndicator';

export default {
  title: 'HorizontalProgressWithIndicator',
  component: HorizontalProgressWithIndicator,
} as Meta;

const Template: StoryFn<IHorizontalProgressWithIndicator> = (args: IHorizontalProgressWithIndicator) => <HorizontalProgressWithIndicator {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  strokeWidth: 10,
  percentage: 60,
  indicatorPercentage: undefined,
  width: 500,
  strokeColor: "#04001b",
  indicatorColor: "#03C04A",
  indicatorRelativeSize: 0.6,
  hasBackground: true,
  bgStrokeColor: '#d3d3d3',
};