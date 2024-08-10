import React from "react";

const DashboardPage = () => {
  // Sample data for the dashboard
  const companyInfo = {
    name: "Tech Innovators Inc.",
    totalEmployees: 150,
    activeProjects: 12,
    revenue: "$5.2M",
  };

  const recentActivities = [
    { id: 1, date: "2024-08-09", description: "Launched new product feature" },
    {
      id: 2,
      date: "2024-08-08",
      description: "Completed quarterly financial review",
    },
    {
      id: 3,
      date: "2024-08-07",
      description: "Hired 5 new software engineers",
    },
  ];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to {companyInfo.name}</h1>
      </header>

      <section className="dashboard-overview">
        <div className="overview-item">
          <h2>Total Employees</h2>
          <p>{companyInfo.totalEmployees}</p>
        </div>
        <div className="overview-item">
          <h2>Active Projects</h2>
          <p>{companyInfo.activeProjects}</p>
        </div>
        <div className="overview-item">
          <h2>Revenue</h2>
          <p>{companyInfo.revenue}</p>
        </div>
      </section>

      <section className="dashboard-recent-activities">
        <h2>Recent Activities</h2>
        <ul>
          {recentActivities.map((activity) => (
            <li key={activity.id}>
              <span className="activity-date">{activity.date}</span> -{" "}
              {activity.description}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DashboardPage;
