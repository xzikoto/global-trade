/* eslint-disable react/prop-types */
export function PageHeader({ title, description }) {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-4">{title}</h1>
        {description && (
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
