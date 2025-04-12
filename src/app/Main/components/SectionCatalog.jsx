import React from "react";

// Ma'lumotlar massivi (rasm manzillari public papkaga nisbatan)
const catalogItems = [
  {
    id: 1,
    title: "Люстры",
    price: "540Р",
    image: "/catalog/cat1.png",
  },
  { id: 2, title: "Светильники", price: "540Р", image: "/catalog/cat2.png" },
  { id: 3, title: "Бра", price: "540Р", image: "/catalog/cat3.png" },
  { id: 4, title: "Торшеры", price: "540Р", image: "/catalog/cat4.png" },
  {
    id: 5,
    title: "Настольные лампы",
    price: "540Р",
    image: "/catalog/cat5.png",
  },
  { id: 6, title: "Споты", price: "540Р", image: "/catalog/cat6.png" },
];

// Arrow icon komponenti (TIP ANNOTATSIYASI O'CHIRILDI)
const ArrowIcon = (
  { className = "" } // <<<--- O'zgarish shu yerda
) => (
  <svg
    width="18"
    height="12"
    viewBox="0 0 18 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <path
      d="M12.5 1.5L17 6M17 6L12.5 10.5M17 6H1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function SectionCatalog() {
  return (
    // ... qolgan JSX kodi ...
    <div className="py-10 px-5 max-w-6xl mx-auto font-sans">
      {/* Yuqori qism: Sarlavha va Tugma */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Каталог
        </h2>
        <button className="inline-flex items-center py-2.5 px-6 border border-gray-300 rounded-full bg-white text-gray-800 text-base hover:bg-gray-100 transition duration-200 ease-in-out self-start sm:self-auto">
          Весь каталог <ArrowIcon className="ml-2" />
        </button>
      </div>

      {/* Asosiy qism: Kartochkalar gridi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {catalogItems.map((item) => (
          // Har bir kartochka
          <div
            key={item.id}
            className="relative bg-gray-100 rounded-2xl p-6 flex flex-col justify-between min-h-[200px] overflow-hidden transition duration-200 ease-in-out hover:translate-y-[-4px] hover:shadow-md"
          >
            {/* Kartochka ichidagi kontent (matn qismi) */}
            <div className="flex flex-col items-start flex-grow mb-4 z-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <span className="text-base text-gray-600 flex items-center mt-auto">
                {" "}
                {/* mt-auto buni pastga itaradi */}
                От {item.price} <ArrowIcon className="ml-1.5" />
              </span>
            </div>

            {/* Rasm uchun konteyner (absolute pozitsiya) */}
            <div className="absolute right-4 bottom-4 w-1/2 max-w-[150px] flex items-end justify-end z-0">
              <img
                src={item.image}
                alt={item.title}
                className="max-w-full max-h-[120px] h-auto object-contain"
                loading="lazy" // Lazy loading rasmlar uchun
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionCatalog;
