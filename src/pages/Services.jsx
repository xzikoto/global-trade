export default function Services() {
  const services = [
    {
      title: "Слънчогледово масло",
      description:
        "Внос и износ на рафинирано и нерафинирано слънчогледово масло",
      image: "https://source.unsplash.com/800x600/?sunflower-oil",
    },
    {
      title: "Соево масло",
      description:
        "Търговия с висококачествено соево масло за хранителната индустрия",
      image: "https://source.unsplash.com/800x600/?soybean-oil",
    },
  ];

  return (
    <div className="py-16">
      <div className="container">
        <h1 className="text-center mb-12">Нашите Услуги</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
