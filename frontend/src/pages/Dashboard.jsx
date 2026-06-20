import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="container mt-5">
      <h1>
        Welcome {user?.name}
      </h1>

      <p>
        Role: {user?.role}
      </p>
    </div>
  );
}

export default Dashboard;