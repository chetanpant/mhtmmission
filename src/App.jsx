import React from 'react';

const dashboards = [
  { name: "eAushadhi", category: "Pharmacy & Inventory", link: "https://dwhphd.dcservices.in/DWH_PHD_OPEN/startup/loginAction", access: "Login Required" },
  { name: "eSanjeevani + Teleconsultation", category: "Telehealth & Call Centres", link: "https://esanjeevani.mohfw.gov.in/#/admin/signin", access: "Login Required" },
  { name: "eHospital (Hospital Management System)", category: "Hospital Operations & Patient Services", link: "https://dashboard.ehospital.gov.in/ehospitaldashboard/", access: "Public" },
  { name: "eRaktkosh", category: "Pharmacy & Inventory", link: "https://eraktkosh.mohfw.gov.in/eRaktkoshUtilities/#/", access: "Public" },
  { name: "HWC Portal + App", category: "Primary Healthcare & Frontline Services", link: "https://aam.mohfw.gov.in/home/login", access: "Login Required" },
  { name: "NCD Portal + App", category: "Disease Surveillance & Chronic Conditions", link: "https://ncd.nhp.gov.in/", access: "Login Required" },
  { name: "IHIP", category: "Disease Surveillance & Chronic Conditions", link: "https://ihip.mohfw.gov.in/idsp/#!/home", access: "Login Required" },
  { name: "Mera Aspatal", category: "Hospital Operations & Patient Services", link: "https://meraaspataal.nhp.gov.in/", access: "Login Required" },
  { name: "RCH Portal", category: "Maternal & Child Health (RMNCH)", link: "https://rchrpt.mohfw.gov.in/RCHRPT/Dashboard/PortalDashboard.aspx", access: "Public" },
  { name: "PFMS", category: "Workforce & HR", link: "https://pfms.nic.in/Home.aspx", access: "Login Required" },
  { name: "Nikshay", category: "Disease Surveillance & Chronic Conditions", link: "https://communitysupport.nikshay.in/#", access: "Public" },
  { name: "ABDM - Insights", category: "Digital Health Ecosystem (Foundational)", link: "https://dashboard.abdm.gov.in/abdm/", access: "Public" },
  { name: "Nikusth", category: "Disease Surveillance & Chronic Conditions", link: "https://leprosy-audit.icmr.org.in/", access: "Login Required" },
  { name: "DHIS2", category: "Disease Surveillance & Chronic Conditions", link: "http://49.50.93.64/mh", access: "Login Required" },
  { name: "Maharashtra Emergency Medical System", category: "Emergency & Referral Services", link: "https://mhems.in/clg/login", access: "Login Required" },
  { name: "HLL dashboard", category: "Diagnostics & Imaging", link: "https://mahahindlabs.com/", access: "Login Required" },
  { name: "Nursing Home Registration System", category: "Legal, Regulatory & Compliance", link: "https://maha-mnhregistration.co.in/", access: "Login Required" },
  { name: "MATRA Software", category: "Maternal & Child Health (RMNCH)", link: "https://play.google.com/store/apps/details?id=com.nhmup.frumis", access: "Login Required" },
  { name: "CT Scan", category: "Diagnostics & Imaging", link: "https://ilis.krsnaadiagnostics.com/", access: "Login Required" },
  { name: "Tele Radiology Services", category: "Diagnostics & Imaging", link: "https://ilis.krsnaadiagnostics.com/", access: "Login Required" },
  { name: "PMS (Construction Tracker)", category: "Infrastructure & Equipment Monitoring", link: "http://148.66.156.130/NHM/Index.aspx", access: "Login Required" },
  { name: "MedLEaPR", category: "Legal, Regulatory & Compliance", link: "http://164.100.137.235:8096/", access: "Login Required" },
  { name: "eSushrut", category: "Hospital Operations & Patient Services", link: "https://hmismaha.dcservices.in/AHIMSG5/hissso/Login", access: "Login Required" }
];

const App = () => {
  const grouped = dashboards.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fff3f3', minHeight: '100vh', padding: '0' }}>
      {/* Header with logos */}
      <div style={{
        backgroundColor: '#8B0000',
        color: 'white',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <img src="/GoM.png" alt="Maharashtra Govt Logo" style={{ height: '60px', objectFit: 'contain' }} />
        <h1 style={{ textAlign: 'center', flex: 1, fontSize: '1.8rem', fontWeight: 'bold' }}>
          Public Health Department, Maharashtra - Digital Systems Directory
        </h1>
        <img src="/PHD.png" alt="Public Health Dept Logo" style={{ height: '60px', objectFit: 'contain' }} />
      </div>

      {/* Content */}
      <div style={{ padding: '2rem' }}>
        {Object.keys(grouped).map(category => (
          <div key={category} style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#8B0000', borderBottom: '2px solid #8B0000', paddingBottom: '0.25rem' }}>{category}</h2>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginTop: '1rem'
            }}>
              {grouped[category].map(d => (
                <div
                  key={d.name}
                  onClick={() => window.open(d.link, '_blank')}
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '1rem',
                    width: '240px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  <div style={{ fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>
                    {d.name}
                  </div>
                  <div style={{
                    fontSize: '0.85rem',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '12px',
                    display: 'inline-block',
                    color: d.access === 'Public' ? '#155724' : '#721c24',
                    backgroundColor: d.access === 'Public' ? '#d4edda' : '#f8d7da'
                  }}>
                    {d.access}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;