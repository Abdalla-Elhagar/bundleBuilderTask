import Review from "./components/Review";
import Step from "./components/Step";

function App() {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1  gap-10 mobileContainer lg:container  min-h-screen">
      <Step className={`col-span-1 w-full lg:col-span-2 `} />
      <Review className={`col-span-1 w-full bg-secondary`} />
    </div>
  );
}

export default App;
