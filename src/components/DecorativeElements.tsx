
const DecorativeElements = () => {
  return (
    <>
      {/* Right side floating label */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-10">
        <div className="transform rotate-90 origin-center">
          <span className="font-manrope text-sm uppercase tracking-widest text-white/60">
            FIELD ENTRY – CHAPTER ONE
          </span>
        </div>
      </div>

      {/* Bottom-right corner copyright */}
      <div className="absolute bottom-8 right-8 z-10">
        <span className="font-manrope text-xs text-white/60">
          © Divyansh, 2025
        </span>
      </div>

      {/* Bottom-left corner footer label */}
      <div className="absolute bottom-8 left-8 z-10">
        <span className="font-manrope text-xs text-white/50">
          ✦ Built in Stillness, 2025
        </span>
      </div>
    </>
  );
};

export default DecorativeElements;
