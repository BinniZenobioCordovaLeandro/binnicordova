import type { Contact, Project, Skill } from "@/models";
import { api } from "@/services/api";
import { useEffect, useState } from "react";

export const useData = () => {
	const [projects, setProjects] = useState<Project[]>([]);
	const [skills, setSkills] = useState<Skill[]>([]);
	const [contacts, setContact] = useState<Contact[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await api.getPersonData();
			if (data) {
				setProjects(data.projects as []);
				setSkills(data.skills as []);
				setContact(data.contacts as []);
			}
		};
		fetchData();
		return () => {
			setProjects([]);
			setSkills([]);
			setContact([]);
		};
	}, []);

	return { projects, skills, contacts };
};
