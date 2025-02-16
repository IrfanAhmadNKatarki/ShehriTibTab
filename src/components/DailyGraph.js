export default function DailyGraph({ dailyGraph }) {
    return (
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-bold">Daily Graph</h2>
        {dailyGraph.length > 0 ? (
          <p>Heat: {dailyGraph[0].heat}%, Cold: {dailyGraph[0].cold}%</p>
        ) : (
          <p>No data available</p>
        )}
      </div>
    );
  }
  