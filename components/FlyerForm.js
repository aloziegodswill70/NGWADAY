"use client";

export default function FlyerForm({ flyerData, setFlyerData }) {
  const handleChange = (e) => {
    setFlyerData({ ...flyerData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFlyerData({ ...flyerData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-ngwaGreen/10 p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-ngwaGold mb-4">Enter Flyer Details</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={flyerData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg text-black"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block mb-2">Slogan / Message</label>
          <input
            type="text"
            name="slogan"
            value={flyerData.slogan}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg text-black"
            placeholder="e.g. Proudly Ngwa, Proudly African"
          />
        </div>

        <div>
          <label className="block mb-2">Year</label>
          <input
            type="text"
            name="year"
            value={flyerData.year}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg text-black"
          />
        </div>

        <div>
          <label className="block mb-2">Upload Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full"
          />
        </div>
      </form>
    </div>
  );
}
