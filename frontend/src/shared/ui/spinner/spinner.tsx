import "./spinner.css";

type SpinnerProps = {
  size?: number;
  label?: string;
};

export const Spinner = ({ size = 28, label = "Загрузка…" }: SpinnerProps) => (
  <div className="spinner" role="status" aria-live="polite">
    <svg
      className="spinner-svg"
      width={size}
      height={size}
      viewBox="0 0 50 50"
      aria-hidden="true"
    >
      <circle
        className="spinner-track"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      />
      <circle
        className="spinner-arc"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
    <span className="spinner-label">{label}</span>
  </div>
);
