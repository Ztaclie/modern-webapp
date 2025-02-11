import DailyQuote from "./components/DailyQuote";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Quote Management System
        </h1>
        <DailyQuote />
      </div>
    </div>
  );
}

export default App;
