export default function Recommendations({ suggestions }) {
    return (
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-bold">Daily Suggestions</h2>
        <ul>
          {suggestions.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </div>
    );
  }
  