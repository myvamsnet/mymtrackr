import { IColor } from "react-color-palette";

export const hexToIColor = (hex: string): IColor => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return {
    hex,
    rgb: { r, g, b, a: 1 },
    hsv: { h: 0, s: 0, v: 0, a: 1 }, // HSV values can be computed if needed
  };
};
