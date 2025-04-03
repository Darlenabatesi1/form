import React from "react";

function TwitterForm () {
  return (
 <div className="flex bg-gray-700 h-screen justify-center items-center">
<div className="flex bg-black w-200 h-130 shadow-lg rounded-2xl">

<div className="flex-1 flex justify-center mb-4 bg-white h-full rounded-2xl">
  <img src="https://cdn.storifyme.xyz/accounts/cashify-in-0561312/assets/f-step-2-how-to-post-gif-on-instagram-comment-section-34801684406015208.webp?t=1684408804000" alt="" className="w-full h-full object-cover rounded-2xl" />
</div>
  <div className="flex-1  p-6 ">
<h2 className="text-2xl font-bold text-white text-center">Instagram</h2>

<input type="text" placeholder="Username , phone or email" className="w-full text-white border border-gray-500 p-3 mt-10 rounded-[5px]" />
<input type="password" placeholder="Password" className="w-full text-white border border-gray-500 p-3 mt-4 rounded-[5px]" />
<button className="w-full bg-blue-400 text-white font-bold p-3 mt-4 rounded-[5px] ">LOGIN</button>
<div className="p-1  justify-center items-center">
<p className="text-center text-white mt-4">OR</p>
<h4 className="text-blue-600 decoration-0 text-center mt-4 "><a href="">Forgot Password?</a></h4>
<p className="text-white mt-4 text-center">Don't have  Account?<p className="text-blue-600">Signup</p></p>
</div>
  </div>
</div>
 </div>
  );
};

export default TwitterForm;
