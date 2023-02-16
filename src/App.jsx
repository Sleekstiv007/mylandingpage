import Card from "./components/home/card";
import { SiAccenture } from "react-icons/si";
import monieman from "./monieman.png";
import Nav from "./components/home/nav";
import { FaCaretRight } from "react-icons/fa";
import { MdOutlineReorder } from "react-icons/md";
import businessacct from "./businessacct.png";
import expensecards from "./expensecards.png";
import pos from "./pos.png";
import wcl from "./wcl.png";
import Carousel from "carousel-react-rcdev";
import BizAcc from "./components/BizAcc";
import {BsArrowRightShort} from "react-icons/bs";
import arsenal from "./simple/arsenal.jpg";
import barca from "./simple/barca.jpg.webp";
import cbnaija from "./simple/cbnaija.jpg";
import united from "./simple/united.jpg";
import {TfiLinkedin}from "react-icons/tfi";
import {TfiTwitterAlt} from "react-icons/tfi";
import {BsFacebook} from  "react-icons/bs";
import {BsInstagram} from  "react-icons/bs";








function App() {
  return (
    <div className="bg-white">
      <section className="flex flex-col lg:h-screen md:px-24">
        <Nav />

        <div className="flex flex-col justify-between w-full md:flex-row m-5 sm:text-center items-center h-[100%]">
          <div>
            <article>
              <h1 className="text-center text-[#065AC8] font-semibold md:flex justify-start text-4xl md:text-6xl">
                <b className="font-mono text-7xl tracking-tighter">Manage</b>{" "}
                <br />
              </h1>
              <h1 className="text-center text-[#065AC8] font-semibold md:flex justify-start text-4xl md:text-6xl">
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

            <div className="hidden md:flex flex-start mt-1 py-6">
              <p className="md:font-semibold text-4xl mr-2 tracking-tighter">
                500k
              </p>
              <span className="md:text-slate-400 text-md tracking-tight mr-3">
                Businesses
                <br /> Supported
              </span>

              <MdOutlineReorder className="md:text-slate-300 mr-3" />

              <p className="md:font-semibold text-3xl pr-5 flex ">
                4t{" "}
                <span className="md:text-slate-400 text-xs mx-2">
                  in <br />
                  transanctions <br />
                  monthly
                </span>
              </p>
            </div>
          </div>

          <div className="hidden lg:flex w-[95%] rounded-3xl py-1 md:w-[40%]">
            <img src={monieman} alt="monieman" />
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section className="lg:hidden px-4">
        <div className="justify-center">
          <img src={monieman} alt="monieman" />
        </div>
        <div className="text-3xl font-semibold mt-5 pl-10">
          Powering <span className="text-blue-800">500,000</span> successful
          businesses
        </div>
        <div
          className="flex mb-6 md:flex-row md:px-50 gap-x-2 justify-between 
                  p-5 overflow-x-scroll md:overflow-x-hidden max-w-xsm"
        >
          <Card
            title="Easy Payment"
            body="Access Payment from your customers. Get Paid Instantly"
            className=""
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

      <section className="hidden md:visible lg:contents px-24">
        <div className="md:flex justify-start md:justify-end text-4xl font-semibold">
          <div className="hidden md:flex lg:flex-grow lg:justify-end lg:py-8 lg:items-center ">
            <hr className="md:relative left-4 bg-slate-400 h-0.5 border-0 w-[99%] md:flex flex-start" />
            <FaCaretRight className="hidden md:text-slate-400 md:flex justify-start" />
          </div>

          <div className="mt-60 lg:mt-0">
            Powering <span className="text-blue-800">500,000</span>
            <br /> successful businesses
          </div>
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

      <section>
        <div className="h-screen bg-slate-50">
          <div className="flex justify-center mb-8 text-center ">
            <p className="font-bold text-3xl mt-5">
              All the tools you need to run your <br /> business with ease
            </p>
          </div>
          <div className="grid grid-cols-2 items-center box-border justify-evenly lg:justify-center gap-6 gap-x-3 md:flex w-full px-5 mb-10">
            <div className="">
              <img
                src={businessacct}
                alt="businessacct"
                className="w-3/4"
                sizes="(min-width: 512px) 512px, 100vw"
              />
              <p className="text-2xl font-bold px-5 ml-5">Business Account</p>
            </div>

            <div>
              <img
                src={pos}
                alt="pos"
                className="w-3/4"
                sizes="(min-width: 512px) 512px, 100vw"
              />
              <p className="text-2xl font-bold px-5 ml-5 lg:ml-0">
                Point of Sale Terminal
              </p>
            </div>

            <div>
              <img
                src={expensecards}
                alt="expensecards"
                className="w-3/4"
                sizes="(min-width: 512px) 512px, 100vw"
              />
              <p className="text-2xl font-bold px-5 ml-10">Expense Cards</p>
            </div>

            <div>
              <img
                src={wcl}
                alt="wcl"
                className="w-3/4"
                sizes="(min-width: 512px) 512px, 100vw"
              />
              <p className="text-2xl font-bold px-5 ml-8">Working Capital</p>
            </div>
          </div>
        </div>
      </section>

      <BizAcc />
      <section>
        <div className="p-28 bg-blue-800 ">
          <div className="pb-5">
            <p className="font-4xl font-bold text-center">
              Join 600,000+ business owners who trust Moniepoint for all their
              business needs.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="flex bg-gray-400 p-2 rounded hover:bg-gray-500">
              Get Started
              <BsArrowRightShort className="mt-1 mx-1" />
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="items-center px-20h py-24 bg-slate-100">
          {/* <div className=""> */}
          <h3 className=" font-semibold text-2xl flex justify-center pb-5">
            Learn all you need to know to advance your business
          </h3>
          {/* </div> */}

          <div className="flex justify-center w-1/k2 lg:w-full">
            <Carousel>
              <img
                src={barca}
                className="lg:w-1/3 mr-3"
                alt="barca"
                title="imagem"
              />

              <img
                src={arsenal}
                className="lg:w-1/3"
                alt="arsenal"
                title="imagem"
              />

              <img
                src={cbnaija}
                alt="cbnaijja"
                className="lg:w-1/3"
                title="imagem"
              />
              <img
                src={united}
                alt="united"
                className="lg:w-1/3"
                title="imagem"
              />
              <img
                src={barca}
                alt="barca"
                className="lg:w-1/3"
                title="imagem"
              />
            </Carousel>
          </div>

          {/* <div className=" snap-x flex overflow-scroll overflow-y-hidden gap-4">
            <div className="w-1/3 scroll-ml-6 snap-start">
              <img src={arsenal} alt="arsenal" />
            </div>
            <div className="w-1/3 scroll-ml-6 snap-start">
              <img src={barca} alt="barca" />
            </div>
            <div className="w-1/3 scroll-ml-6 snap-start">
              <img src={cbnaija} alt="cbnaija" />
            </div>
            <div className="w-1/3 scroll-ml-6 snap-start">
              <img src={united} alt="united" />
            </div>
            <div className="w-1/3 scroll-ml-6 snap-start">
              <img src={united} alt="united" />
            </div>
            <div className="w-1/3 scroll-ml-6 snap-start">
              <img src={united} alt="united" />
            </div>
          </div> */}

          <footer className="bg-sky-900 mt-10 p-28">
            <div className="text-white">
              <div className="flex flex-col md:flex px-10">
                <div className="flex justify-between gap-10">
                  <div>
                  <h3 className="font-bold text-xl">Connect with us</h3>
                  <div className="pb-3">
                    <p>support@wegotyou.com</p>
                    <p>01-25 555 554</p>
                  </div>
                  <div className="flex gap-3">
                    <BsFacebook />
                    <BsInstagram />
                    <TfiLinkedin />
                    <TfiTwitterAlt />
                  </div>
                  </div>
                  
                  <div className="mx-5">
                    <p className="font-bold text-lg">Head Office</p>
                    <p>Oyo, Ibadan</p>
                    <p>idi Agba</p>
                    <p>Ilora, Oyo</p>
                  </div>
                  <div className="mx-5">
                    <p className="font-bold text-lg">Company</p>
                    <p>About Us</p>
                    <p>Join the team</p>
                    <p>Contact Us</p>
                  </div>
                  <div className="mx-5">
                    <p className="font-bold text-lg">Our Product</p>
                    <p>Business Account</p>
                    <p>Pos Terminal</p>
                    <p>Expense Card</p>
                    <p>Working Capital Loans</p>
                    <p>Payment Gateway</p>
                  </div>
                  <div className="mx-5">
                    <p className="font-bold text-lg">Resources </p>
                    <p>Help Center</p>
                    <p>Learning Center</p>
                    <p>Whistleblower Policy</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default App;
