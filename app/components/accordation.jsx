"use client";
import React from "react";
import { Accordion } from "react-bootstrap";

function Accordations() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Pashto</Accordion.Header>
        <Accordion.Body className="text-end">
          <p>
            ټمپیرې د افغان کرکټ ټولنې ټولو درنو غړو ته سلامونه او نېکې هیلې
            وړاندې کوو. الله تعالی دې ټولو ته روغتیا، بریا او یووالی په نصیب
            کړي. موږ ویاړو چې زموږ ټولنه په منظم ډول د شپږیزه کرکټ لیګ، ډبل ویکټ
            سیالۍ او همدارنګه له هغو بېلابېلو هېوادونو سره چې په فنلینډ کې ژوند
            کوي د کرکټ سیریزونه تنظیموي.
          </p>
          <p>
            د دې فعالیتونو موخه د لوبغاړو مهارتونو لوړول، ټیمي کار پیاوړتیا او د
            ټولنو ترمنځ یووالی رامنځته کول دي. ټول هغه غړي چې غواړي ګډون وکړي،
            باید د غړیتوب نه مخکې شرایط او اصول ومني او تعقیب یې کړي.
          </p>
          <div className="report-list-wrapper">
            <ul className="report-list report-list-rtl">
              <li>د سیالیو لپاره پر وخت حاضر شي</li>
              <li>له ټولو لوبغاړو، تنظیموونکو او مسؤلینو سره درناوی وکړي</li>
              <li>د ټیم د کپتان لارښوونې په دقت واوري او عملي یې کړي</li>
              <li>
                د لوبې پر مهال له بېځایه خبرو، خندا او د نورو د مزاحمت څخه ډډه
                وکړي
              </li>
              <li>
                په منظم ډول سیالیو ته د مناسب لباس او بوټانو سره ګډون وکړي
              </li>
            </ul>
          </div>
          <p>
            ستاسو همکاري او نظم به موږ سره مرسته وکړي چې په ټمپیرې کې یو قوي او
            . بریالی کرکټي چاپېریال جوړ کړو. مننه ستاسو له ملاتړ څخه
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Dari</Accordion.Header>
        <Accordion.Body className="text-end">
          <p>
            موفقیت و همبستگی برای همه‌تان خواهانیم. با افتخار اعلام می‌کنیم که
            جامعه ما به‌طور منظم لیگ کریکت شپگیزه، مسابقات دبل ویکت و همچنان سری
            مسابقات با تیم‌های مربوط به کشورهای مختلف که در فنلند زندگی می‌کنند
            .را برگزار می‌نماید
          </p>
          <p>
            هدف از این فعالیت‌ها ارتقای مهارت‌های بازیکنان، تقویت کار تیمی و
            .ایجاد همبستگی میان جوامع مختلف از طریق کریکت می‌باشد
          </p>
          <p>
            تمام اعضایی که می‌خواهند اشتراک نمایند، باید قبل از عضویت شرایط و
            قوانین را پذیرفته و رعایت نمایند. این کار برای ایجاد یک محیط منظم،
            .محترمانه و مسلکی ضروری است
          </p>
          <div className="report-list-wrapper">
            <strong>راهنمای شرکت‌کنندگان</strong>
            <ul className="report-list report-list-rtl">
              <li>به موقع در مسابقات حضور یابند</li>
              <li>به تمام بازیکنان، برگزارکنندگان و مسئولین احترام بگذارند</li>
              <li>به هدایات کپتان با دقت گوش داده و آن را عملی کنند</li>
              <li>
                از صحبت‌های غیرضروری، خنده بی‌جا و مزاحمت برای دیگران در جریان
                بازی خودداری نمایند
              </li>
              <li>به‌صورت منظم با لباس و کفش مناسب در مسابقات اشتراک نمایند</li>
            </ul>
          </div>
          <p>
            همکاری و نظم شما کمک می‌کند تا یک محیط قوی و موفق کریکت در تمپره
            ایجاد نماییم. تشکر از حمایت شما.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>English</Accordion.Header>
        <Accordion.Body className="text-start">
          <p>
            Greetings and best wishes to all respected members of our Afghan
            cricket community in Tampere. May Allah grant everyone good health,
            success, and unity.
          </p>
          <p>
            We are proud to share that our community actively organizes
            Shpageeza Cricket Leagues, double wicket cricket matches, and series
            with different national teams living in Finland. These activities
            aim to improve players’ skills, promote teamwork, and strengthen
            unity among communities through cricket.
          </p>
          <p>
            All members who wish to participate must agree to and follow the
            terms and conditions before joining the membership. This ensures a
            respectful, disciplined, and professional environment for everyone.
          </p>
          <div className="report-list-wrapper">
            <strong>Participant guidelines:</strong>
            <ul className="report-list">
              <li>Arrive on time for all matches</li>
              <li>Show respect to all players, organizers, and officials</li>
              <li>Follow the captain’s instructions at all times</li>
              <li>
                Avoid unnecessary talking, laughter, or disturbing others during
                the game
              </li>
              <li>
                Attend matches regularly with proper uniform and appropriate
                shoes
              </li>
            </ul>
          </div>
          <p>
            Your cooperation and discipline will help us build a strong and
            successful cricket community in Tampere. Thank you for your support.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordations;
