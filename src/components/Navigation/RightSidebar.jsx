export const RightSidebar = () => {
  return (
    <aside className="hidden md:block w-1/5 h-full p-4">
      <h3 className="text-lg font-bold mb-4">More Places</h3>
      <div className="mb-4">
        <p>Place 1</p>
      </div>
      <div className="mb-4">
        <p>Place 2</p>
      </div>
      <div className="mb-4">
        <p>Recommendations</p>
      </div>
      {/* Add more cards or recommendations here */}
    </aside>
  );
};
