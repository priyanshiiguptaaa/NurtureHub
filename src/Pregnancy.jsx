import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Tools from './Tools'; // Import the Tools component

const PregnancyCard = ({ week, content, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={`${week} weeks pregnant`} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#2d3748] mb-3">
          {week} weeks pregnant
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
};

const Pregnancy = () => {
  const weeklyInfo = [
    {
      week: "2",
      content: "Ovulation may happen about two weeks after your last period began. If egg meets sperm, you're on your way to being pregnant.",
      imageUrl: "https://assets.babycenter.com/ims/2018/06/pregnancy-week-2-fertilization_4x3.png"
    },
    {
      week: "4",
      content: "Your baby is now an embryo the size of a poppy seed, and the amniotic sac and fluid are forming around it.",
      imageUrl: "https://assets.babycenter.com/ims/2018/06/pregnancy-week-4-yolk-sac_4x3.png"
    },
    {
      week: "6",
      content: "Your baby's heart begins to beat, and the neural tube (precursor to the brain and spinal cord) is forming.",
      imageUrl: "https://assets.babycenter.com/ims/2018/06/pregnancy-week-6-webbed-hands_4x3.png"
    },
    {
      week: "8",
      content: "Your baby's heart is beating at a rapid 150 to 170 times per minute, and tiny fingers and toes are starting to form.",
      imageUrl: "https://assets.babycenter.com/ims/2018/06/pregnancy-week-8-brain-nerve-cells_4x3.png"
    },
    {
      week: "10",
      content: "Your baby is now officially a fetus and about the size of a kumquat. All essential organs have begun to form.",
      imageUrl: "https://assets.babycenter.com/ims/2018/06/pregnancy-week-8-brain-nerve-cells_4x3.png" // Replace with actual image URL if available
    },
    {
      week: "12",
      content: "Your baby's reflexes are developing, and they may start to move around more actively, though you won't feel it yet.",
      imageUrl: "https://assets.babycenter.com/ims/2018/06/pregnancy-week-8-brain-nerve-cells_4x3.png" // Replace with actual image URL if available
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-[#d4cab1] pt-24"> {/* Added pt-24 for header spacing */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center mb-12 text-[#a46b4d]">
            Early Pregnancy Development
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weeklyInfo.map((info, index) => (
              <PregnancyCard
                key={index}
                week={info.week}
                content={info.content}
                imageUrl={info.imageUrl}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-[#a46b4d] text-lg">
              Each week brings exciting new developments in your baby's growth. Click on any card to learn more.
            </p>
          </div>

          {/* Include the Tools Component */}
          <div className="mt-12">
            <Tools />
          </div>
        </div>
      </main>

    </div>
  );
};

export default Pregnancy;
