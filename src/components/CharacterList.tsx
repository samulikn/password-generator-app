import CharacterItem, { type CharacterItemType } from "./CharacterItem";

type CharacterListProps = {
    items: CharacterItemType[]
}

const CharacterList = ({ items }: CharacterListProps) => {
    return (
        <ul className="list-none">
            {items.map((listItem, i) => (
                <li key={i} className="pb-4 last:pb-0">
                    <CharacterItem item={listItem.item} checked={listItem.checked}/>
                </li>
            ))}
        </ul>
    )
}
export default CharacterList;