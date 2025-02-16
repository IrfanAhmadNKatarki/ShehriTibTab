import { useState } from "react";

export default function MizajAssessment({ setMizaj, setDailyGraph, setSuggestions }) {
  const [selectedBodyType, setSelectedBodyType] = useState("");

  const handleAssessment = () => {
    setMizaj("Sanguine"); // Example result
    setDailyGraph([{ heat: 70, cold: 30, dryness: 40, moist: 60 }]);
    setSuggestions(["Eat warm foods", "Avoid excess dryness", "Sleep early"]);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold">Assess Your Mizaj</h2>
      <input type="file" className="my-2" />
      <select className="my-2" value={selectedBodyType} onChange={(e) => setSelectedBodyType(e.target.value)}>
        <option value="">Select your body type</option>
        <option value="slim">Slim</option>
        <option value="muscular">Muscular</option>
        <option value="heavy">Heavy</option>
      </select>
      <button onClick={handleAssessment} className="bg-blue-500 text-white px-4 py-2 rounded">Analyze</button>
    </div>
  );
}
