import React from "react";

import { Calendar2CheckFill } from "react-bootstrap-icons";
import { PeopleFill } from "react-bootstrap-icons";
import { Receipt } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { CardsWrapper, Section } from "../styles/content.style";
import { Card, Overlay, Title } from "../styles/content.style";

export default function Contents() {
  const navigate = useNavigate();

  return (
    <Section>
      <Overlay />

      <CardsWrapper>
        <Card>
          <Title>
            <Calendar2CheckFill
              size={70}
              color="#000"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/events");
              }}
            />
            <br />
            <p>Events</p>
          </Title>
        </Card>
        <Card>
          <Title>
            <PeopleFill
              size={70}
              color="#ff0000"
              onClick={() => {
                navigate("/teams");
              }}
            />
            <br />
            Teams
          </Title>
        </Card>
        <Card>
          <Title>
            <Receipt
              size={70}
              color="#008000"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/matches");
              }}
            />{" "}
            <br />
            Matches
          </Title>
        </Card>
      </CardsWrapper>
    </Section>
  );
}
