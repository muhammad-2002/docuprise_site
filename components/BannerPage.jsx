import Image from "next/image";
import Link from "next/link";
import { ImPower } from "react-icons/im";
export default function BannerPage() {
  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/bannerBg.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex justify-center items-center h-full text-center text-white px-4 ">
        <div className="space-y-6 mt-40 mb-4">
          <h1 className="text-3xl sm:text-5xl md:text-4xl font-bold leading-tight">
            Revolutionizing Business and Government
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-4xl font-bold leading-tight">
            Operations with AI-Driven Solutions
          </h2>
          <p className="text-lg sm:text-[15px] md:text-[15px] w-full sm:w-[85%]  mx-auto">
            At Docuprise AI, we specialize in transforming how businesses and
            government agencies manage their most complex document challenges.
            As a Service-Disabled Veteran-Owned Small Business (SDVOSB), our
            team of veterans, machine learning experts, and software developers
            is united by a mission to empower organizations through innovative,
            AI-driven solutions. By streamlining workflows, reducing costs, and
            enhancing compliance, we enable our clients to focus on what matters
            most: their core operations.
          </p>
          <p>
            Ready to see how we can transform your organization? Explore our
            site to learn more about our mission, solutions, and commitment to
            excellence.
          </p>
          <div className="gap-4 flex justify-center items-center">
            <button className="bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 text-white px-6 py-3 rounded-lg text-lg transition duration-300 hover:bg-gradient-to-br hover:from-blue-400 hover:to-purple-700">
              Get Started
            </button>
          </div>
          <div className="flex gap-6 flex-col justify-center sm:flex-row w-full sm:w-[80%] mx-auto ">
            <div className="bg-[#070708] border text-center w-full md:w-[250px] p-5 rounded-xl space-y-3">
              <button className="border-solid border rounded-lg p-3 border-[#FF00AD] text-center ">
                <Image
                  src={"/stream-worflow.png"}
                  alt="const"
                  width={30}
                  height={30}
                ></Image>
              </button>
              <h1 className="text-[18px] font-bold">Streamline Workflows</h1>
            </div>
            <div className="bg-[#070708] border text-center w-full md:w-[250px] p-5 rounded-xl space-y-3">
              <button className="border-solid border rounded-lg p-3 border-[#FF00AD] text-center ">
                <Image
                  src="/reduce-cost.png"
                  alt="cost"
                  width={30}
                  height={30}
                />
              </button>
              <h1 className="text-[18px] font-bold">Reduce Costs</h1>
            </div>
            <div className="bg-[#070708] border text-center w-full md:w-[250px] p-5 rounded-xl space-y-3">
              <button className="border-solid border rounded-lg p-3 border-[#FF00AD] text-center ">
                <Image
                  src={"/compliance.png"}
                  alt="const"
                  width={30}
                  height={30}
                ></Image>
              </button>
              <h1 className="text-[18px] font-bold">Enhance Compliance</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
