import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        width: '80%',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 0',
        textAlign: 'center',
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontFamily: 'Metropolis',
          fontSize: '32px',
          fontWeight: 700,
          lineHeight: '36px',
          textAlign: 'center',
          marginBottom: '24px',
        }}
      >
        Frequently Asked Questions
      </Typography>

      {/* FAQ Accordion */}
      {[
        {
          question: 'What is Taleem?',
          answer:
            'Taleem is an innovative educational platform that connects students with top tutors and provides a range of academic and recreational courses. Our goal is to support students in achieving their educational and personal growth goals through personalized learning experiences.',
        },
        {
          question: 'How do I get started with Taleem?',
          answer:
            'Taleem offers personalized learning experiences by connecting students with expert tutors in various subjects. We provide both online and in-person tutoring options.',
        },
        {
          question: 'Can I cancel or reschedule a tutoring session?',
          answer:
            'Taleem offers a wide range of academic and recreational courses, including math, science, arts, sports, and personal development.',
        },
        {
          question: 'How can I provide feedback on my experience?',
          answer:
            'Yes, Taleem is accessible worldwide with both online learning options and resources available for all students regardless of location.',
        },
        {
          question: 'How do I book a tutoring session?',
          answer:
            'To become a tutor on Taleem, you can sign up on our platform, complete the required verification, and start teaching students based on your expertise.',
        },
      ].map((item, index) => (
        <Box key={index}>
          <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              boxShadow: 'none', // No shadow
              '&:before': { display: 'none' }, // No default MUI divider
              borderBottom: 'none', // No border on bottom
              marginBottom: '0px',
            }}
          >
            <AccordionSummary
              expandIcon={
                <Box
                  sx={{
                    backgroundColor: expanded === `panel${index}` ? '#40A39B' : '#FFFFFF', // Green when expanded
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid #E6E6E6', // Circle border matches divider color
                  }}
                >
                  <ExpandMoreIcon sx={{ color: expanded === `panel${index}` ? '#FFFFFF' : '#000' }} /> {/* White arrow on expand */}
                </Box>
              }
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
              sx={{
                padding: '16px',
                '& .MuiAccordionSummary-content': {
                  fontFamily: 'Metropolis',
                  fontSize: '24px',
                  fontWeight: 500, // Slightly bolder question
                  lineHeight: '28px',
                  textAlign: 'left',
                  width: '95%', // Increased width
                },
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                fontFamily: 'Metropolis',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '22px',
                textAlign: 'left',
                padding: '16px',
                width: '95%', // Increased width for answers
                color: '#737373',
              }}
            >
              {item.answer}
            </AccordionDetails>
          </Accordion>

          {/* Permanent Divider after each accordion */}
          <Box
            sx={{
              height: '1px',
              backgroundColor: '#E6E6E6', // Same color as arrow border
              width: '100%', // Full width
              margin: '16px 0', // Adds space between accordion and divider
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Faq;
