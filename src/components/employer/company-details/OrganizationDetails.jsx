import React, { useState } from "react";

const OrganizationDetails = () => {
  const [organizationName, setOrganizationName] = useState("");
  const [organizationDescription, setOrganizationDescrp] = useState("");
  const [organizationCity, setOrganizationCity] = useState("");
  const [industry, setIndustry] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState("");
  const [organizationLogo, setOrganizationLogo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let organization = {
      organizationName,
      organizationDescription,
      organizationCity,
      industry,
      numberOfEmployees,
      organizationLogo,
    };
    console.log(organization);
  };

  return (
    <div className="w-full px-[10%] py-10 flex flex-col items-center">
      <h1 className="text-[2vw] font-semibold text-zinc-600 text-center">
        Organization details
      </h1>
      <form onSubmit={submitHandler} className="w-2/3 shadow px-10 py-10">
        <div>
          <label htmlFor="name">Organization name</label>
          <input
            onChange={(e) => setOrganizationName(e.target.value)}
            value={organizationName}
            type="text"
            id="name"
            placeholder="Organization Name"
            className="px-4 py-2 mt-1 mb-5 rounded w-full border outline-1 outline-sky-200"
          />
        </div>
        <div>
          <label htmlFor="description">Organization description</label>
          <input
            onChange={(e) => setOrganizationDescrp(e.target.value)}
            value={organizationDescription}
            type="text"
            id="description"
            placeholder="Eg.Write Some Text Here..."
            className="px-4 py-2 mt-1 mb-5 rounded w-full border outline-1 outline-sky-200"
          />
        </div>
        <div>
          <label htmlFor="city">Organization city</label>
          <input
            onChange={(e) => setOrganizationCity(e.target.value)}
            value={organizationCity}
            type="text"
            id="city"
            placeholder="e.g. Mumbai"
            className="px-4 py-2 mt-1 mb-5 rounded w-full border outline-1 outline-sky-200"
          />
        </div>
        <div>
          <label htmlFor="employes">Industry</label>
          <input
            onChange={(e) => setIndustry(e.target.value)}
            value={industry}
            type="text"
            id="employes"
            placeholder="Select Industry"
            className="px-4 py-2 mt-1 mb-5 rounded w-full border outline-1 outline-sky-200"
          />
        </div>
        <div>
          <label htmlFor="employes">No. of employees</label>
          <select
            onChange={(e) => setNumberOfEmployees(e.target.value)}
            value={numberOfEmployees}
            className="px-4 py-2 mt-1 mb-5 block rounded w-1/2 border outline-1 outline-sky-200"
          >
            <option value="0" disabled>
              Select an option
            </option>
            <option value="0-50">0-50</option>
            <option value="51-200">51-200</option>
            <option value="201-500">201-500</option>
            <option value="501-1000">501-1000</option>
            <option value="1000+">1000+</option>
          </select>
        </div>
        <div>
          <label htmlFor="logo">
            Organization logo{" "}
            <span className="text-zinc-600 text-xs font-semibold">
              (Recommended)
            </span>
          </label>
          <input
            type="file"
            id="logo"
            placeholder="Upload logo"
            className="px-4 py-2 mt-1 mb-5 bg-[#EAFCFF] rounded w-1/2 block border outline-1 outline-sky-200"
          />
        </div>
        <button className="w-full py-2 mt-1 rounded bg-[#00A5EC] text-white font-semibold">
          Next
        </button>
      </form>
      <p className="mt-20">
        Need help? Call us at{" "}
        <span className="text-[#00A5EC] font-semibold">+91 8448444852</span>,
        available from Mon to Fri, 10 AM - 6 PM.
      </p>
    </div>
  );
};

export default OrganizationDetails;
