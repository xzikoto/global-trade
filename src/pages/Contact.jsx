import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <div className="py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Свържете се с нас</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Име</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Имейл</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Съобщение
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg h-32"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Изпрати
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Информация за контакт</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Адрес</h3>
                <p>ул. Примерна 123</p>
                <p>София 1000, България</p>
              </div>
              <div>
                <h3 className="font-semibold">Телефон</h3>
                <p>+359 888 123 456</p>
              </div>
              <div>
                <h3 className="font-semibold">Имейл</h3>
                <p>info@globaltrade.com</p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-8 h-[300px] rounded-lg overflow-hidden">
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.9528912750456!2d23.321796!3d42.697297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQxJzUwLjMiTiAyM8KwMTknMTguNSJF!5e0!3m2!1sen!2sbg!4v1647427842774!5m2!1sen!2sbg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
