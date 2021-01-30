import { html, TemplateResult } from 'lit-html';
import '../src/electron-webcomponents.js';

export default {
  title: 'ElectronWebcomponents',
  component: 'electron-webcomponents',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <electron-webcomponents style="--electron-webcomponents-background-color: ${backgroundColor}" .title=${title}></electron-webcomponents>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
