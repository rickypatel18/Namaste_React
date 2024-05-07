import * as React from "react";

const countries = [
  { name: "India", value: "IND", cities: ["Delhi", "Mumbai"] },
  { name: "Pakistan", value: "PAK", cities: ["Karachi", "Lahore"] },
  { name: "Bangladesh", value: "BAN", cities: ["Dhaka", "Rola"] },
];

export default function Page() {
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [selectedCity, setSelectedCity] = React.useState("");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCity(""); // Reset city when country changes
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const getCitiesByCountry = () => {
    const selectedCountryObj = countries.find(
      (country) => country.value === selectedCountry
    );
    return selectedCountryObj ? selectedCountryObj.cities : [];
  };

  return (
    <div>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {countries.map((country, index) => (
          <option key={index} value={country.value}>
            {country.name}
          </option>
        ))}
      </select>

      <select value={selectedCity} onChange={handleCityChange}>
        {/* <option value="">Select City</option> */}
        {getCitiesByCountry().map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}
