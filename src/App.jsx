import Nav from "./components/navComponent/nav.component";
import Header from "./components/headerComponent/header.component";
import AboutMe from "./components/aboutMeComponent/aboutMe.component";
import Portfolio from "./components/portfolioComponent/portfolio.component";
import Contact from "./components/contactComponent/contact.component";
import Footer from "./components/footerComponent/footer.component";

import "./App.css";

function App() {
	return (
		<>
			<Nav />
			<Header />
			<AboutMe />
			<Portfolio />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
