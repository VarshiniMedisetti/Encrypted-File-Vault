import { services } from "../data/services";

function Services() {
  return (
    <div className="px-6 md:px-20 py-16 grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-[#1c1235] p-8 rounded-xl border border-purple-700"
        >
          <h3 className="text-xl text-purple-400 font-semibold">
            {service.title}
          </h3>
          <p className="mt-4 text-gray-400">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Services;
