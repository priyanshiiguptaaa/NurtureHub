import React from "react";
import Photo1 from "../../assets/pic/first.jpg";
import Photo2 from "../../assets/pic/visit.jpg";
import Photo3 from "../../assets/pic/ssecond.jpg";
import Photo4 from "../../assets/pic/third.jpg";
import Photo5 from "../../assets/pic/fourth.jpg";
import Photo6 from "../../assets/pic/fifth.jpg";
import Photo7 from "../../assets/pic/sixth.jpg";
import Photo8 from "../../assets/pic/seventh.jpg";
import Photo9 from "../../assets/pic/eighth.jpg";
import { Slide, Fade } from "react-awesome-reveal";

const CardsData = [
  {
    id: 1,
    img: Photo1,
    title: "First Visit",
    desc: [
      "Blood pressure, health check, and blood test",
      "Discuss early health and lifestyle advice",
    ],
  },
  {
    id: 2,
    img: Photo2,
    title: "19–20 Weeks",
    desc: [
      "Anatomy scan (check baby's growth and development)",
      "Blood pressure check",
    ],
  },
  {
    id: 3,
    img: Photo3,
    title: "22 Weeks",
    desc: [
      "Blood pressure, general health check",
      "Check baby's heartbeat and movements",
    ],
  },
  {
    id: 4,
    img: Photo4,
    title: "26–27 Weeks",
    desc: [
      "Blood pressure check",
      "Measure tummy for baby’s growth",
      "Check baby’s heartbeat and movements",
    ],
  },
  {
    id: 5,
    img: Photo5,
    title: "28 Weeks",
    desc: [
      "Blood pressure, general health check",
      "Measure tummy for baby’s growth",
      "Check baby's heartbeat and movements",
      "Discuss birth plan",
      "Blood test (for anemia, platelets)",
      "Anti-D injection if Rh negative",
      "Pertussis vaccination",
      "Urine test (for UTI or high blood pressure)",
    ],
  },
  {
    id: 6,
    img: Photo6,
    title: "32 Weeks",
    desc: [
      "Blood pressure, general health check",
      "Measure tummy for baby’s growth",
      "Check baby's heartbeat and movements",
      "Urine test (for UTI or high blood pressure)",
    ],
  },
  {
    id: 7,
    img: Photo7,
    title: "34–36 Weeks",
    desc: [
      "Blood pressure, general health check",
      "Measure tummy for baby’s growth",
      "Check baby's heartbeat and movements",
      "Urine test (for UTI or high blood pressure)",
      "Group B Strep (GBS) swab",
      "Anti-D injection if Rh negative",
      "Assess baby’s position and station",
    ],
  },
  {
    id: 8,
    img: Photo8,
    title: "38–39 Weeks",
    desc: [
      "Blood pressure, general health check",
      "Measure tummy for baby’s growth",
      "Check baby's heartbeat and movements",
      "Urine test (for UTI or high blood pressure)",
      "Assess baby’s position and station",
    ],
  },
  {
    id: 9,
    img: Photo9,
    title: "40–41 Weeks",
    desc: [
      "Blood pressure, general health check",
      "Measure tummy for baby’s growth",
      "Check baby's heartbeat and movements",
      "Urine test (for UTI or high blood pressure)",
      "Assess baby’s position and station",
      "If overdue, check baby's heartbeat and amniotic fluid",
    ],
  },
];

const AnimatedCard = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-white font-bold font-sans text-2xl mb-10 mt-5">
        Routine Check-Ups
      </h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
        {CardsData.map(({ id, img, title, desc }) => (
          <div
            key={id}
            className="text-white shadow-lg rounded-lg overflow-hidden relative group w-64 h-72"
          >
            <img
              src={img}
              alt=""
              className="w-full h-36 object-cover rounded-t-lg"
            />
            {/* Overlay Section */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 p-3 bg-black/60 backdrop-blur-sm transition-opacity duration-500">
              <Slide cascade direction="up" triggerOnce>
                <h1 className="text-xl font-semibold">{title}</h1>
              </Slide>
              <Fade cascade damping={0.1} triggerOnce>
                <ul className="list-disc ml-4 space-y-1 text-sm">
                  {desc.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </Fade>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCard;
