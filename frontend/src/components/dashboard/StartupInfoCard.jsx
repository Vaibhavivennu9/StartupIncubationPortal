const StartupInfoCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <h3 className="text-sm font-semibold text-gray-500 mb-2">
        {title}
      </h3>

      <p className="text-lg font-bold text-[#4A4A4A]">
        {value}
      </p>
    </div>
  );
};

export default StartupInfoCard;