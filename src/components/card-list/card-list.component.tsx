import style from "./card-list.component.module.css";
import { Card } from "../card/card.component";
import { Monster } from "../../utils/types";

type Props = { monsters: Monster[] };
export const CardList = ({ monsters }: Props) => {
	return (
		<div className={style.container}>
			{monsters.map((monster) => (
				<Card monster={monster} />
			))}
		</div>
	);
};
