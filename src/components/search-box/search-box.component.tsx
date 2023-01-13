import style from "./search-box.component.module.css";

export const SearchBox = ({
	onSearchChange,
}: {
	onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	return (
		<input
			className={style.container}
			type="search"
			placeholder="search monsters"
			onChange={onSearchChange}
		/>
	);
};
