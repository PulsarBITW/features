// import styled, { css } from "styled-components";
// import { hideVisually } from "polished";

// import {colors, userSelectNone} from 'theme';
// import {Label} from 'components/ui-kit/NoBindLabel';
// import {LabelInner} from 'components/ui-kit/NoBindLabel/styled';

// export const CustomLabel = styled(Label)`
//   ${LabelInner} {
//     margin-bottom: 12px;
//     margin-left: 0;
//   }
// `;
// export const Root = styled.div<{ direction: "horizontal" | "vertical" }>`
//   display: flex;

//   ${(p) =>
//     p.direction === "vertical" &&
//     css`
//       flex-flow: column nowrap;

//       > label {
//         &:not(:last-of-type) {
//           margin-bottom: 20px;
//         }
//       }
//     `}

//   ${(p) =>
//     p.direction === "horizontal" &&
//     css`
//       > label {
//         &:not(:last-of-type) {
//           margin-right: 16px;
//         }
//       }
//     `}
// `;

// export const Option = styled.label<{ checked: boolean }>`
//   display: flex;
//   flex-flow: row nowrap;
//   align-items: center;
//   cursor: pointer;

//   ${(p) =>
//     !p.checked &&
//     css`
//       &:hover span {
//         transition: all 50ms;
//         border-color: ${colors.brandPrimary};
//       }
//     `}
// `;

// export const NativeInput = styled.input`
//   ${hideVisually()};
// `;

// export const Indicator = styled.span<{ checked: boolean }>`
//   width: 18px;
//   height: 18px;
//   border-radius: 50%;
//   transition: all 50ms;
//   border: 1px solid ${colors.border};
//   box-sizing: border-box;

//   ${(p) =>
//     p.checked &&
//     css`
//       border: 4px solid ${colors.brandPrimary};
//     `}
// `;

// export const OptionLabel = styled.div`
//   font-size: 14px;
//   line-height: 16px;
//   color: ${colors.textPrimary};
//   margin-left: 8px;
//   ${userSelectNone};
// `;
export {};
