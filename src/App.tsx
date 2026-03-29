import { useState } from "react";
import Paper from "./components/paper/paper";
import Editor from "./components/editor/editor";

function App() {
  const [paperFont, setPaperFont] = useState("font-sans-serif");

  const handleFontChange = (font: string) => {
    setPaperFont(font);
  }

  return (
    <>
      <main className="w-screen h-screen bg-oxford-blue flex flex-col">
        <nav className="h-17.5 bg-gray-700">

        </nav>
        <div className="grid grid-cols-5 w-full flex-1">
          {/* Editor */}
          <section className="col-span-3 text-white px-5 py-2">
            <Editor selectedFont={paperFont} onFontChange={handleFontChange} />
          </section>

          {/* View */}
          <section className="col-span-2">
            <Paper font={paperFont} />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
