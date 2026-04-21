"use client";
import React from "react";

import { Calendar2CheckFill } from "react-bootstrap-icons";
import { PeopleFill } from "react-bootstrap-icons";
import { Receipt } from "react-bootstrap-icons";
import { useRouter } from "next/navigation";
import {
  CardsWrapper,
  Section,
  Card,
  Overlay,
  Title,
} from "../styles/content.style";

export default function Contents() {
  const router = useRouter();

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
                router.push("/events");
              }}
            />
            <br />
            <p>Events</p>
          </Title>
        </Card>
        <Card>
          <Title>
            <PeopleFill size={70} color="#ff0000" onClick={() => {}} />
            <br />
            Teams
          </Title>
        </Card>
        <Card>
          <Title>
            <Receipt size={70} color="#008000" onClick={() => {}} /> <br />
            Matches
          </Title>
        </Card>
      </CardsWrapper>
    </Section>
  );
}
