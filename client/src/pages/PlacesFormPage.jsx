import { useEffect, useState } from "react";
import Perks from "../Perks";
import PhotosUploader from "../PhotosUploader";
import AccountNav from "../AccountNav";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function PlacesFormPage() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [redirect, setRedirect] = useState(false);
  const [price, setPrice] = useState(100);

  // if id then it means we clicked in existing place
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/places/" + id).then((response) => {
      const { data } = response;
      setTitle(data.title);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setMaxGuests(data.maxGuests);
      setPrice(data.price);
    });
  }, [id]);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }
  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function savePlace(e) {
    e.preventDefault();
    const placeData = {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    };
    if (id) {
      //update
      await axios.put("/places", {
        id,
        ...placeData,
      });
      setRedirect(true);
    } else {
      // add new item
      await axios.post("/places", {
        placeData,
      });
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  return (
    <div className="">
      <AccountNav />
      <form onSubmit={savePlace} className="w-[80vw] mx-auto">
        {preInput("Title", "Title for your place")}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title, for eg., apartment name"
        />
        {/* address input ===========================================*/}
        {preInput("Address", "Address to this place")}
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="address"
        />
        {/* photos upload by link ===========================================*/}
        {preInput("Photos", "")}
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
        {/* description ==================================== */}
        {preInput("Description", "")}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-gray-100"
          placeholder="Add description of place here"
        />
        {/* perks ========================================================= */}
        {preInput("Perks", "Select all perks of your place")}
        <div className="grid gap-2 mt-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:max-w-7xl">
          <Perks selected={perks} onChange={setPerks} />
        </div>
        {/* extra info ====================================================== */}
        {preInput("Extra info", "")}
        <textarea
          value={extraInfo}
          onChange={(e) => setExtraInfo(e.target.value)}
          className="bg-gray-100"
          placeholder="House rules, extra info, etc,."
        />
        {/* check in info ====================================================== */}
        {preInput("Check in & out times", "Add Check in & out times")}
        <div className="grid gap-2 grid-cols-2 md:grid-cols-4 lg:max-w-3xl">
          <div className="">
            <h3 className="mt-2 -mb-1">Check in time</h3>
            <input
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="bg-gray-100"
              type="text"
              placeholder="Enter here"
            />
          </div>
          <div className="">
            <h3 className="mt-2 -mb-1">Check out time</h3>
            <input
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="bg-gray-100"
              type="text"
              placeholder="Enter here"
            />
          </div>
          <div className="">
            <h3 className="mt-2 -mb-1">Max guests</h3>
            <input
              value={maxGuests}
              onChange={(e) => setMaxGuests(e.target.value)}
              className="bg-gray-100"
              type="number"
              placeholder="Enter here"
            />
          </div>
          {/* check in info end ====================================================== */}

          {/* price ======================================== */}
          <div className="">
            <h3 className="mt-2 -mb-1">Price per night</h3>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="bg-gray-100"
              type="number"
              placeholder="Enter here"
            />
          </div>
        </div>
        <button className="primary my-4 max-w-xs">Save</button>
      </form>
    </div>
  );
}
