import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <h1 className="text-4xl font-bold text-blue-600">
      AI Nexus 🚀
    </h1>
  );
}

function NotFound() {
  return (
    <h1 className="text-4xl font-bold text-red-600">
      404 - Page Not Found
    </h1>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;