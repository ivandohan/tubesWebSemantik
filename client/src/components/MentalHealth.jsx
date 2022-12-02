import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WhatIsImg from "../assets/img/whatis.png";
import HowImportant from "../assets/img/howimportant.png";
import HowToMaintain from "../assets/img/howtomaintain.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";

const MentalHealth = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Mental Health" , "Motivation" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="mh" id="home">
      <Container>
        <Row className="align-items-center">
            <Col>
                <h1><span className="txt-rotate" dataPeriod="1000"><span className="wrap">{text}</span></span></h1>
                <Link to={`/`} style={{textDecoration: 'none'}}>
                    <button>Discover book... <ArrowRightCircle size={25} /></button>
                </Link>
            </Col>
        </Row>
        <Row className="align-items-center" style={{'margin-top': 70}}>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">What is Mental Health?</span>
                <p>
                Mental health is an important part of the life of a person. It impacts our behaviors, emotions, and thoughts. A healthy mental state promotes effectiveness, and productivity in activities that includes work, academics, and inter-personal relationships.
                A person who has sound mind is able to adapt itself to the changes in the life. His mind has the capability to withstand stress and does not go off the balance. His mental strength keeps him solid and unshaken amidst adversities and challenges in life. Mental health also plays a critical role in maintaining the health of your relationships.
                </p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={WhatIsImg} alt="Header Img" style={{width: 480}}/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
        <Row className="align-items-center" style={{'margin-top': 100}}>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">How Important is Mental Health?</span>
                <p>
                Mental health is very important for living a stable, and healthy life. It comprises of emotional, social, and psychological well-being of a person. As per the statistics, one in five people in the world struggles through mental health issues.
                It impacts the way we think, feel, and behave every day. Our mental health also impacts our decision-making procedure, how we deal with stress and how we connect with others in our lives. Let us see more about the significance of mental health.
                </p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={HowImportant} alt="Header Img" style={{width: 480}}/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
        <Row className="align-items-center" style={{'margin-top': 100}}>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">How to Maintain Mental Health?</span>
                <p>
                    Here's how to maintain mental health. <br />
                    <ul>
                        <li>Always try to think positive in all situations and conditions</li>
                        <li>Respect yourself, for example by not comparing yourself to others.</li>
                        <li>Treat yourself as you would treat someone else you love.</li>
                        <li>Doing a hobby / hobby is the best way to manage stress for yourself, for example keeping a diary, going for a walk, and talking.</li>
                        <li>Be grateful for everything you have so you can accept and love yourself</li>
                        <li>Develop your potential or try new things that have never been done.</li>
                        <li>Maintain good relationships with other people.</li>
                        <li>Relax with meditation or mindfulness techniques.</li>
                        <li>It is important to remember that mental health is something that should not be neglected and should be maintained to the best of its ability.</li>
                    </ul>
                </p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={HowToMaintain} alt="Header Img" style={{width: 480}}/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MentalHealth