"use client";
import { useRouter } from "next/navigation";
import { Button, Container, Row, Col } from "react-bootstrap";
import { PeopleFill, CalendarEvent } from "react-bootstrap-icons";
import Navbars from "../components/navbars";
import BreadCrump from "../components/breadCrump";
export default function DashboardPage() {
  const router = useRouter();

  return (
    <>
      <Navbars />
      <Container className="pt-3">
        <BreadCrump />
        <Container
          fluid
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "80vh" }}
        >
          <Row
            className="g-4 justify-content-center w-100"
            style={{ maxWidth: "900px" }}
          >
            {/* User Management */}
            <Col md={6}>
              <div className="p-4 shadow rounded bg-light text-center h-100">
                <PeopleFill size={40} className="mb-2 text-primary" />
                <h4>User Management</h4>
                <p className="text-muted">
                  Manage players, approvals, and user roles
                </p>

                <Button
                  variant="primary"
                  className="w-100"
                  onClick={() => router.push("/dashboard/users")}
                >
                  Go to Users
                </Button>
              </div>
            </Col>

            {/* Event Management */}
            <Col md={6}>
              <div className="p-4 shadow rounded bg-light text-center h-100">
                <CalendarEvent size={40} className="mb-2 text-success" />
                <h4>Event Management</h4>
                <p className="text-muted">
                  Create, update, and manage cricket events
                </p>

                <Button
                  variant="success"
                  className="w-100"
                  onClick={() => router.push("/dashboard/events")}
                >
                  Go to Events
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
