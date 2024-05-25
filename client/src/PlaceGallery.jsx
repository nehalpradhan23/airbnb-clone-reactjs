import { useState } from "react";

export default function PlaceGallery({ place }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  
  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-black text-white min-h-screen">
        <div className="bg-black p-8 grid gap-4">
          <div className="">
            <h2 className="text-3xl mr-48">Photos of {place.title}</h2>
            <button
              className="fixed right-12 top-6 flex gap-1 py-2 px-4 rounded-2xl items-center shadow shadow-black bg-white text-black"
              onClick={() => setShowAllPhotos(false)}
            >
              <svg fill="none" viewBox="0 0 24 24" className="w-6 h-6">
                <path
                  fill="currentColor"
                  d="M16.396 7.757a1 1 0 010 1.415l-2.982 2.981 2.676 2.675a1 1 0 11-1.415 1.415L12 13.567l-2.675 2.676a1 1 0 01-1.415-1.415l2.676-2.675-2.982-2.981A1 1 0 119.02 7.757L12 10.74l2.981-2.982a1 1 0 011.415 0z"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M4 1a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3V4a3 3 0 00-3-3H4zm16 2H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Close photos
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((photo) => (
              <div className="">
                <img src={"http://localhost:4000/uploads/" + photo} />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
        <div>
          {place.photos?.[0] && (
            <div className="">
              <img
                onClick={() => setShowAllPhotos(true)}
                className="aspect-square cursor-pointer object-cover"
                src={"http://localhost:4000/uploads/" + place.photos?.[0]}
                alt=""
              />
            </div>
          )}
        </div>
        <div className="grid">
          {place.photos?.[1] && (
            <img
              onClick={() => setShowAllPhotos(true)}
              className="aspect-square cursor-pointer object-cover"
              src={"http://localhost:4000/uploads/" + place.photos?.[1]}
              alt=""
            />
          )}
          <div className="overflow-hidden">
            {place.photos?.[2] && (
              <img
                onClick={() => setShowAllPhotos(true)}
                className="aspect-square cursor-pointer object-cover relative top-2"
                src={"http://localhost:4000/uploads/" + place.photos?.[2]}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
      {/* show more photos button =========================================== */}
      <button
        onClick={() => {
          setShowAllPhotos(true);
          window.scrollTo(0, 0);
        }}
        className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow-md shadow-gray-500"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 16c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M6 16c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m12 12c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
        </svg>
        Show more photos
      </button>
    </div>
  );
}
