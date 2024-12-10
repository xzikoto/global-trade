export default function About() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1>За Нас</h1>
            <p className="text-lg mb-6">
              GlobalTrade е водеща компания в търговията с хранителни масла,
              специализирана във вноса и износа на едро на слънчогледово и соево
              масло.
            </p>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Нашата мисия</h2>
              <p>
                Да осигуряваме висококачествени хранителни масла на нашите
                клиенти по целия свят, като поддържаме най-високите стандарти за
                качество и обслужване.
              </p>
            </div>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://source.unsplash.com/800x600/?factory,industrial"
              alt="Our facility"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
