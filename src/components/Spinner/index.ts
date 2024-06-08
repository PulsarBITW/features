import styled, { keyframes } from "styled-components";

export const colors = {
  brandPrimary: "#0063b0",
  brandSecondary: "#FFFFFF",
  bannerBorder: "#cee2f0",
  active: "#FF6600",
  title: "#343a41",
  textPrimary: "#434A53",
  textSecondary: "#838A99",
  textMuted: "#BBBEC1",
  link: "#0166B3",
  darkBlue: "#334D6E",
  white: "#ffffff",
  black: "#000000",
  border: "#E4E7EB",
  danger: "#ea425b",
  important: "#D4716E",
  dangerSecondary: "#fff2f2",
  greenSecondary: "#1bb37a",
  success: "#65c686",
  successSecondary: "#EBF9F5",
  green: "#25AD4B",
  redSecondary: "#FF6600",
  transparent: "transparent",
  liteGray: "#E1E1E1",
  text: "#405A65",
  gray50: "#B7BFC7",
  gray0: "#F2F2F2",
  backgroundBanner: "#E5F0F7",
  liteGraySecondary: "#F9FBFC",
  red: "#f93030",
  coral: "#E66665",
  liteBlue: "#D9EDFD",
  liteBlueSecondary: "#C2CFE0",
  diagram: [
    "#82CBAD",
    "#D4716E",
    "#4285F4",
    "#EC417A",
    "#438872",
    "#B89FEE",
    "#0A1E8F",
    "#5F1CD4",
    "#A60F42",
  ],
};

const rotateKeyframe = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const SpinnerSizes = {
  primary: 24,
  current: 35,
  small: 16,
};

const setSize = (size?: number) => (size ? size : SpinnerSizes.primary);

export const Spinner = styled.span<{
  size?: number;
  color?: "current" | "primary";
}>`
  display: inline-block;
  vertical-align: top;
  width: ${(p) => setSize(p.size)}px;
  height: ${(p) => setSize(p.size)}px;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ color }) => {
    switch (color) {
      case "current":
        return "currentColor";
      case "primary":
      default:
        return colors.brandPrimary;
    }
  }};
  border-left-color: transparent;
  animation: ${rotateKeyframe} 0.8s ease infinite;
`;
