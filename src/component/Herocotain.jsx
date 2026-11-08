

function Herocotain() {
    return (
        <div className="max-w-7xl mx-auto mt-20 px-6">

            <div className="flex flex-col md:flex-row items-center justify-between gap-20">

                <div>

                    <p className="font-bold text-[48px]">
                        Build Your Ideal
                    </p>

                    <h1 className="font-bold text-[64px] bg-gradient-to-r from-[#FF5722] via-[#E91E63] via-[#9C27B0] to-[#7B1FA2] bg-clip-text text-transparent -mt-7">
                        Development Stack
                    </h1>

                    <p className="text-[28px] my-8">
                        Explore frontend, backend and tooling options,<br />
                        compare them side by side, and put together the  <br />
                        stack that fits your next project.
                    </p>

                    <div className="flex items-center gap-10 mt-15">

                        <button className="px-6 py-2.5 rounded-lg text-white bg-gradient-to-r from-[#FF5E2B] via-[#E6397D] to-[#D926B5] hover:brightness-110 transition-all duration-300 shadow-sm">
                            Explore Technologies
                        </button>

                        <button className="px-6 py-2.5 rounded-lg text-black bg-white border border-[#E2E8F0] hover:bg-gray-200 transition-colors shadow-sm">
                            Learn More
                        </button>

                    </div>

                </div>

                <img
                    src="src/assets/banner-stack.png"
                    alt="Dev Stack Builder banner"
                    className="w-full md:w-[500px] object-contain"
                />

            </div>

        </div>
    );
}

export default Herocotain;
