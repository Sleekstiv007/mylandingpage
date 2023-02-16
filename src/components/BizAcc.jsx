import React from "react";
import slidesm from "../simple/slidesm.png";
import { IoBagRemove } from "react-icons/io5";
import { GoVerified } from "react-icons/go";
import { FaHandHoldingUsd } from "react-icons/fa";
import { BiCheckShield } from "react-icons/bi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoIosNotifications } from "react-icons/io";
import {BsArrowRightShort} from "react-icons/bs";




const BizAcc = () => {
  return (
    <div>
      <section className="flex bg-yelwelow-400">
        <div className="py-12 w-full mt-8 bg-cyedan-500">
          <div className="font-bold text-center text-sky-800 mb-3">
            BUSINESS ACCOUNT
          </div>
          <div className="text-center font-semibold text-2xl leading-7">
            A free bank account to power all your business
          </div>
          <div className="lg:flex-row md:flex md:items-center md:justify-center flex flex-col-reverse mx-5 lg:ml-40">
            <div className="mt-20 flex flex-col md:zsml-20 mx-0 w-full md:w-[400px] lg:w-1/2 bg-rered-700 p-8">
              <div className=" flex md:flex border-b-2 border-blue-900 border-opacity-30 pb-3 p-5 gap-2 ">
                <IoBagRemove
                  className="text-gray-600"
                  style={{ width: "24px", height: "24px" }}
                />
                <p className="">Open an account for free</p>
              </div>
              <div className="flex md:flex border-b-2 border-blue-900 border-opacity-30 pb-3 p-5 gap-2">
                <GoVerified
                  className="text-gray-600"
                  style={{ wiidth: "24px", height: "24px" }}
                />
                <p>Get verified within a few minutes</p>
              </div>

              <div className=" flex md:flex border-b-2 border-blue-900 border-opacity-30 pb-3 p-5 gap-2">
                <FaHandHoldingUsd
                  className="text-gray-600"
                  style={{ width: "24px", height: "24px" }}
                />
                <p>No hidden fees</p>
              </div>

              <div className=" flex md:flex border-b-2 border-blue-900 border-opacity-30 pb-3 p-5 gap-2">
                <BiCheckShield
                  className="text-gray-600"
                  style={{ width: "24px", height: "24px" }}
                />
                <p>Get complete control over your accounts</p>
              </div>

              <div className="flex md:flex border-b-2 border-blue-900 border-opacity-30 pb-3 p-5 gap-2">
                <TfiHeadphoneAlt
                  className="text-gray-600"
                  style={{ width: "24px", height: "24px" }}
                />
                <p>Round-the clock business banking support</p>
              </div>

              <div className=" flex md:flex border-b-2 border-blue-900 border-opacity-30 pb-3 p-5 gap-2">
                <IoIosNotifications
                  className="text-gray-600"
                  style={{ width: "24px", height: "24px" }}
                />
                <p>Instant Notification</p>
              </div>
              <div className="pt-12">
                <button className="bg-blue-700 flex justify-center ml-8 p-4 rounded md:flex ">
                  Get Your Account
                  <BsArrowRightShort className="mx-3 mt-1" />
                </button>
              </div>
            </div>
            <div className="md:mr-32">
              <img
                src={slidesm}
                alt="slidesm"
                className="h-[500px] mt-5 bg-grfreen-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BizAcc;
