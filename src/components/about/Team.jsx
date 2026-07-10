import team from "../../data/team";
import SectionTitle from "../common/SectionTitle";

const Team = () => {
  return (
    <section className="bg-[#F9FAFB] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Meet Our Team"
          subtitle="Experienced professionals dedicated to quality."
        />

        <div className="grid md:grid-cols-4 gap-8 mt-12">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>

                <p className="text-[#F4B400] font-semibold mt-2">
                  {member.position}
                </p>

                <p className="mt-4 text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
