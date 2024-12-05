import React, { useState } from 'react';
import { Modal, Button, Row, Col, Card } from 'react-bootstrap';
const Experience = () => {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", details: "" });

  const experiences = [
    {
      title: "Junior System Programmer",
      details: `
        Developed and maintained system-level software in C++, integrating new features to enhance functionality and user experience.
        Collaborated with cross-functional teams to deliver solutions aligned with business and technical requirements. Conducted thorough testing,
        identified and resolved bugs to ensure system performance. Managed the codebase using Git, contributed to documentation, code reviews,
        and promoted best practices within the team.`,
    },
    {
      title: "System Developer",
      details: `
        Developed, tested, and maintained software applications in C++ aligned with project requirements and organizational goals.
        Successfully contributed to multiple projects by ensuring software quality and performance. Delivered solutions that met project specifications
        and enhanced system functionality.`,
    },
    {
      title: "Lecturer in Computer Science",
      details: `
        Taught programming-related subjects to Bachelor of Science in Computer Science students. Designed and delivered comprehensive lectures,
        course materials, syllabi, assignments, and exams. Provided one-on-one mentoring, supervised student projects, conducted assessments,
        and contributed to curriculum development to ensure alignment with industry trends and support student growth.`,
    },
  ];

  const handleShow = (experience) => {
    setModalContent(experience);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <section id="experience" className="experience-section container mt-5">
      <h2 className="section-title">Work Experience</h2>
      <Row>
        {experiences.map((exp, index) => (
          <Col md={4} key={index}>
            <Card className="card experience-card text-center">
              <Card.Body>
                <Card.Title className="experience-title">{exp.title}</Card.Title>
                <Button variant="primary" onClick={() => handleShow(exp)}>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ whiteSpace: "pre-line" }}>
          {modalContent.details}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Experience;
