function App() {
  return (
    <div className="bg-white">
      <section className="flex flex-col h-screen md:px-24">
        <nav className="flex justify-between pt-6">
          <div>
            <h1>BUYCOIN</h1>
          </div>
          <div className="w-5/12 hidden md:flex flex-3 justify-between">
            <span>Home</span>
            <span>Features</span>
            <span>Safety</span>
            <span>Blogs</span>
            <span>Contacts</span>
          </div>
          <div className="hidden md:block">
            <button className="bg-[#065AC8] md:rounded p-2 px-2/3 py-2/3">
              SIGN IN
            </button>
          </div>
        </nav>

        <div className="flex flex-col md:flex-row m-5 justify-between items-center h-full">
          <div>
            <article>
              <h1 className="flex flex-col text-3xl md:text-5xl tracking-wider">
                BuyCoin BlockChain
              </h1>
              Secure and Easy Way to Trade
            </article>
          </div>

          <div className="flex flex-col justify-between h-[85%] bg-transparent md:w-5/12 px-24 rounded-3xl py-24 m-5 text-2xl md:bg-white">
            <h1 className="text-3xl">BuyCoin ICO:</h1>
            <p className=" bg-red-300 text-lg flex md:rounded px-2 py-3">
              Discount 33% from final price
            </p>
            <div className=" px-2 py-3  sm:rounded bg-[#0d6efd]">
              <span>Open an account</span>
            </div>
          </div>
        </div>
      </section>

         <section>
          <div className="flex justify-end text-4xl"><h1>Powering <span className="text-blue-800">500,000</span><br /> successful businesses</h1></div>
                     <div className="flex md:flex-row md:px-50 gap-x-2 justify-between 
                        overflow-x-auto p-5 bg-slate-50">
          <div className="bg-white w-[30%]">
            <h2>Easy Payment</h2>
            <p>Access Payment from your customers. Get Paid Instantly</p>
          </div>
          <div className="bg-white w-[30%]">
            <h2>Expand your business</h2>
            <p>
              Get loans you need to expand your business with interest rate at
              22%
            </p>
          </div>
          <div className="bg-white w-[30%]">
            <h2>Complete Control</h2>
            <p>
              Track business expenses and manage employees need all in one place
            </p>
          </div>
                    </div>
         </section>

         
    </div>
  );
}

export default App;
