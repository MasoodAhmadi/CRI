"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { paginate } from "../../utils/paginate";
import UserList from "../../components/userlist";
import Navbars from "../../components/navbars";
import Membership from "../../components/membership";
import useWindowSize from "../../utils/useWindowsSize";
import PaginationComponent from "../../components/pagination";
import { Table, Form, Button, Container, Row } from "react-bootstrap";
import { Col, Card, Modal } from "react-bootstrap";
import { ArrowLeft, PlusLg } from "react-bootstrap-icons";
import { Breadcrumb } from "react-bootstrap";
import { usePathname } from "next/navigation";
import BreadCrump from "../../components/breadCrump";

export default function UserManagement() {
  const router = useRouter();
  const pathname = usePathname();
  const [memberships, setMemberships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [showDeleted, setShowDeleted] = useState(false);
  const [show, setShow] = useState(false);
  const [pageSize] = useState(10);
  const size = useWindowSize();

  const API_BASE_URL =
    "https://backend-express-two-taupe.vercel.app" ||
    "error fetching backend URL";
  // ✅ Fetch users from Express API
  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users`);
      const data = await response.json();

      if (!response.ok) {
        console.error("Error fetching users:", data.message);
        return;
      }

      setMemberships(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  console.log("Fetched memberships:", memberships); // Debug
  // ✅ Authentication check
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/notFound");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  // ✅ Initial data fetch
  useEffect(() => {
    fetchUsers();
  }, []);

  // ✅ Search handler
  const handleSearch = (e) => {
    setSearchInputValue(e.target.value);
    setCurrentPage(1);
  };

  // ✅ Pagination handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // ✅ Filter users by email
  const filteredUsers = memberships.filter((user) =>
    user.email?.toLowerCase().includes(searchInputValue.toLowerCase()),
  );

  const paginatedUsers = paginate(filteredUsers, currentPage, pageSize);
  console.log("paginatedUsers users:", paginatedUsers); // Debug

  // ✅ Delete user (requires DELETE endpoint in backend)
  const onDeleteUser = async (id) => {
    // if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      const response = await fetch(`${API_BASE_URL}/api/users/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const data = await response.json();
        alert(data.message || "Error deleting user");
        return;
      }

      setMemberships((prev) => prev.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // ✅ Toggle approval (mapped to role change as an example)
  const toggleApproval = async (id, currentRole) => {
    const newRole = currentRole === "admin" ? "player" : "admin";

    try {
      const response = await fetch(`${API_BASE_URL}/api/users/${id}/role`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: newRole }),
      });

      if (!response.ok) {
        const data = await response.json();
        alert(data.message || "Failed to update role");
        return;
      }

      setMemberships((prev) =>
        prev.map((user) =>
          user._id === id ? { ...user, role: newRole } : user,
        ),
      );
    } catch (error) {
      console.error("Error updating role:", error);
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
    <>
      <Navbars />
      <Container className="pt-3">
        <BreadCrump />

        <Card
          style={{
            width: "100%",
            backgroundColor: "#e3e4e6",
            borderColor: "#4cb04f",
          }}
          className="mb-4"
        >
          <Card.Body>
            <Card.Title>Important!!</Card.Title>
            <Card.Text>
              All player registrations for the cricket tournament in Tampere
              will be reviewed to verify payment before approval.
            </Card.Text>
          </Card.Body>
        </Card>

        <h1>Player Management</h1>
        <p>
          {filteredUsers.length}{" "}
          {filteredUsers.length === 1 ? "player" : "players"} found
        </p>

        <Row className="my-3">
          <Col md={10}>
            <Form.Control
              type="text"
              placeholder="Search by email"
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
              <PlusLg size={15} className="mt-1" /> Add Player
            </Button>

            <Modal
              show={show}
              onHide={closeModalRegistration}
              centered
              size="xl"
            >
              <Modal.Header closeButton>
                <Modal.Title>Admin user registration</Modal.Title>
              </Modal.Header>
              <Membership onMemberAdded={fetchUsers} />
            </Modal>
          </Col>
        </Row>

        <div className="d-flex justify-content-center">
          <PaginationComponent
            itemsCount={filteredUsers.length}
            onPageChange={handlePageChange}
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
              <th>Phone</th>
              <th>Email</th>
              <th>City</th>
              <th>Approve</th>
              <th className="text-center">Edit</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user) => {
              console.log("Rendering user:", user); // Debug
              return (
                <UserList
                  key={user._id}
                  user={user}
                  onDelete={onDeleteUser}
                  onToggleApprove={toggleApproval}
                  size={size}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
