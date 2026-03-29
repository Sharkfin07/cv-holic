import EmailIcon from "../../assets/icons/email-icon.svg?react";
import PhoneIcon from "../../assets/icons/phone-icon.svg?react";
import LocationIcon from "../../assets/icons/location-icon.svg?react";

type PaperProps = {
  font?: string;
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
  description: string;
};

function Paper({
  font = "font-sans-serif",
  name,
  email,
  phoneNumber,
  location,
  description,
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
    </div>
  );
}

export default Paper;
