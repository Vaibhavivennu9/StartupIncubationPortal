const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between hover:shadow-xl transition">

      <div>
        <h3 className="text-gray-500 text-sm font-semibold">
          {title}
        </h3>

        <p className="text-2xl font-bold text-[#4A4A4A] mt-2">
          {value}
        </p>
      </div>

      <div
        className="text-4xl p-4 rounded-full text-white"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

    </div>
  );
};

export default StatCard;