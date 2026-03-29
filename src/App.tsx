import { useState } from "react";
import Paper from "./components/paper/Paper";
import Editor from "./components/editor/Editor";
import Logo from "./assets/icons/cv-holic-logo.svg?react";

function App() {
  // * States
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
  const [educations, setEducations] = useState([
    {
      id: crypto.randomUUID(),
      schoolName: "",
      title: "",
      startYearOfStudy: "2024",
      endYearOfStudy: "2025",
    },
  ]);
  const [experiences, setExperiences] = useState([
    {
      id: crypto.randomUUID(),
      companyName: "",
      position: "",
      startYearOfExperience: "2024",
      endYearOfExperience: "2025",
    },
  ]);

  // * State Handlers
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
  const handleEducationsChange = (
    id: string,
    field: string,
    target: string,
  ) => {
    const newEducations = educations.map((education) => {
      if (education.id === id) {
        return {
          ...education,
          [field]: target,
        };
      }
      return education;
    });

    setEducations(newEducations);
  };
  const handleAddEducation = () => {
    setEducations([
      ...educations,
      {
        id: crypto.randomUUID(),
        schoolName: "",
        title: "",
        startYearOfStudy: "2024",
        endYearOfStudy: "2025",
      },
    ]);
  };
  const handleRemoveEducation = (id: string) => {
    const newEducations = educations.filter((education) => education.id !== id);
    setEducations(newEducations);
  };
  const handleExperiencesChange = (
    id: string,
    field: string,
    target: string,
  ) => {
    const newExperiences = experiences.map((experiences) => {
      if (experiences.id === id) {
        return {
          ...experiences,
          [field]: target,
        };
      }
      return experiences;
    });

    setExperiences(newExperiences);
  };
  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: crypto.randomUUID(),
        companyName: "",
        position: "",
        startYearOfExperience: "2024",
        endYearOfExperience: "2025",
      },
    ]);
  };
  const handleRemoveExperience = (id: string) => {
    const newExperiences = experiences.filter(
      (experience) => experience.id !== id,
    );
    setExperiences(newExperiences);
  };

  return (
    <>
      <main className="w-screen min-h-screen md:h-screen bg-oxford-blue flex flex-col md:overflow-hidden">
        <nav className="h-17.5 bg-cv-green flex items-center justify-start px-6 shrink-0">
          <Logo
            height={48}
            className="hover:opacity-60 transition duration-200 ease-in-out"
          />
        </nav>
        {/* Gunakan flex-col di mobile, grid di md ke atas */}
        <div className="flex flex-col md:grid md:grid-cols-5 w-full flex-1 md:min-h-0">
          {/* Editor */}
          <section className="md:col-span-3 md:h-full md:overflow-y-auto px-5 py-5 custom-scrollbar text-white">
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
              educations={educations}
              onEducationsChange={handleEducationsChange}
              onAddEducation={handleAddEducation}
              onRemoveEducation={handleRemoveEducation}
              experiences={experiences}
              onExperiencesChange={handleExperiencesChange}
              onAddExperience={handleAddExperience}
              onRemoveExperience={handleRemoveExperience}
            />
          </section>

          {/* View */}
          <section className="md:col-span-2 md:h-full md:overflow-y-auto px-5 py-5 md:px-0 md:py-0 w-full overflow-x-auto flex justify-center">
            <Paper
              font={font}
              name={name}
              email={email}
              phoneNumber={phoneNumber}
              location={location}
              description={description}
              educations={educations}
              experiences={experiences}
            />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
