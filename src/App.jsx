import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { AppRoutes } from "./routes";

// Add this constant at the top of the file
const baseUrl = import.meta.env.BASE_URL || '/';

function App() {
  return (
    <BrowserRouter basename={baseUrl}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
