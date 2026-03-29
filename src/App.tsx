import { useState } from "react";
import Paper from "./components/paper/Paper";
import Editor from "./components/editor/Editor";
import Logo from "./assets/icons/cv-holic-logo.svg?react";

function App() {
  const [font, setFont] = useState("font-sans-serif");
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("example@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("12345");
  const [location, setLocation] = useState(
    "308 Negra Arroyo Lane, Albuquerque, New Mexico",
  );
  const [description, setDescription] = useState(
    "An aspiring software engineer with a strong passion for building.",
  );

  const handleFontChange = (font: string) => {
    setFont(font);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName((event.target as HTMLInputElement).value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail((event.target as HTMLInputElement).value);
  };
  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPhoneNumber((event.target as HTMLInputElement).value);
  };
  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation((event.target as HTMLInputElement).value);
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDescription((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <main className="w-screen h-screen bg-oxford-blue flex flex-col overflow-hidden">
        <nav className="h-17.5 bg-gray-700 flex items-center justify-start px-6">
          <Logo
            height={48}
            className="hover:opacity-60 transition duration-200 ease-in-out"
          />
        </nav>
        <div className="grid grid-cols-5 w-full flex-1 min-h-0">
          {/* Editor */}
          <section className="col-span-3 h-full overflow-y-auto px-5 py-5 custom-scrollbar text-white">
            <Editor
              selectedFont={font}
              onFontChange={handleFontChange}
              name={name}
              email={email}
              phoneNumber={phoneNumber}
              onNameChange={handleNameChange}
              onEmailChange={handleEmailChange}
              onPhoneNumberChange={handlePhoneNumberChange}
              location={location}
              onLocationChange={handleLocationChange}
              description={description}
              onDescriptionChange={handleDescriptionChange}
            />
          </section>

          {/* View */}
          <section className="col-span-2 h-full overflow-y-auto h-fit">
            <Paper
              font={font}
              name={name}
              email={email}
              phoneNumber={phoneNumber}
              location={location}
              description={description}
            />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
