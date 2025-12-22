import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { useSettings } from "@/lib/SettingsProvider";

const SocialMediaNav = () => {
  const settings = useSettings();
  const linkedinUrl = settings?.linkedinUrl;
  const instagramUrl = settings?.instagramUrl;

  return (
    (linkedinUrl || instagramUrl) && (
      <div className="flex gap-4 pt-2">
        <div className="flex gap-3">
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--nav-text)] hover:text-[color:var(--nav-text-hover)]"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          )}
          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--nav-text)] hover:text-[color:var(--nav-text-hover)]"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    )
  );
};

export default SocialMediaNav;
