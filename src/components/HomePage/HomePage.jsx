import useStore from '../../zustand/store';
import DepartmentCard from './DepartmentCard';
import './HomePage.css';

function HomePage() {
  const user = useStore((state) => state.user);
  const logOut = useStore((state) => state.logOut);

  const sections = [
    { path: "/compliance", label: "Compliance", description: "Weekly compliance" },
    { path: "/shelter", label: "Shelter", description: "Weekly shelter operations and guest tracking" }, 
    { path: "/finance", label: "Finance", description: "Weekly financial reporting and metrics" }, 
    { path: "/outreach", label: "Community Outreach", description: "Volunteers & Volunteer Engagement" },
    { path: "/development", label: "Development", description: "Donor, donations, and notable events" },
    { path: "/housing", label: "Housing", description: "Occupancy, vacancies, reserves" },
    { path: "/hr", label: "Human Resources", description: "Weekly HR updates" },
    { path: "/kitchen", label: "Kitchen", description: "Weekly kitchen reporting" },
    { path: "/media", label: "Media", description: "Website, social, newsletter metrics" },
    { path: "/pantry", label: "Pantry", description: "Weekly pantry reporting" },
    { path: "/reporting", label: "Reporting Hub", description: "One stop shop for all your reporting needs." },
  ];

  return (
    <section className="home-page">
      {/* Hero Banner */}
      <div className="hero-banner d-flex justify-content-center align-items-center mb-4">
        <img src="/img/cu-main-logo.png" alt="Company Logo" className="hero-logo" />
      </div>

      {/* Welcome Message */}
      <div className="text-center mb-4">
        <h2>Welcome, {user.username}</h2>
        <p>Select a department to manage data and reports.</p>
      </div>

      {/* Departments Grid */}
      <div className="container">
        <div className="row g-4 justify-content-center">
          {sections.map((section) => (
            <div key={section.path} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <DepartmentCard section={section} />
            </div>
          ))}
        </div>
      </div>

      {/* Log Out */}
      <div className="text-center my-4">
        <button onClick={logOut} className="btn btn-outline-danger">Log Out</button>
      </div>
    </section>
  );
}

export default HomePage;
