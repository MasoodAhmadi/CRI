import { useNavigate } from "react-router-dom";
import BreadCrump from "../../components/breadCrump";
import { Button, Container, Row, Col } from "react-bootstrap";
import { PeopleFill, PersonFill } from "react-bootstrap-icons";
import { CalendarEvent, TrophyFill } from "react-bootstrap-icons";

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <Container className="pt-3">
      <BreadCrump />

      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "80vh" }}
      >
        <Row
          className="g-4 justify-content-center w-100"
          style={{ maxWidth: "1200px" }}
        >
          <Col lg={4} md={6}>
            <div className="p-4 shadow rounded bg-light text-center h-100">
              <PeopleFill size={40} className="mb-3 text-primary" />
              <h4>Player Management</h4>
              <p className="text-muted">
                Manage players, approvals, and player registrations.
              </p>
              <Button
                variant="primary"
                className="w-100"
                onClick={() => navigate("/dashboard/players")}
              >
                Go to Players
              </Button>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="p-4 shadow rounded bg-light text-center h-100">
              <CalendarEvent size={40} className="mb-3 text-success" />
              <h4>Event Management</h4>
              <p className="text-muted">
                Create, update, and manage cricket events.
              </p>
              <Button
                variant="success"
                className="w-100"
                onClick={() => navigate("/dashboard/events")}
              >
                Go to Events
              </Button>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="p-4 shadow rounded bg-light text-center h-100">
              <TrophyFill size={40} className="mb-3 text-warning" />
              <h4>Matches Management</h4>
              <p className="text-muted">
                Add, update, and delete match history.
              </p>
              <Button
                variant="warning"
                className="w-100 text-white"
                onClick={() => navigate("/dashboard/matches")}
              >
                Go to Matches
              </Button>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="p-4 shadow rounded bg-light text-center h-100">
              <PersonFill size={40} className="mb-3 text-info" />
              <h4>User Management</h4>
              <p className="text-muted">
                Manage registered user accounts and administrator access.
              </p>
              <Button
                variant="info"
                className="w-100 text-white"
                onClick={() => navigate("/dashboard/users")}
              >
                Go to Users
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
