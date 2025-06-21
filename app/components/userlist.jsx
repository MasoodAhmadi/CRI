"use client";
import React, { useState } from "react";
import { PenFill, XCircleFill } from "react-bootstrap-icons";
import { Button, Form, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./userlist.css";

const UserList = ({ user, onDelete, onToggleApprove, size }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    onDelete(user.id);
    setShowConfirm(false);
  };
  const cancelDelete = () => {
    setShowConfirm(false);
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {user.approved
        ? "Payment is confirmed, registration is approved"
        : "Payment is not confirmed, registration is pending approval."}
    </Tooltip>
  );
  return (
    <>
      <tr>
        <td></td>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <td>{user.name}</td>
        </OverlayTrigger>
        <td>{user.phone}</td>
        <td>{user.email}</td>
        <td>
          <Form.Check
            type="switch"
            id={`approve-switch-${user.id}`}
            checked={user.approved}
            onChange={() => onToggleApprove(user.id, user.approved)}
            className={
              user.approved
                ? "approve-switch green-switch d-flex justify-content-center"
                : "approve-switch d-flex justify-content-center"
            }
          />
        </td>
        <td
          className="text-center"
          style={{ fontSize: size.width < 786 ? "8px" : "inherit" }}
        >
          {size.width > 786 ? (
            <Button variant="warning" size="sm">
              Edit
            </Button>
          ) : (
            <PenFill
              className="shadow-lg rounded penfill-shadow"
              variant=""
              style={{ color: "#FFCC00", borderColor: "#fff" }}
              size={25}
            />
          )}
          {/*  */}
        </td>
        <td
          className="text-center"
          style={{
            fontSize: size.width < 786 ? "8px" : "inherit",
          }}
        >
          {size.width > 786 ? (
            <Button
              variant={user.deleted_at ? "success" : "danger"}
              size="sm"
              onClick={handleDelete}
            >
              {user.deleted_at ? "Restore" : "Delete"}
            </Button>
          ) : (
            <XCircleFill
              className="shadow-lg rounded xcirclefill-shadow"
              variant=""
              style={{
                color: user.deleted_at ? "#28a745" : "#dc3545",
                borderColor: "#fff",
              }}
              size={25}
              onClick={handleDelete}
            />
          )}
        </td>
      </tr>
      <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {user.deleted_at ? "Restore Player" : "Delete Player"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to {user.deleted_at ? "restore" : "delete"} this
          user?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirm(false)}>
            Cancel
          </Button>
          <Button
            variant={user.deleted_at ? "success" : "danger"}
            onClick={confirmDelete}
          >
            {user.deleted_at ? "Restore" : "Delete"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserList;
