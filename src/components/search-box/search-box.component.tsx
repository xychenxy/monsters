import style from "./search-box.component.module.css";

type SearchBoxProps = {
	onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const SearchBox = ({ onSearchChange }: SearchBoxProps) => {
	return (
		<input
			className={style.container}
			type="search"
			placeholder="search monsters"
			onChange={onSearchChange}
		/>
	);
};
