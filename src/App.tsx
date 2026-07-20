import Review from "./components/Review";
import Step from "./components/Step";

function App() {
  return (
    <div className="grid xl:grid-cols-3 grid-cols-1 gap-6 mobileContainer xl:container  min-h-screen items-start">
      <Step className={`col-span-1 w-full xl:col-span-2 `} />
      <Review className={`col-span-1 w-full bg-secondary `} />
    </div>
  );
}

export default App;
