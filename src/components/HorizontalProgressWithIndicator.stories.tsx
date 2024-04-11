import { Meta, StoryFn } from '@storybook/react';
import { HorizontalProgressWithIndicator, IHorizontalProgressWithIndicator } from '~/components/HorizontalProgressWithIndicator';

export default {
  title: 'HorizontalProgressWithIndicator',
  component: HorizontalProgressWithIndicator,
} as Meta;

const Template: StoryFn<IHorizontalProgressWithIndicator> = (args: IHorizontalProgressWithIndicator) => <div style={{width: "600px"}}><HorizontalProgressWithIndicator {...args} /></div>;

export const Primary = Template.bind({});

Primary.args = {
  strokeWidth: 10,
  percentage: 60,
  indicatorPercentage: undefined,
  strokeColor: "#04001b",
  indicatorColor: "#03C04A",
  indicatorRelativeSize: 0.6,
  hasBackground: true,
  bgStrokeColor: '#d3d3d3',
  textPosition: 'end',
};