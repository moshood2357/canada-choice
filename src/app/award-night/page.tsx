
import Image from "next/image";
import Link from "next/link";


const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  // "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
  "/img9.jpg",
  "/img10.jpg",
  "/img11.jpg",
  "/img12.jpg",
  // "/img13.jpg",
  // "/img14.jpg",
  // "/img15.jpg",
  // "/img16.jpg",
  // "/img17.jpg",
  // "/im18.jpg",
  // "/img19.jpg",
  // "/img20.jpg",
  // "/img21.jpg",
  // "/img22.jpg",
  // "/img23.jpg",
  // "/img24.jpg",
  "/img25.jpg",
  
];

const GALLERY_LINK =
  "https://hlc5.pixieset.com/immigrantatlargecanadaawardnight/";

export default function EventGallery() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* bg-[#0d2c50] */}
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">
          Immigrant At Large Canada Award Night
        </h1>
        <p className="mt-4 text-white max-w-2xl mx-auto">
          A night of excellence, recognition, and celebration.  
          Explore memorable moments from the Immigrant At Large Canada Award Night.
        </p>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <Link
            key={index}
            href={GALLERY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl shadow"
          >
            <Image
              src={img}
              width={500}
              height={500}
              alt={`Event moment ${index + 1}`}
              className="w-full h-y4 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white font-semibold">
                View Full Gallery
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <a
          href={GALLERY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
        >
          View All Photos
        </a>
      </div>
    </section>
  );
}
