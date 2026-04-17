"use client";

import React, { useState } from "react";
import Accordations from "./accordation";
import { ToastContainer, toast } from "react-toastify";
import { PersonBadgeFill, Phone } from "react-bootstrap-icons";
import { Form, Button, Container, Row, Tabs, Tab } from "react-bootstrap";
import { Col, Alert, Modal } from "react-bootstrap";
export default function PrivacyandTerms({
  setShowTermsModal,
  setAcceptedTerms,
  acceptedTerms,
}) {
  return (
    <>
      <Container className="my-5">
        <Modal.Header>
          {/* <div className="w-100 text-center"> */}
          <Modal.Title className="w-100 text-center">
            Terms and Conditions
          </Modal.Title>
          {/* </div> */}
        </Modal.Header>
        <Modal.Body>
          <Tabs
            defaultActiveKey="pashto"
            id="terms-language-tabs"
            className="mb-3"
            fill
          >
            <Tab
              eventKey="pashto"
              title={<span className="tab-title tab-title-black">Pashto</span>}
            >
              <div className="text-end">
                <h1 className="mb-4">شرایط او مقررات</h1>
                <p>۱۵.۰۱.۲۰۲۶</p>
                <p>ملاحظې په لاندې ډول دي:</p>
                <ol style={{ direction: "rtl", textAlign: "right" }}>
                  <li>
                    په تمپره ښار کې د افغان کرکټ لوبغاړو لپاره د نظم او ډسپلین
                    مقررات ټاکل.
                  </li>
                  <li>
                    په دې ناسته کې د سپورټ کرکټ لوبغاړو ګډونوالو د مقرراتو د
                    ټاکلو لپاره راټول شول.
                  </li>
                  <li>
                    په دې غونډه کې مو پرېکړه وکړه چې د تمپره کرکټ لپاره یو داسې
                    کوچ وټاکو چې د ټولو لپاره منل شوی وي او تر ټولو زیاتې رایې
                    ترلاسه کړي.
                  </li>
                  <li>
                    هره پرېکړه چې کوچ په تمپره کرکټ کې کوي د ټولو لوبغاړو له
                    لوري درناوی او منل کېږي.
                  </li>
                  <li>
                    د واټس اپ ډلې مشري کوچ ته وسپارل شي او هیڅ لوبغاړی نشي کولی
                    اډمین وي.
                  </li>
                  <li>
                    سرکښ او بې درناوې لوبغاړی باید له ټیم څخه و ایستل شي او سزا
                    ورکړل شي څو بیا په راتلونکو لوبو کې ګډون ونکړي.
                  </li>
                  <li>
                    که کوم لوبغاړی قانون مات کړي یا د افغان کرکټ لوبه ګډوډه کړي،
                    په اړتیا کې د ۱۱۲ شمېره ته زنګ ووهئ او د پېښې مخه ونیسئ.
                  </li>
                  <li>
                    د افغان کرکټ لوبغاړو نومونه او لاسلیکونه په لاندې جدول کې
                    ذکر شوي دي.
                  </li>
                </ol>
              </div>
            </Tab>
            <Tab
              eventKey="dari"
              title={<span className="tab-title tab-title-green">Dari</span>}
            >
              <div className="text-end">
                <h1 className="mb-4">شرایط و مقررا</h1>
                <p>۱۵.۰۱.۲۰۲۶</p>
                <p>ملاحظه ها ذیل:</p>
                <ol style={{ direction: "rtl", textAlign: "right" }}>
                  <li>
                    تعین مقررات نظم و دسپلین کرکت افغان ها مقیم شهر تامپری.
                  </li>
                  <li>
                    در این نشست سهم داران بازی کنان سپورت کرکت با تعین کردن
                    مقررات جمع شده اند.
                  </li>
                  <li>
                    در این جلسه به این نتیجه رسیدیم که همه ما برای کرکت تامپری
                    یک کوچ تعیین کنیم که مورد قبول همه بوده و بیشترین رأی را
                    داشته باشد.
                  </li>
                  <li>
                    هر فیصله که کوچ در کرکت تامپری بکند قابل احترام و قبول همه
                    بازی کنان می باشدو
                  </li>
                  <li>
                    سر پرستی گروپ واتس آپ را به کوچ داده و هیچ بازی کن نمتواند
                    ادمین باشد.
                  </li>
                  <li>
                    بازی کن سر کش و بی احترام باید از تیم خارج و جریمه که نتواند
                    در بازی های بعدی شامل تیم باشد.
                  </li>
                  <li>
                    اگر کدام بازی کن خلاف ورز بکند یا بازی کرکت افغان ها را برهم
                    بزند در صورت ضرورت با شماره ۱۱۲ تماس گرفته و جلو حارثه شود.
                  </li>
                  <li>
                    نام و امضأ های بازیکنان کرکت افغانستان در جدول ذیل ذکر
                    گردیده است.
                  </li>
                </ol>
              </div>
            </Tab>
            <Tab
              eventKey="english"
              title={<span className="tab-title tab-title-red">English</span>}
            >
              <div className="text-start">
                <h1 className="mb-4">Terms and Conditions</h1>
                <p>Date of meeting: 15.01.2026</p>
                <p>Notes:</p>
                <ol>
                  <li>
                    Establish rules of discipline for Afghan cricket players
                    living in Tampere.
                  </li>
                  <li>
                    In this meeting, participants of the cricket sport gathered
                    to set the rules.
                  </li>
                  <li>
                    We agreed that we will appoint one coach for Tampere cricket
                    who is acceptable to everyone and receives the highest vote.
                  </li>
                  <li>
                    Every decision made by the coach in Tampere cricket is
                    respected and accepted by all players.
                  </li>
                  <li>
                    The WhatsApp group administration is given to the coach and
                    no player can be admin.
                  </li>
                  <li>
                    Any disobedient or disrespectful player must be removed from
                    the team and punished so they cannot join future matches.
                  </li>
                  <li>
                    If any player behaves unlawfully or disrupts Afghan cricket,
                    call 112 if needed and prevent the incident.
                  </li>
                  <li>
                    The names and signatures of Afghanistan cricket players are
                    listed in the table below.
                  </li>
                </ol>
              </div>
            </Tab>
          </Tabs>
        </Modal.Body>
        <div className="text-start terms-checkbox-wrapper">
          <Form.Check
            type="checkbox"
            id="modalTermsAccept"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            label="I accept the Terms and Conditions"
          />
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowTermsModal(false)}>
            Close
          </Button>
          <Button
            style={{
              backgroundColor: "#28a745",
              borderColor: "#28a745",
              color: "#000",
            }}
            variant=""
            onClick={() => setShowTermsModal(false)}
            disabled={!acceptedTerms}
          >
            Accept Terms
          </Button>
        </Modal.Footer>
      </Container>
    </>
  );
}
