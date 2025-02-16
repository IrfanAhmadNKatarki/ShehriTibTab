export function Input({ type, placeholder, className, onChange }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`border border-gray-300 p-2 rounded-md w-full ${className}`}
        onChange={onChange}
      />
    );
  }
  