type PerksProps = {
  perks: string[];
};

export const Perks = ({ perks }: PerksProps) => {
  return (
    <div className="mt-6">
      <h2>Perks:</h2>
      <div className="flex flex-col md:flex-row lg:flex-row gap-2">
        {perks.map((perk) => (
          <p key={perk}>{perk}</p>
        ))}
      </div>
    </div>
  );
};
