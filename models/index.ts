export type Project = {
	id: number;
	name: string;
	region: string;
	links: {
		android: string;
		television: string;
	};
	description: string;
	technologies: string[];
	photos: string[];
	icon: string;
	time: string;
	start: string;
	end?: string;
};

export type Skill = {
	id: number;
	name: string;
	level: string;
	icon?: string;
	localIcon?: string;
	link: string;
	color: string;
};

export type Contact = {
	id: number;
	name: string;
	color: string;
	link: string;
	localIcon: string;
};
