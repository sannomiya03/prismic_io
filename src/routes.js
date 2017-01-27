import Home from "./pages/Home"

export default {
	mode: "history",
	routes: [
		{ path: "/home", component: Home, name: "home" },
		{ path: "/", component: Home, name: "home" },
	]
}