import React from "react";

const SafetyCenter = () => {
  const safetyArray = [
    {
      heading: "Asking for manoey",
      details: `If an employer asks you for money in the form of training fee,
          application/admission fee, security deposit, test fee, laptop fee,
          documentation fee, interview reservation fee, etc., please do not make
          any payment and report him/her immediatety. Charging money is not only
          a violation of Internshala's rules, it is often a scam.`,
    },
    {
      heading: "Refusal to pay stipend/salary or issue certificate",
      details: `On Internshala, jobs with CTC less than 2 LPA and unpaid internships are not allowed, unless explicitly mentioned so in the internship/job listing. If you come across any such incident where the stipend/salary mentioned on Internshala and the offer letter do not match, do notify us.
There also might be a case where the employer might stop responding to you or refuse to pay you the promised salary/stipend or issue the certificate of completion, after you have performed the assigned work.`,
    },
    {
      heading: "Asking for irrelevant assignments",
      details: `Any assignment that an employer asks you to do should assess your suitability for the role, and should be relevant to the profile.
Please report employers, if they asks you to do extremely lengthy assignments which may involve making business strategies for their company, writing multiple articles for their blog, promoting their social media accounts in your network, increasing downloads of their app, or designing multiple graphics for their company. These assignments may be a scheme by the company to get free work done.`,
    },
    {
      heading: "Asking for personal and bank details",
      details: `Be cautious of employers who ask for details like PIN, pan card, bank account, credit card, OTP, Aadhar, etc., via online channels, in exchange for a ‘special offer’. This may be a scammer trying to obtain your information to impersonate you.
Legitimate employers would have had sufficient interaction with you through interviews and would have expressed interest in hiring you, before requesting personal information like bank account details, pan card and marksheets.
    `,
    },
    {
      heading: "Hateful or abusive conduct",
      details: `Employers are not allowed to make discriminatory or abusive comments about race, ethnicity, religious affiliation, sexual orientation or gender about any candidate. Any such attempt should be reported immediately.`,
    },
  ];
  return (
    <div className="w-full border py-5 px-10 rounded-xl">
      {safetyArray.map((s, idx) => (
        <div key={idx} className="mb-5">
          <h1 className="text-[2vw] font-semibold text-zinc-600">
            {s.heading}
          </h1>
          <p className="text-zinc-600 mt-3">{s.details}</p>
        </div>
      ))}
    </div>
  );
};

export default SafetyCenter;
