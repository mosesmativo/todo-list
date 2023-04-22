import { InputField } from "../components/Inputs/InputField";
import "../components/Inputs/Inputs.scss";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: 'Components/Inputs/InputFiled',
    component: InputField,
    tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Text = {
    args: {
        label: 'Title Here',
        type: 'text',
        name: 'title',
    },
};
export const TextArea = {
    args: {
        label: 'Text Area',
        type: 'textarea',
        name: 'title',
        value: 'title',
    },
};
export const Select = {
    args: {
        label: 'Select Box',
        type: 'select',
        name: 'title',
        options: [
            { label: 'Uno', value: 1 },
            { label: 'Two', value: 2 },
        ]
    },
};
export const CheckBox = {
    args: {
        label: 'Select Box',
        type: 'checkbox',
        name: 'checkbox',
    },
};

