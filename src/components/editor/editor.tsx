import EditIcon from "../../assets/icons/edit-icon.svg?react";
import GlobalButton from "../ui/GlobalButton";
import GlobalTextInput from "../ui/GlobalTextInput";
import EducationInput, { type Education } from "./EducationInput";
import ExperienceInput, { type Experience } from "./ExperienceInput";

const fonts = [
  { name: "Sans Serif", class: "font-sans-serif" },
  { name: "Serif", class: "font-serif" },
  { name: "Monospace", class: "font-monospace" },
];

type EditorProps = {
  selectedFont: string;
  onFontChange: (font: string) => void;
  name: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  phoneNumber: string;
  onPhoneNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  location: string;
  onLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
  onDescriptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  educations: Education[];
  onEducationsChange: (
    id: string,
    field: keyof Education,
    target: string,
  ) => void;
  onAddEducation: () => void;
  onRemoveEducation: (id: string) => void;
  experiences: Experience[];
  onExperiencesChange: (
    id: string,
    field: keyof Experience,
    target: string,
  ) => void;
  onAddExperience: () => void;
  onRemoveExperience: (id: string) => void;
};

function Editor({
  selectedFont,
  onFontChange,
  name,
  onNameChange,
  email,
  onEmailChange,
  phoneNumber,
  onPhoneNumberChange,
  location,
  onLocationChange,
  description,
  onDescriptionChange,
  educations,
  onEducationsChange,
  onAddEducation,
  onRemoveEducation,
  experiences,
  onExperiencesChange,
  onAddExperience,
  onRemoveExperience,
}: EditorProps) {
  return (
    <>
      <div className="mb-5 flex gap-4 items-center justify-center">
        <h2>Editor</h2>
        <EditIcon className="" width={32} height={32} />
      </div>
      <div className="flex flex-col gap-3">
        {/* Font Selector */}
        <EditorSection title="Font Selector">
          <div className="flex gap-2">
            {fonts.map((font, index) => {
              return (
                <GlobalButton
                  onClick={() => onFontChange(font.class)}
                  key={index}
                  variant={
                    selectedFont === font.class ? "secondary" : "primary"
                  }
                >
                  {font.name}
                </GlobalButton>
              );
            })}
          </div>
        </EditorSection>

        {/* Basic Editor */}
        <EditorSection title="Basic Information">
          <div className="flex flex-col gap-4">
            <GlobalTextInput
              label="Name"
              placeholder="Example: John Doe"
              value={name}
              onChange={onNameChange}
            />
            <GlobalTextInput
              label="Email"
              placeholder="Example: johndoe@example.com"
              value={email}
              onChange={onEmailChange}
            />
            <GlobalTextInput
              label="Telephone Number"
              placeholder="Example: +62 8136742099"
              value={phoneNumber}
              onChange={onPhoneNumberChange}
            />
            <GlobalTextInput
              label="Location"
              placeholder="Example: 308 Negra Arroyo Lane"
              value={location}
              onChange={onLocationChange}
            />
            <GlobalTextInput
              label="Description"
              placeholder=""
              value={description}
              onChange={onDescriptionChange}
            />
            <div className="h-1" />
          </div>
        </EditorSection>

        {/* Education Editor */}
        <EditorSection title="Education">
          <div className="flex flex-col gap-6">
            {educations.map((education) => {
              return (
                <EducationInput
                  education={education}
                  onChange={onEducationsChange}
                  onRemove={onRemoveEducation}
                />
              );
            })}
            <GlobalButton onClick={onAddEducation}>
              <p>+ Add Education</p>
            </GlobalButton>
          </div>
        </EditorSection>
        <EditorSection title="Experiences">
          <div className="flex flex-col gap-6">
            {experiences.map((experience) => {
              return (
                <ExperienceInput
                  experience={experience}
                  onChange={onExperiencesChange}
                  onRemove={onRemoveExperience}
                />
              );
            })}
            <GlobalButton onClick={onAddExperience}>
              <p>+ Add Experience</p>
            </GlobalButton>
          </div>
        </EditorSection>
      </div>
    </>
  );
}

interface EditorSectionProps extends React.AreaHTMLAttributes<HTMLAreaElement> {
  title: string;
}

function EditorSection({
  children,
  title,
  className,
  ...props
}: EditorSectionProps) {
  return (
    <section className={`p-5 bg-gray-700 rounded-2xl ${className}`} {...props}>
      <h3 className="mb-4 font-bold text-xl">{title}</h3>
      {children}
    </section>
  );
}

export default Editor;
