const baseUrl =
	process.env.NODE_ENV === "production"
		// ? "https://indice-dynamic.envytheme.com"
		//? "https://hello-franchise-indice-nextjs-i4tm.vercel.app"
		? "https://aidirectory.app"
		: "http://localhost:3000";

export default baseUrl;
