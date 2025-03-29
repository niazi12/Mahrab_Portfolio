"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const publications = [
  {
    title:
      "Automated Student Review System with Computer Vision and Convolutional Neural Network",
    authors: "S. C. Siam, A. Faisal, N. Mahrab, A. B. Haque, M. N. I. Suvon",
    conference: "2021 International Conference on Computing, Communication, and Intelligent Systems (ICCCIS)",
    location: "Greater Noida, India",
    year: 2021,
    doi: "10.1109/ICCCIS51004.2021.9397164",
    link: "https://doi.org/10.1109/ICCCIS51004.2021.9397164",
  },
  {
    title:
      "Facial Expression Based Automated Restaurant Food Review System using CNN",
    authors: "N. Mahrab, S. A. Salim, A. I. Ali, I. J. Mim, R. Khan",
    conference: "2021 IEEE International Conference on Artificial Intelligence in Engineering and Technology (IICAIET)",
    year: 2021,
    doi: "10.1109/IICAIET51634.2021.9573899",
    link: "https://doi.org/10.1109/IICAIET51634.2021.9573899",
  },
];

export default function Publication() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Publications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{pub.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{pub.authors}</p>
              <p className="text-sm text-gray-500">{pub.conference}, {pub.year}</p>
              <Link href={pub.link} target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-500 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Publication
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}