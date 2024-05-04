import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row items-center">
                <div className="w-1/2 relative">
                    <img
                        src={person}
                        className="max-w-sm rounded-lg shadow-2xl h-full w-4/5"
                    />
                    <img
                        src={parts}
                        className="max-w-sm rounded-lg shadow-2xl w-2/5 absolute right-16 -bottom-1/3 border-8 border-[#fff]"
                    />
                </div>
                <div className="w-1/2 space-y-2">
                    <p className="font-bold text-2xl text-orange-600">About</p>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
                    </p>
                    <p className="py-6">
                    the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
                    </p>
                    <button className="btn bg-orange-600 text-[#fff]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
