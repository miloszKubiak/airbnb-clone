import { perksIcons } from "../utils/perks";

type PerksProps = {
  perks: string[];
};

export const Perks = ({ perks }: PerksProps) => {
  return (
    <div className="mt-6">
      <h2 className="font-bold">Perks:</h2>
      <div className="flex flex-col md:flex-row lg:flex-row gap-2 sm:gap-4">
        {perks.map((perk) => {
          return (
            <div key={perk} className="flex items-center gap-1 text-xl">
              {perksIcons.map((icon) => {
                if (icon.title === perk)
                  return <p key={icon.title}>{icon.icon}</p>;
              })}
              <p>{perk}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
