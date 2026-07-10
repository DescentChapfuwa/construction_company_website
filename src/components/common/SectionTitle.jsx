const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-[#1F2937]">{title}</h2>

      <p className="mt-4 text-gray-600 text-lg">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
