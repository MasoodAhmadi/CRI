"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { paginate } from "../utils/paginate";
import UserList from "../components/userlist";
import Navbars from "../components/navbars";
import { supabase } from "../../supabaseClient";
import Membership from "../components/membership";
import useWindowSize from "../utils/useWindowsSize";
import { Table, Form, Button } from "react-bootstrap";
import { ArrowLeft, PlusLg } from "react-bootstrap-icons";
import PaginationComponent from "../components/pagination";
import { Container, Row, Col, FormCheck, Card, Modal } from "react-bootstrap";

export default function DashboardPage() {
  const router = useRouter();
  const [memberships, setMemberships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [showDeleted, setShowDeleted] = useState(false);
  const [show, setShow] = useState(false);
  const [pageSize] = useState(10);
  const size = useWindowSize();

  const fetchUsers = async () => {
    const { data, error } = await supabase.from("members").select("*");
    if (!error) setMemberships(data);
    else console.error("Error fetching memberships:", error.message);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.push("/notFound");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    setSearchInputValue(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredUsers = memberships.filter((user) => {
    const matchesSearch = user.email
      ?.toLowerCase()
      .includes(searchInputValue.toLowerCase());
    const matchesDeletedState = showDeleted
      ? user.deleted_at
      : !user.deleted_at;
    return matchesSearch && matchesDeletedState;
  });

  const paginatedUsers = paginate(filteredUsers, currentPage, pageSize);

  const onDeleteUser = async (id) => {
    const { error } = await supabase.from("members").delete().eq("id", id);
    if (error) {
      alert("Error deleting user: " + error.message);
    } else {
      setMemberships((prev) => prev.filter((user) => user.id !== id));
    }
  };

  const toggleApproval = async (id, currentState) => {
    const { error } = await supabase
      .from("members")
      .update({ approved: !currentState })
      .eq("id", id);

    if (error) {
      console.error("Error updating approval:", error.message);
      alert("Failed to update approval.");
    } else {
      setMemberships((prev) =>
        prev.map((user) =>
          user.id === id ? { ...user, approved: !currentState } : user
        )
      );
    }
  };

  const closeModalRegistration = () => setShow(false);
  const OpenModalRegistration = () => setShow(true);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status" />
          {/* here will be loader later */}
          <p className="fw-semibold text-muted">Checking authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbars />
      <Container className="pt-3">
        <ArrowLeft
          width={35}
          height={35}
          role="button"
          className="mb-3"
          onClick={() => router.push("/")}
        />

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
              will be reviewed to verify if the payment has been successfully
              completed. Once the payment is confirmed, the registration will be
              marked as approved.
            </Card.Text>
          </Card.Body>
        </Card>

        <h1>Player Management</h1>
        <p>
          {filteredUsers.length}{" "}
          {filteredUsers.length === 1 ? "player" : "players"} found
        </p>

        <Row className="my-3">
          {size.width > 768 ? (
            <>
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
                  className="w-100 d-flex justify-content-center gap-2"
                  onClick={OpenModalRegistration}
                >
                  <PlusLg
                    size={15}
                    className="d-flex justify-content-center mt-1"
                  />{" "}
                  Add User
                </Button>
                <Modal
                  show={show}
                  onHide={closeModalRegistration}
                  centered
                  size="lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Admin user registration
                    </Modal.Title>
                  </Modal.Header>
                  <Membership onMemberAdded={fetchUsers} />
                </Modal>
              </Col>
            </>
          ) : (
            <>
              <Col xs={7}>
                <Form.Control
                  type="text"
                  placeholder="Search by email"
                  value={searchInputValue}
                  onChange={handleSearch}
                />
              </Col>

              <Col xs={5}>
                <Button
                  className="w-100 d-flex justify-content-center gap-2"
                  onClick={OpenModalRegistration}
                >
                  <PlusLg
                    size={15}
                    className="d-flex justify-content-center mt-1"
                  />
                  Add Player
                </Button>

                <Modal
                  show={show}
                  onHide={closeModalRegistration}
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Admin user registration
                    </Modal.Title>
                  </Modal.Header>
                  <Membership />
                </Modal>
              </Col>
            </>
          )}
        </Row>

        <FormCheck
          type="switch"
          checked={showDeleted}
          id="show-deleted-switch"
          label="See deleted users"
          onChange={(e) => setShowDeleted(e.target.checked)}
          className="mb-3"
        />

        <div className="d-flex justify-content-center">
          <PaginationComponent
            itemsCount={filteredUsers.length}
            onPageChange={handlePageChange}
            currentPage={currentPage}
            pageSize={pageSize}
          />
        </div>
        {/* <Container className="mt-3"> */}
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
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              {/* <th>Active</th> */}
              <th>Approved</th>
              <th className="text-center">Edit</th>
              <th className="text-center">
                {showDeleted ? "Restore" : "Delete"}
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user) => (
              <UserList
                user={user}
                key={user.id}
                currentPage={currentPage}
                size={size}
                onDelete={onDeleteUser}
                onToggleApprove={toggleApproval}
              />
            ))}
          </tbody>
        </Table>
        {/* </Container> */}
      </Container>
    </>
  );
}
