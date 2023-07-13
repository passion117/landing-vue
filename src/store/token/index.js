import { getItem, setItem } from "@/utils/storage";

const TOKEN_KEY = "BOHBAN_MILOS"

export default {
	namespaced: true,
	actions   : {},
	mutations : {
		setUser(state, user) {
			state.user = user;
			setItem("TOKEN_KEY", state.user);
		}
	},
	state: { user: getItem("TOKEN_KEY") }
};
