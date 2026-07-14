const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between">

      <div>

        <p className="text-gray-500 text-sm">
          {title}
        </p>

        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>

      </div>

      <div
        className="text-white text-3xl p-4 rounded-full"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

    </div>
  );
};

export default StatCard;