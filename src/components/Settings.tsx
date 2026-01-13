import CharacterList from "./CharacterList";
import { CharacterContextProvider } from "../context/CharacterContext";
import { LengthContextProvider } from "../context/LengthContext";
import Length from "./Length";
import TotalStrength from "./TotalStrength";

function Settings() {
  return (
    <div className="p-4 sm:px-8 sm:py-6 bg-grey-800 text-grey-200 flex flex-col gap-8">
      <CharacterContextProvider>
        <LengthContextProvider>
          <Length />
          <CharacterList />
          <TotalStrength />
        </LengthContextProvider>
      </CharacterContextProvider>
    </div>
  );
}

export default Settings;
