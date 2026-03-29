import GlobalTextInput from "../ui/GlobalTextInput";
import GlobalButton from "../ui/GlobalButton";

export type Education = {
  id: string;
  schoolName: string;
  title: string;
  startYearOfStudy: string;
  endYearOfStudy: string;
};

type EducationInputProps = {
  education: Education;
  onChange: (id: string, field: keyof Education, value: string) => void;
  onRemove: (id: string) => void;
};

export default function EducationInput({
  education,
  onChange,
  onRemove,
}: EducationInputProps) {
  return (
    <>
      <div
        className="flex flex-col gap-4 border border-slate-300 p-6 rounded-xl"
        key={education.id}
      >
        <GlobalTextInput
          label="School Name"
          placeholder="Example: University of Indonesia"
          value={education.schoolName}
          onChange={(e) => onChange(education.id, "schoolName", e.target.value)}
        />
        <GlobalTextInput
          label="Title of Study"
          placeholder="Example: Bachelor of Computer Science"
          value={education.title}
          onChange={(e) => onChange(education.id, "title", e.target.value)}
        />
        <div className="flex gap-4">
          <GlobalTextInput
            label="Start Year"
            placeholder="Example: 2020"
            value={education.startYearOfStudy}
            onChange={(e) =>
              onChange(education.id, "startYearOfStudy", e.target.value)
            }
          />
          <GlobalTextInput
            label="End Year"
            placeholder="Example: 2024"
            value={education.endYearOfStudy}
            onChange={(e) =>
              onChange(education.id, "endYearOfStudy", e.target.value)
            }
          />
        </div>
        <GlobalButton variant="danger" onClick={() => onRemove(education.id)}>
          Remove Education
        </GlobalButton>
      </div>
    </>
  );
}
