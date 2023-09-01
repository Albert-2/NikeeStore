import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="border-2 border-black flex md:flex-row flex-col items-center justify-between sm:px-16 px-4 py-16 gap-10">
        <h1 className="font-bold text-4xl sm:max-w-sm md:text-left text-center">
          Sign Up for <span className="text-orange-500">Updates</span> &
          Newsletter
        </h1>
        <div className="sm:min-w-[400px] relative md:space-y-0 space-y-6">
          <input
            type="email"
            placeholder="subscribe@nike.com"
            className="border-2 border-gray-400 py-5 px-5 w-full rounded-full"
          />
          <button className="bg-orange-600 p-2 text-white rounded-3xl px-7 text-lg font-semibold md:absolute md:w-auto w-full right-[30px] top-[12px]">
            Sign Up{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
