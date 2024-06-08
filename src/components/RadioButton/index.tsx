// import React, {InputHTMLAttributes, ReactElement, useEffect, useState} from 'react';

// import {CustomLabel, Indicator, NativeInput, Option, OptionLabel, Root} from './styled';

// export type RadioButtonOption = {
//     value: string;
//     title?: string;
//     onActivate?: (value: string) => any;
// };

// export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
//     label?: string;
//     required?: boolean;
//     options: RadioButtonOption[];
//     onChange?: (item: RadioButtonOption) => any;
//     direction?: 'horizontal' | 'vertical';
//     value?: string;
//     className?: string;
//     hasError?: boolean;
// }

// export const RadioButton = ({
//     label,
//     required,
//     options,
//     onChange,
//     value,
//     direction = 'horizontal',
//     className,
//     hasError,
// }: RadioButtonProps): ReactElement => {
//     const [selectedOption, setSelectedOption] = useState(value ?? options[0].value);

//     // Controlled input
//     useEffect(() => {
//         if (value) {
//             setSelectedOption(value);
//         }
//     }, [value]);

//     const change = (option: RadioButtonOption) => {
//         if (!value) {
//             // If uncontrolled input
//             setSelectedOption(option.value);
//         }

//         if (onChange) {
//             onChange(option);
//         }

//         if (option.onActivate) {
//             option.onActivate(option.value);
//         }
//     };

//     const isChecked = (option: RadioButtonOption): boolean =>
//         value ? value === option.value : option.value === selectedOption;

//     return (
//         <CustomLabel text={label} required={required} hasError={hasError}>
//             <Root direction={direction} className={className}>
//                 {options.map((option) => (
//                     <Option key={option.value} checked={option.value === selectedOption}>
//                         <NativeInput
//                             checked={isChecked(option)}
//                             onChange={() => change(option)}
//                             type="radio"
//                             value={option.value}
//                         />
//                         <Indicator checked={isChecked(option)} />
//                         <OptionLabel>{option.title ?? option.value}</OptionLabel>
//                     </Option>
//                 ))}
//             </Root>
//         </CustomLabel>
//     );
// };
export {};
