import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className=" bg-[#110242] pb-32">
                <div className="flex items-center justify-between gap-8 max-w-[1300px] mx-auto">
                    <div className="flex-1">
                        <h2 className="text-white text-5xl font-bold">Task management system</h2>
                        <Link to="/login"><button className="btn btn-secondary my-8">Let's Explore</button></Link>
                    </div>
                    <div className="flex-1">
                        <img className="" src="https://b2429122.smushcdn.com/2429122/wp-content/uploads/monday-one-platform-banner-1079x800.png?lossy=0&strip=1&webp=1" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;