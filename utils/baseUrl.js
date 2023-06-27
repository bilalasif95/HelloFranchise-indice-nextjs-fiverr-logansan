const baseUrl =
	process.env.NODE_ENV === "production"
		//? "https://indice-dynamic.envytheme.com"
		? "https://hello-franchise-indice-nextjs.vercel.app"
		: "http://localhost:3000";

export default baseUrl;
