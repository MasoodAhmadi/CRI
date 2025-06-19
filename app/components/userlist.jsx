"use client";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { PenFill, XCircleFill } from "react-bootstrap-icons";
import "./userlist.css";
const UserList = ({ user, onDelete, onToggleApprove, size }) => {
  return (
    <tr>
      <td></td>
      <td>{user.name}</td>
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
            onClick={() => onDelete(user.id)}
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
            onClick={() => onDelete(user.id)}
          />
        )}
      </td>
    </tr>
  );
};

export default UserList;
