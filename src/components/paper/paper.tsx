import EmailIcon from "../../assets/icons/email-icon.svg?react";
import PhoneIcon from "../../assets/icons/phone-icon.svg?react";
import LocationIcon from "../../assets/icons/location-icon.svg?react";
import { type Education } from "../editor/EducationInput";

type PaperProps = {
  font?: string;
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
  description: string;
  educations: Education[];
};

function Paper({
  font = "font-sans-serif",
  name,
  email,
  phoneNumber,
  location,
  description,
  educations,
}: PaperProps) {
  return (
    <div
      className={`bg-white w-full h-full py-4 px-5 ${font} flex flex-col min-h-full`}
    >
      {/* Basic Information */}
      <section className="flex flex-col gap-4 mb-5">
        <p className="text-2xl font-bold">{name}</p>
        <div className="flex flex-col gap-1 h-fit">
          <div className="flex gap-3 items-center">
            <EmailIcon width={16} height={16} />
            <p className="text-sm">{email}</p>
          </div>
          <div className="flex gap-3 items-center">
            <PhoneIcon width={16} height={16} />
            <p className="text-sm">{phoneNumber}</p>
          </div>
          <div className="flex gap-3 items-center">
            <LocationIcon width={16} height={16} />
            <p className="text-sm">{location}</p>
          </div>
        </div>
        <p className="text-sm">{description}</p>
      </section>

      <hr />

      {/* Education */}
      <section className="mt-5">
        <p className="text-2xl font-bold mb-2">Education</p>
        <div className="flex flex-col gap-1">
          {educations.map((education) => {
            return <EducationEntry education={education} />;
          })}
        </div>
      </section>
    </div>
  );
}

type EducationEntryProps = {
  education: Education;
};

function EducationEntry({ education }: EducationEntryProps) {
  const start = education.startYearOfStudy.trim();
  const end = education.endYearOfStudy.trim();

  const educationDate = [start, end].filter(Boolean).join(" - ");

  return (
    <div className="flex">
      <div className="flex-1">
        <p className="font-bold">{educationDate}</p>
      </div>
      <div className="flex-3 flex flex-col">
        <p className="font-bold">{education.title}</p>
        <p>{education.schoolName}</p>
      </div>
    </div>
  );
}

export default Paper;
