import { api } from "@/services/api";
import { useEffect, useState } from "react";

export const useData = () => {
	const [projects, setProjects] = useState([]);
	const [skills, setSkills] = useState([]);
	const [contacts, setContact] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await api.getPersonData();
			if (data) {
				console.log("data", data);
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
