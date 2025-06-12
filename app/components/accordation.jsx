"use client";
import React from "react";
import { Accordion } from "react-bootstrap";

function Accordations() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Pashto</Accordion.Header>
        <Accordion.Body>
          سالمونه او نیکی هیلی تول دی کرکت گروپ ته خدای دی وکری چی روغ او جور
          اوسی ، لکه سنگه چی خبر یاستی دی افغانستان د تامپری شار دی کرکت تیم یو
          لیگ جور کری ٫ شپگیزه ٫ چی انشاللا را روان دوشمنبه ۱۴ دی اپریل به
          هیروانتا گروند کی پیل شی ، زمونگ هدف د دی لیگ به دا وی چی خپل دی
          لوبغارو ورتیا باندی کار وکرو او په ضمن کی خپل لیگ تاسیس کرو ، نو تاسو
          تولو نه په دیر درنشت هیله کیژی چی سو شیان په نظر کی ونیسی لوبه ته په
          وخت راتگ • احترام تولو ته . • خپل کپتان ته دقیق غوگ نیول او عمل کول .
          • دی گیم په محال کی له بی زایه خبرو خنداگانو او نورو لوبغارو ته مزاحمت
          دده کول . • لوبه ته منظم راتگ لباس بوتونه . •
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>English</Accordion.Header>
        <Accordion.Body>
          Greetings and best wishes to all the members of the cricket group. May
          Allah keep everyone healthy and successful. As you are already aware,
          the Afghan cricket team of Tampere has organized a league called
          “Shpageeza,” which, God willing, will start on Monday, April 14 -17,
          at Heravantha Ground. The purpose of this league is to work on
          improving the skills of our players and, at the same time, establish
          our own league. Therefore, we respectfully ask all of you to kindly
          keep the following points in mind: • Arrive on time for the matches •
          Show respect to all members • Listen carefully to the captain’s
          instructions and follow them • Avoid unnecessary talking, laughter,
          and disturbing other players during the game • Attend the matches
          regularly with proper uniform and shoes
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordations;
