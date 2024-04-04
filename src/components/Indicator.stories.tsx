import { Meta, StoryFn } from '@storybook/react';
import { Indicator, IIndicator } from '~/components/Indicator';

export default {
  title: 'Indicator',
  component: Indicator,
} as Meta;

const Template: StoryFn<IIndicator> = (args: IIndicator) => <Indicator {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  size: 100,
  color: "#03C04A",
};