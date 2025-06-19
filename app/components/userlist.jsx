"use client";
import React from "react";
import { Button, Form } from "react-bootstrap";
import "./userlist.css"; // Assuming you have a CSS file for styles
const UserList = ({ user, onDelete, onToggleApprove }) => {
  return (
    <tr>
      <td></td>
      <td>{user.name}</td>
      <td>{user.phone}</td>
      <td>{user.email}</td>
      {/* <td>{user.role}</td> */}
      {/* <td>{user.active ? "Yes" : "No"}</td> */}
      <td>
        <Form.Check
          type="switch"
          id={`approve-switch-${user.id}`}
          checked={user.approved}
          onChange={() => onToggleApprove(user.id, user.approved)}
          className={
            user.approved ? "approve-switch green-switch" : "approve-switch"
          }
        />

        {/* {user.approved ? "Yes" : "No"}
         */}
      </td>
      <td className="text-center">
        <Button variant="warning" size="sm">
          Edit
        </Button>
      </td>
      <td className="text-center">
        <Button
          variant={user.deleted_at ? "success" : "danger"}
          size="sm"
          onClick={() => onDelete(user.id)}
        >
          {user.deleted_at ? "Restore" : "Delete"}
        </Button>
      </td>
    </tr>
  );
};

export default UserList;
