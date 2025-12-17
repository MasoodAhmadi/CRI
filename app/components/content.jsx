"use client";
import React from "react";

import {
  CardsWrapper,
  Section,
  Card,
  Overlay,
  Title,
} from "../styles/content.style";
import { Calendar2CheckFill } from "react-bootstrap-icons";
import { PeopleFill } from "react-bootstrap-icons";
import { Receipt } from "react-bootstrap-icons";

export default function Contents() {
  return (
    <Section>
      <Overlay />

      <CardsWrapper>
        <Card>
          <Title>
            <Calendar2CheckFill size={70} color="#000" />
            <br />
            Events
          </Title>
        </Card>
        <Card>
          <Title>
            <PeopleFill size={70} color="#ff0000" />
            <br />
            Teams
          </Title>
        </Card>
        <Card>
          <Title>
            <Receipt size={70} color="#008000" /> <br />
            Matches
          </Title>
        </Card>
      </CardsWrapper>
    </Section>
  );
}
