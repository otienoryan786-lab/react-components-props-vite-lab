const About = import.meta.glob("./about.jsx", {
	eager: true,
	import: "default",
})["./about.jsx"];

export default About;
