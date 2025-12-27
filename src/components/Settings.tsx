import CharacterList from "./CharacterList";
import Length from "./Length";
import TotalStrength from "./TotalStrength";

function Settings() {
  return (
    <div className="p-4 sm:px-8 sm:py-6 bg-grey-800 text-grey-200 flex flex-col gap-8">
      <Length />
      <CharacterList
        items={[
          { item: "Uppercase Letters", checked: true },
          { item: "Lowercase Letters", checked: true },
          { item: "Numbers", checked: false },
          { item: "Symbols", checked: false },
        ]}
      />
      <TotalStrength />
    </div>
  );
}

Settings.propTypes = {};

export default Settings;
