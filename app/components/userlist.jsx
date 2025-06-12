"use client";
import React from "react";
import { Button } from "react-bootstrap";

const UserList = ({ user }) => {
  return (
    <tr>
      <td></td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>{user.active ? "Yes" : "No"}</td>
      <td>{user.approved ? "Yes" : "No"}</td>
      <td className="text-center">
        <Button variant="warning" size="sm">
          Edit
        </Button>
      </td>
      <td className="text-center">
        <Button variant={user.deleted_at ? "success" : "danger"} size="sm">
          {user.deleted_at ? "Restore" : "Delete"}
        </Button>
      </td>
    </tr>
  );
};

export default UserList;
