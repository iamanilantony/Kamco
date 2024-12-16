const BentoGrid = () => {
  const cards = [
    {
      title: "Agricultural Revolution",
      description:
        "Tools have advanced, making farming more efficient and predictable.",
      imageUrl: "https://via.placeholder.com/300x150", // Replace with actual image
      span: "col-span-2", // Takes more grid columns
    },
    {
      title: "Quality Machinery",
      description:
        "KAMCO offers ISO 9001:2015 certified Tillers, Tractors, and Engines for farmers.",
      imageUrl: "https://via.placeholder.com/150", // Replace with actual image
      span: "row-span-2",
    },
    {
      title: "Our Mission",
      description:
        "We will accomplish our vision with undivided and undeterred commitment towards innovative quality products, through inspired individuals, simplified systems and 5X leadership.",
      span: "row-span-2",
    },
    {
      title: "Our Vision",
      description:
        "We will be a 3000 Cr Global brand in diversified farm mechanization products and solutions by 2025.",
      imageUrl: "https://via.placeholder.com/300x200", // Replace with actual image
      span: "col-span-2",
    },
    {
      title: "KAMCO's Leadership",
      description:
        "State-owned KAMCO promotes mechanized farming for small farmers.",
      span: "col-span-1",
    },
    {
      title: "Farmers Training",
      description: "KAMCO provides training on modern farming techniques.",
      imageUrl: "https://via.placeholder.com/300x150", // Replace with actual image
      span: "col-span-2",
    },
  ];

  return (
    <div className="p-8 bg-gray-50">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md p-4 flex flex-col justify-between ${card.span}`}
          >
            {card.imageUrl && (
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-auto rounded-lg mb-4 object-cover"
              />
            )}
            <div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
