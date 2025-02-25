export default function Reports({ mizaj, suggestions, dailyGraph }) {
    return (
      <div className="container mt-4">
        <h2 className="fw-bold text-success">Your Health Reports</h2>
  
        {mizaj ? (
          <div className="p-3 bg-white shadow rounded">
            <h3>Mizaj Result: <span className="text-success">{mizaj}</span></h3>
  
            <h5>Suggestions:</h5>
            <ul>
              {suggestions.length > 0 ? (
                suggestions.map((s, index) => <li key={index}>{s}</li>)
              ) : (
                <p className="text-muted">No suggestions available</p>
              )}
            </ul>
  
            {dailyGraph.length > 0 && (
              <div className="mt-3">
                <h5>Daily Energy Levels:</h5>
                <ul>
                  {dailyGraph.map((graph, index) => (
                    <li key={index}>
                      🔥 Heat: {graph.heat}%, ❄️ Cold: {graph.cold}%, 🌵 Dryness: {graph.dryness}%, 💧 Moisture: {graph.moist}%
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <p className="text-muted">No reports available. Take the Mizaj assessment first.</p>
        )}
      </div>
    );
  }
  