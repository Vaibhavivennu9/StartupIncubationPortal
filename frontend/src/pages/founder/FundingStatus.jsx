const FundingStatus = () => {
  const funding = {
    requested: "₹20 Lakhs",
    approved: "₹15 Lakhs",
    status: "Approved",
    investor: "Startup Incubation Cell",
    remarks:
      "Funding approved for MVP development. Submit progress report after 3 months.",
    updated: "20 July 2026",
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#4A4A4A] mb-8">
        Funding Status
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-gray-500 font-semibold">Funding Requested</h3>
          <p className="text-2xl font-bold mt-2 text-[#4A4A4A]">
            {funding.requested}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-gray-500 font-semibold">Funding Approved</h3>
          <p className="text-2xl font-bold mt-2 text-green-600">
            {funding.approved}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-gray-500 font-semibold">Application Status</h3>
          <p className="text-2xl font-bold mt-2 text-blue-600">
            {funding.status}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-gray-500 font-semibold">Investor</h3>
          <p className="text-2xl font-bold mt-2 text-[#4A4A4A]">
            {funding.investor}
          </p>
        </div>

      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mt-8">

        <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">
          Investor Remarks
        </h2>

        <p className="text-gray-700 leading-7">
          {funding.remarks}
        </p>

      </div>

      <div className="mt-6 text-gray-500">
        Last Updated : <strong>{funding.updated}</strong>
      </div>

    </div>
  );
};

export default FundingStatus;