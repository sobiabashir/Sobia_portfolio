import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      title: 'Internship Module',
      description: 'Developed REST APIs for user profile updates, friend requests, and post interactions.',
    },
    {
      title: 'Marketplace API',
      description: 'Created functionality for sellers and buyers with SQL database integration.',
    },
    {
      title: 'Feature Enhancements',
      description: 'Contributed to improving existing application features during previous job.',
    },
  ];

  return (
    <section id="projects" className="container mt-5">
      <h2>My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Projects;
