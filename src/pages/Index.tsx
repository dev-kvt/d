
import Navbar from '../components/Navbar';
import MainContent from '../components/MainContent';
import DecorativeElements from '../components/DecorativeElements';

const Index = () => {
  return (
    <div className="min-h-screen w-screen relative overflow-hidden">
      {/* Background Video */}
      <video  
        src="https://res.cloudinary.com/dxz3xr3xc/video/upload/v1750950951/u2839156466_Intertwining_light_forms_dancing_like_DNA_helix_u_3465b33c-2a91-40d5-b4bf-5f4ffa0e22ea_0_zpavir.mp4"  
        className="absolute inset-0 w-full h-full object-cover"  
        autoPlay  
        muted  
        loop  
        playsInline
      />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30 z-0" />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex items-center justify-start min-h-screen">
        <MainContent />
      </div>

      {/* Decorative Elements */}
      <DecorativeElements />
    </div>
  );
};

export default Index;
