import { useNavigate } from "react-router-dom";
import { paginate } from "../../utils/paginate";
import MembershipPage from "../MembershipPage";
import { PlusLg } from "react-bootstrap-icons";
import BreadCrump from "../../components/breadCrump";
import useWindowSize from "../../utils/useWindowsSize";
import { Col, Card, Modal, Table } from "react-bootstrap";
import { Form, Button, Container } from "react-bootstrap";
import PaginationComponent from "../../components/pagination";
import React, { useEffect, useState, useCallback } from "react";
import { Row, OverlayTrigger, Tooltip, Badge } from "react-bootstrap";

const API_BASE_URL = (
  import.meta.env.VITE_BACKEND_URL || "no backend service working!"
).replace(/\/$/, "");

export default function UserManagement() {
  const navigate = useNavigate();
  const size = useWindowSize();

  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [authToken, setAuthToken] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [show, setShow] = useState(false);
  const [pageSize] = useState(10);

  const fetchPlayers = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Authentication token not found. Please log in again.");
      }

      const response = await fetch(`${API_BASE_URL}/api/players/admin`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to fetch players");
      }

      setPlayers(result.data || []);
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!storedUser || !token) {
      navigate("/notFound");
      return;
    }

    try {
      const user = JSON.parse(storedUser);

      setAuthToken(token);

      setIsSuperAdmin(String(user.role || "").toLowerCase() === "superadmin");

      setIsLoading(false);
    } catch (error) {
      console.error("Invalid stored user:", error);

      localStorage.removeItem("user");
      localStorage.removeItem("token");

      navigate("/notFound");
    }
  }, [navigate]);

  useEffect(() => {
    if (!isLoading) {
      fetchPlayers();
    }
  }, [isLoading, fetchPlayers]);

  const handleSearch = (e) => {
    setSearchInputValue(e.target.value);
    setCurrentPage(1);
  };

  const filteredPlayers = players.filter((player) => {
    const search = searchInputValue.toLowerCase();

    return (
      player.name?.toLowerCase().includes(search) ||
      player.email?.toLowerCase().includes(search) ||
      player.city?.toLowerCase().includes(search)
    );
  });

  const paginatedPlayers = paginate(filteredPlayers, currentPage, pageSize);

  const getAuthToken = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    return user.token || user.accessToken || localStorage.getItem("token");
  };

  const approvePlayer = async (id, newStatus) => {
    if (!isSuperAdmin) {
      alert("Only superadmin can approve players.");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please log in again. Authentication token not found.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/players/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to update status");
      }

      setPlayers((prev) =>
        prev.map((player) =>
          player._id === id ? { ...player, ...result.data } : player,
        ),
      );
    } catch (error) {
      console.error("Status update error:", error);
      alert(error.message);
    }
  };

  // DELETE PLAYER - SUPERADMIN ONLY
  const onDeletePlayer = async (id) => {
    if (!isSuperAdmin) {
      alert("Only superadmin can delete players.");
      return;
    }

    if (!authToken) {
      alert("Superadmin authentication token not found.");
      return;
    }

    if (!window.confirm("Are you sure you want to delete this player?")) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/players/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to delete player");
      }

      setPlayers((prev) => prev.filter((player) => player._id !== id));
    } catch (error) {
      console.error("Delete error:", error);
      alert(error.message);
    }
  };

  const closeModalRegistration = () => setShow(false);
  const openModalRegistration = () => setShow(true);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status" />
          <p className="fw-semibold text-muted">Checking authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <Container className="pt-3">
      <BreadCrump />

      <Card
        className="mb-4"
        style={{
          width: "100%",
          backgroundColor: "#e3e4e6",
          borderColor: "#4cb04f",
        }}
      >
        <Card.Body>
          <Card.Title>Important!</Card.Title>
          <Card.Text>
            All player registrations for the cricket tournament in Tampere will
            be reviewed to verify payment before approval.
          </Card.Text>
        </Card.Body>
      </Card>

      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h1>Player Management</h1>
          <p>
            {filteredPlayers.length}{" "}
            {filteredPlayers.length === 1 ? "player" : "players"} found
          </p>
        </div>

        <Badge bg={isSuperAdmin ? "success" : "secondary"}>
          {isSuperAdmin ? "Superadmin " : "Normal User"}
        </Badge>
      </div>

      <Row className="my-3">
        <Col md={10}>
          <Form.Control
            type="text"
            placeholder="Search by name, email or city"
            value={searchInputValue}
            onChange={handleSearch}
          />
        </Col>

        <Col md={2}>
          <Button
            variant="success"
            className="w-100 d-flex justify-content-center gap-2"
            onClick={openModalRegistration}
          >
            <PlusLg size={15} className="mt-1" />
            Add Player
          </Button>

          <Modal show={show} onHide={closeModalRegistration} centered size="xl">
            <Modal.Header closeButton>
              <Modal.Title>Player registration</Modal.Title>
            </Modal.Header>

            <MembershipPage
              onMemberAdded={() => {
                fetchPlayers();
                closeModalRegistration();
              }}
            />
          </Modal>
        </Col>
      </Row>

      <div className="d-flex justify-content-center">
        <PaginationComponent
          itemsCount={filteredPlayers.length}
          onPageChange={setCurrentPage}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </div>

      <Table
        striped
        hover
        responsive="md"
        size="sm"
        style={{
          fontSize: size.width < 786 ? "9px" : "inherit",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Jersey</th>
            <th>City</th>
            <th>Role</th>
            <th>Status</th>
            <th className="text-center">Approval</th>
            {isSuperAdmin && <th className="text-center">Delete</th>}
          </tr>
        </thead>

        <tbody>
          {paginatedPlayers.map((player) => (
            <tr key={player._id}>
              <td>{player.name}</td>
              <td>{player.jerseyNumber || "-"}</td>
              <td>{player.city || "-"}</td>
              <td>{player.role || "-"}</td>
              <td>
                <Badge
                  bg={
                    player.status === "Approved"
                      ? "success"
                      : player.status === "Rejected"
                        ? "danger"
                        : "warning"
                  }
                >
                  {player.status || "Pending"}
                </Badge>
              </td>
              <td className="text-center">
                {player.status === "Rejected" ? (
                  <Badge bg="danger">Rejected</Badge>
                ) : (
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>
                        {isSuperAdmin
                          ? "Switch between Pending and Approved"
                          : "Only a super administrator can change player status"}
                      </Tooltip>
                    }
                  >
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <Form.Check
                        type="switch"
                        id={`status-${player._id}`}
                        checked={player.status === "Approved"}
                        disabled={!isSuperAdmin}
                        onChange={() =>
                          approvePlayer(
                            player._id,
                            player.status === "Approved"
                              ? "Pending"
                              : "Approved",
                          )
                        }
                      />
                    </div>
                  </OverlayTrigger>
                )}
              </td>

              {isSuperAdmin && (
                <td className="text-center">
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => onDeletePlayer(player._id)}
                  >
                    Delete
                  </Button>
                </td>
              )}
            </tr>
          ))}

          {paginatedPlayers.length === 0 && (
            <tr>
              <td colSpan={isSuperAdmin ? 7 : 6} className="text-center py-4">
                No players found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}
