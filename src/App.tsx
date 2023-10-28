import ExtractorForm from "@/components/ExtractorForm";

function App() {
  return (
    <main className="grid place-content-center min-h-screen p-5 bg-stone-300 text-center">
      {/* Card */}
      <h1 className="text-gray-400 font-semibold text-3xl mb-10">
        Instagram Username Extractor
      </h1>
      <ExtractorForm />
    </main>
  );
}

export default App;
