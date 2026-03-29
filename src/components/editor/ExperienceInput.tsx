import GlobalButton from "../ui/GlobalButton";
import GlobalTextInput from "../ui/GlobalTextInput";

export type Experience = {
  id: string;
  companyName: string;
  position: string;
  startYearOfExperience: string;
  endYearOfExperience: string;
};

type ExperienceInputProps = {
  experience: Experience;
  onChange: (id: string, field: keyof Experience, target: string) => void;
  onRemove: (id: string) => void;
};

export default function ExperienceInput({
  experience,
  onChange,
  onRemove,
}: ExperienceInputProps) {
  return (
    <div
      className="flex flex-col gap-4 border border-slate-300 p-6 rounded-xl"
      key={experience.id}
    >
      <GlobalTextInput
        label="Company Name"
        placeholder="Example: The Linux Foundation"
        value={experience.companyName}
        onChange={(e) => onChange(experience.id, "companyName", e.target.value)}
      />
      <GlobalTextInput
        label="Title of Position"
        placeholder="Example: DevOps Engineer"
        value={experience.position}
        onChange={(e) => onChange(experience.id, "position", e.target.value)}
      />
      <div className="flex gap-4">
        <GlobalTextInput
          label="Start Year"
          placeholder="Example: 2020"
          value={experience.startYearOfExperience}
          onChange={(e) =>
            onChange(experience.id, "startYearOfExperience", e.target.value)
          }
        />
        <GlobalTextInput
          label="End Year"
          placeholder="Example: 2024"
          value={experience.endYearOfExperience}
          onChange={(e) =>
            onChange(experience.id, "endYearOfExperience", e.target.value)
          }
        />
      </div>
      <GlobalButton variant="danger" onClick={() => onRemove(experience.id)}>
        Remove Experience
      </GlobalButton>
    </div>
  );
}
