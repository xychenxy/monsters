export type Monster = {
	address: {
		city: string;
		geo: {
			lat: string;
			lng: string;
		};
		street: string;
		suite: string;
		zipcode: string;
	};
	company: {
		bs: string;
		catchPhrase: string;
		name: string;
	};
	email: string;
	id: number;
	name: string;
	phone: string;
	username: string;
	website: string;
};

// or, as we only these three variables
export type Monster1 = {
	name: "string";
	id: "string";
	email: "string";
};
