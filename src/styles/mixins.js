export const hoverGlow = (color) => `
  transition: all .25s ease;
  &:hover {
    box-shadow: 0 0 10px 2px ${color};
  }
`;
