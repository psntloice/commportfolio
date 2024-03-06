// components/ProjectCard.tsx

import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { autocompleteClasses } from '@mui/material';

const ProjectCard: React.FC = () => {
  // Define an array of projects
  const projects = [
    {
      title: "University Learning PLatform",
      description: "Still a work in progress",
      imageUrl: "/images/nxmui.png",
      livePreviewLink: "https://nxmui.vercel.app/"
    },
    {
      title: "Tours and Travel Application",
      description: "Still a work in progress",
      imageUrl: "/images/tnt.png",
      livePreviewLink: "https://tnt-nine.vercel.app/"
    },
    {
      title: "Automobile Management System",
      description: "Still a work in progress",
      imageUrl: "/images/autom.jpeg",
      livePreviewLink: "https://autom-iota.vercel.app/"
    },
    // Add more projects as needed
  ];

  return (
    <Container
    id="projects"
  style={{
paddingTop: '20px',
padding:'10px',
    display: 'flex', flexWrap: 'wrap', gap: '20px',
     justifyContent: 'space-around' }}>
    {projects.map((project, index) => (
      <Card key={index} style={{ width: '300px', marginBottom: '20px' }}>
        <CardMedia
          component="img"
          height="150"
          image={project.imageUrl}
          alt={project.title}
        />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button href={project.livePreviewLink} target="_blank" variant="contained">
              Live Preview
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default ProjectCard;
