import { createWithEqualityFn } from "zustand/traditional";

export default createWithEqualityFn((setState) => ({
	name: "",
	setName: (name) => setState({ name }),
	organizationName: "",
	setOrganizationName: (organizationName) => setState({ organizationName }),
	questionnaireName: "",
	setQuestionnaireName: (questionnaireName) => setState({ questionnaireName }),
}));
