import Card from "./components/home/card";
import { SiAccenture } from "react-icons/si";
import monieman from "./monieman.png";
import Nav from "./components/home/nav";
import { FaCaretRight } from "react-icons/fa";

function App() {
  return (
    <div className="bg-white">
      <section className="flex flex-col h-screen md:px-24">
        <Nav />

        <div className="flex flex-col md:flex-row m-5 sm:text-center items-center h-[100%]">
          <div>
            <article>
              <h1 className="text-center text-[#065AC8] font-semibold md:flex justify-start text-6xl">
                <b className="font-mono text-7xl tracking-tighter">Manage</b>{" "}
                <br />
              </h1>
              <h1 className="text-center text-[#065AC8] font-semibold md:flex justify-start text-6xl">
                <p className="text-black">Your business</p>
              </h1>
            </article>
            <br />
            <p className="flex text-left">
              Moniepoint MFB provides banking solutions that enables businesses
              to collect payments, access loans, manage operations and
              ultimately grow their business.{" "}
            </p>

            <div className="mt-6 flex justify-center md:justify-start">
              <button className="flex text-white rounded bg-blue-600 py-5 px-10">
                Open an account now
                <SiAccenture className="mt-2 ml-2" color="#fff" size={10} />
              </button>
            </div>
          </div>

          <div className="w-[95%] rounded-3xl p-1 m-1 px-1 py-1 md:w-[50%]">
            <img src={monieman} alt="monieman" />
          </div>
        </div>
      </section>

      <section></section>

      <section className="md:px-24">
        <div className=" flex justify-start md:justify-end text-4xl font-semibold">
        <div className="md:flex flex-grow justify-end py-8 items-center "><hr className="relative left-4 bg-slate-400 h-0.5 border-0 w-[50%]"/>
            <FaCaretRight className="text-slate-400"/>
          </div>

          <h1>
            Powering <span className="text-blue-800">500,000</span>
            <br /> successful businesses
          </h1>
        </div>

        <div
          className="flex mb-6 md:flex-row md:px-50 gap-x-2 justify-between 
                  p-5 overflow-x-scroll md:overflow-x-hidden"
        >
          <Card
            title="Easy Payment"
            body="Access Payment from your customers. Get Paid Instantly"
          />
          <Card
            title="Expand your business"
            body=" Get loans you need to expand your business with interest rate at
              22%"
          />
          <Card
            title="Complete Control"
            body="Track business expenses and manage employees need all in one place"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
