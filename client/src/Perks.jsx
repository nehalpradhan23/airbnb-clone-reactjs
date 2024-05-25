import React from "react";

export default function Perks({ selected, onChange }) {
  function handleCbClick(e) {
    const { checked, name } = e.target;
    if(checked){
      onChange([...selected,name]);
    }else{
      onChange([...selected.filter(selectedName => selectedName !== name)])
    }
  }
  return (
    <>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes('wifi')} name="wifi" onChange={handleCbClick} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
          />
        </svg>
        <span>Wifi</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes('parking')} name="parking" onChange={handleCbClick} />
        <svg viewBox="0 0 1024 1024" fill="currentColor" className="w-6 h-6">
          <path d="M959 413.4L935.3 372a8 8 0 00-10.9-2.9l-50.7 29.6-78.3-216.2a63.9 63.9 0 00-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2-50.8-29.6a8 8 0 00-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40 60.3-35.2a8 8 0 003-10.8zM264 621c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm388 75c0 4.4-3.6 8-8 8H380c-4.4 0-8-3.6-8-8v-84c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v36h168v-36c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v84zm108-75c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zM220 418l72.7-199.9.5-1.3.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220z" />
        </svg>
        <span>Free Parking</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes('tv')} name="tv" onChange={handleCbClick} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
        <span>TV</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes('pets')} name="pets" onChange={handleCbClick} />
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M21 6h-2l-1.27-1.27A2.49 2.49 0 0016 4h-2.5A2.64 2.64 0 0011 2v6.36a4.38 4.38 0 001.13 2.72 6.57 6.57 0 004.13 1.82l3.45-1.38a3 3 0 001.73-1.84L22 8.15a1.06 1.06 0 000-.31V7a1 1 0 00-1-1zm-5 2a1 1 0 111-1 1 1 0 01-1 1z" />
          <path d="M11.38 11.74A5.24 5.24 0 0110.07 9H6a1.88 1.88 0 01-2-2 1 1 0 00-2 0 4.69 4.69 0 00.48 2A3.58 3.58 0 004 10.53V22h3v-5h6v5h3v-8.13a7.35 7.35 0 01-4.62-2.13z" />
        </svg>
        <span>Pets</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes('entrance')} name="entrance" onChange={handleCbClick} />
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M21.8 17v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3V17M13 11h2v2h-2v-2m-4 2H7v-2h2v2m4 6h-1V5h5v6.44c.61-.27 1.29-.44 2-.44V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14H2v2h11v-2m-3 0H5V5h5v14z" />
        </svg>
        <span>Private entrance</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes('swimming')} name="swimming" onChange={handleCbClick} />
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M21.005 6.002 A2.002 2.002 0 0 1 19.003 8.004 A2.002 2.002 0 0 1 17.001 6.002 A2.002 2.002 0 0 1 21.005 6.002 z" />
          <path d="M18.875 13.219c-.567.453-.978.781-1.878.781-.899 0-1.288-.311-1.876-.781-.68-.543-1.525-1.219-3.127-1.219-1.601 0-2.445.676-3.124 1.219-.588.47-.975.781-1.875.781-.898 0-1.286-.311-1.873-.78C4.443 12.676 3.6 12 2 12v2c.897 0 1.285.311 1.872.78.679.544 1.523 1.22 3.123 1.22s2.446-.676 3.125-1.22c.587-.47.976-.78 1.874-.78.9 0 1.311.328 1.878.781.679.543 1.524 1.219 3.125 1.219 1.602 0 2.447-.676 3.127-1.219.588-.47.977-.781 1.876-.781v-2c-1.601 0-2.446.676-3.125 1.219zM16.997 19c-.899 0-1.288-.311-1.876-.781-.68-.543-1.525-1.219-3.127-1.219-1.601 0-2.445.676-3.124 1.219-.588.47-.975.781-1.875.781-.898 0-1.286-.311-1.873-.78C4.443 17.676 3.6 17 2 17v2c.897 0 1.285.311 1.872.78.679.544 1.523 1.22 3.123 1.22s2.446-.676 3.125-1.22c.587-.47.976-.78 1.874-.78.9 0 1.311.328 1.878.781.679.543 1.524 1.219 3.125 1.219 1.602 0 2.447-.676 3.127-1.219.588-.47.977-.781 1.876-.781v-2c-1.601 0-2.446.676-3.125 1.219-.567.453-.978.781-1.878.781zM11 5.419l2.104 2.104-2.057 2.57c.286-.056.596-.093.947-.093 1.602 0 2.447.676 3.127 1.219.588.47.977.781 1.876.781.9 0 1.311-.328 1.878-.781.132-.105.274-.217.423-.326l-2.096-2.09.005-.005-5.5-5.5a.999.999 0 00-1.414 0l-4 4 1.414 1.414L11 5.419z" />
        </svg>
        <span>Swimming pool</span>
      </label>
    </>
  );
}
