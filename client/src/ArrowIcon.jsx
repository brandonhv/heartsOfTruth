const ArrowIcon = ({ size = 18, style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    style={{ marginLeft: '8px', verticalAlign: 'middle', ...style }}
  >
    <path d="M5 19L19 5" />
    <path d="M6 5h13v13" />
  </svg>
);

export default ArrowIcon;