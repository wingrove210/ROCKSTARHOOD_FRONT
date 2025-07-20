import type { SVGProps } from "react";

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 448 448"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect y={64} width={448} height={64} rx={8} />
    <rect y={192} width={448} height={64} rx={8} />
    <rect y={320} width={448} height={64} rx={8} />
  </svg>
);

export default MenuIcon;
