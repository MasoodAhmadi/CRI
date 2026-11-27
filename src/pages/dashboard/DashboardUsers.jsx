import { useNavigate } from "react-router-dom";
import BreadCrump from "../../components/breadCrump";
import { PlusLg, Pencil, Trash } from "react-bootstrap-icons";
import React, { useCallback, useEffect, useState } from "react";
import { Modal, Badge, Spinner, InputGroup } from "react-bootstrap";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const API_BASE_URL = (
  import.meta.env.VITE_BACKEND_URL || "no backend service working!"
).replace(/\/$/, "");

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  city: "",
  password: "",
};

export default function UserManagement() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [token, setToken] = useState("");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user") || "null");

      if (!storedUser) {
        navigate("/notFound");
        return;
      }

      const authToken =
        storedUser.token ||
        storedUser.accessToken ||
        localStorage.getItem("token") ||
        "";

      if (!authToken) {
        navigate("/notFound");
        return;
      }

      setToken(authToken);
      setIsSuperAdmin(
        String(storedUser.role || "").toLowerCase() === "superadmin",
      );
    } catch {
      localStorage.removeItem("user");
      navigate("/notFound");
    }
  }, [navigate]);

  const fetchUsers = useCallback(async () => {
    if (!token) return;

    try {
      setLoading(true);

      const response = await fetch(`${API_BASE_URL}/api/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to load users");
      }

      const userList = Array.isArray(result) ? result : result.data || [];

      setUsers(
        userList.filter((user) =>
          ["user"].includes(String(user.role || "").toLowerCase()),
        ),
      );
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) fetchUsers();
  }, [token, fetchUsers]);

  const filteredUsers = users.filter((user) => {
    const term = search.toLowerCase();

    return (
      user.name?.toLowerCase().includes(term) ||
      user.email?.toLowerCase().includes(term) ||
      user.phone?.toLowerCase().includes(term) ||
      user.city?.toLowerCase().includes(term)
    );
  });

  const openAddModal = () => {
    setEditingUser(null);
    setForm(emptyForm);
    setShowModal(true);
  };

  const openEditModal = (user) => {
    setEditingUser(user);
    setForm({
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      city: user.city || "",
      password: "",
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingUser(null);
    setForm(emptyForm);
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isSuperAdmin) return;

    try {
      setSaving(true);

      const payload = { ...form };

      if (editingUser && !payload.password.trim()) {
        delete payload.password;
      }

      const url = editingUser
        ? `${API_BASE_URL}/api/users/${editingUser._id}`
        : `${API_BASE_URL}/api/users`;

      const response = await fetch(url, {
        method: editingUser ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to save user");
      }

      closeModal();
      await fetchUsers();
    } catch (error) {
      alert(error.message);
    } finally {
      setSaving(false);
    }
  };

  const deleteUser = async (user) => {
    if (!isSuperAdmin) return;

    if (!window.confirm(`Delete ${user.name}? This cannot be undone.`)) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/users/${user._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to delete user");
      }

      setUsers((prev) => prev.filter((item) => item._id !== user._id));
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Container className="py-3">
      <BreadCrump />

      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
        <div>
          <h2 className="mb-1">User Management</h2>
          <p className="text-muted mb-0">
            {filteredUsers.length}{" "}
            {filteredUsers.length === 1 ? "user" : "users"}
          </p>
        </div>

        {isSuperAdmin && (
          <Button variant="success" onClick={openAddModal}>
            <PlusLg className="me-2" />
            Add User
          </Button>
        )}
      </div>

      <InputGroup className="mb-4">
        <Form.Control
          placeholder="Search by name, email, phone or city"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <Button variant="outline-secondary" onClick={() => setSearch("")}>
            Clear
          </Button>
        )}
      </InputGroup>

      {!isSuperAdmin && (
        <p className="text-muted mb-3">
          You can view users. Only a superadmin can add, edit or delete them.
        </p>
      )}

      <Row className="g-3">
        {filteredUsers.map((user) => (
          <Col key={user._id} xs={12} sm={6} lg={4} xl={3}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <Card.Title className="mb-1">{user.name}</Card.Title>
                    <Badge bg="success">User</Badge>
                  </div>
                </div>

                <p className="mb-2 text-break">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong> {user.phone || "-"}
                </p>
                <p className="mb-3">
                  <strong>City:</strong> {user.city || "-"}
                </p>

                {isSuperAdmin && (
                  <div className="d-flex gap-2 mt-auto">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="flex-grow-1"
                      onClick={() => openEditModal(user)}
                    >
                      <Pencil className="me-1" />
                      Edit
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => deleteUser(user)}
                    >
                      <Trash />
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {filteredUsers.length === 0 && (
        <div className="text-center text-muted py-5">No users found.</div>
      )}

      <Modal show={showModal} onHide={closeModal} centered>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>
              {editingUser ? "Edit User" : "Add New User"}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                name="city"
                value={form.city}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>
                {editingUser ? "New Password (optional)" : "Password"}
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required={!editingUser}
                minLength={6}
                placeholder={
                  editingUser ? "Leave blank to keep current password" : ""
                }
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Button type="submit" variant="success" disabled={saving}>
              {saving
                ? "Saving..."
                : editingUser
                  ? "Save Changes"
                  : "Create User"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}
