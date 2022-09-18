import Heading from './index';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Não sei',
  },
};

export const Template = (args) => <Heading {...args} />;
