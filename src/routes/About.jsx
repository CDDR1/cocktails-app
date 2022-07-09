import Navbar from "../components/Navbar";

const About = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <section className="flex flex-col items-center gap-10 py-10 px-5 text-white">
                <h1 className="font-semibold text-3xl text-center 3xl:mt-20 3xl:mb-8">About This Project</h1>
                <div className="max-w-2xl flex flex-col gap-5">
                    <p>
                        Welcome to <strong>TheCocktailDB!</strong> In this application, you can search for as many cocktails as you like and look at the detailed information about each one of them. Enter the name of your favorite cocktail in the search bar and watch the magic happen ✨
                    </p>
                    <p>
                        I created this project to practice some of the React.js features that I've learned recently, like using the popular React Router package and the Context Hook to avoid props drilling. I also learned about the useEffect hook and used it to fetch the API that returns the data about all the different cocktails that can be seen in this application. 
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
