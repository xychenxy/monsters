import style from "./card.component.module.css";
import { Monster } from "../../utils/types";

type CardProps = { monster: Monster };
export const Card = ({ monster }: CardProps) => {
	const { name, email, id } = monster;
	return (
		<div className={style.container}>
			<img
				alt="monster"
				src={`https://robohash.org/${id}?set=set2&size=180x180`}
			/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
};
