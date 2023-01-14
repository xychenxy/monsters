import style from "./card-list.component.module.css";
import { Card } from "../card/card.component";
import { Monster } from "../../utils/types";

type CardListProps = { monsters: Monster[] };
export const CardList = ({ monsters }: CardListProps) => {
	return (
		<div className={style.container}>
			{monsters.map((monster) => (
				<Card monster={monster} key={monster.id} />
			))}
		</div>
	);
};
