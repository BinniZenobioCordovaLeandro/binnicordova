export type Project = {
	id: number;
	name: string;
	region: string;
	links: {
		android?: string;
		television?: string;
		web?: string;
		apple?: string;
		[key: string]: string | undefined;
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

export type FAQ = {
	id: number;
	question: string;
	answer: string;
};
