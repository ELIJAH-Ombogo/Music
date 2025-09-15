jsx
export function Card({ children, className }) {
  return (
    <div className={`rounded-2xl shadow-lg bg-gray-800 ${className}`}>
      {children}
    </div>
  );
}
