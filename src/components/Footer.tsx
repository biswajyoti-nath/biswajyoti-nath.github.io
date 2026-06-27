import { profile } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-transparent py-12 border-t border-caramel/10 relative">
      <div className="max-w-[1088px] mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between text-sm text-coffee-light">
        <p>&copy; {year} {profile.name}. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-caramel transition-colors"
              aria-label={social.ariaLabel}
            >
              {social.label}
            </a>
          ))}
          {('zenodo' in profile && profile.zenodo) && (
            <a
              href={profile.zenodo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-caramel transition-colors"
              aria-label="Zenodo Profile"
            >
              Zenodo
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
