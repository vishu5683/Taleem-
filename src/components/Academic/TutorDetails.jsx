import React from 'react';
import { Box, Typography, Divider, Card, Button, Avatar } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarBorderIcon from '@mui/icons-material/Star';
import girl from '../../assets/course card/girl.png';
import pic1 from "../../assets/schedule classes/Ellipse 36 (1).svg";

const TutorDetails = () => {
  return (
    <Box sx={{ padding: { xs: '10px 20px', sm: '20px 50px', md: '20px 100px' } }}>
      {/* Breadcrumbs */}
      <Typography
        variant="body2"
        sx={{
          fontWeight: 400,
          fontSize: { xs: '10px', md: '12px' },
          color: '#737373',
          marginBottom: '8px',
          textAlign: 'left',
        }}
      >
        Home &gt; Recreational &gt; Tutors Listing &gt;{' '}
        <span style={{ fontWeight: 700, color: 'black' }}>Tutors Details</span>
      </Typography>

      {/* Tutor Card */}
      <Card
        sx={{
          width: '100%',
          maxWidth: '763px',
          borderRadius: '12px',
          background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
          padding: '20px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          marginBottom: '20px',
        }}
      >
        {/* Tutor Image */}
        <Box
          component="img"
          src={girl}
          alt="Tutor"
          sx={{
            width: { xs: '60px', md: '85px' },
            height: { xs: '60px', md: '92px' },
            borderRadius: '8px',
            mb: { xs: 2, md: 0 }
          }}
        />

        {/* Tutor Info */}
        <Box sx={{ flexGrow: 1, ml: { xs: 0, md: 2 }, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>Daniela Chikitani</Typography>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 1, mt: 1 }}>
            <BusinessCenterIcon sx={{ color: '#F3C623' }} />
            <Typography variant="body2" sx={{ color: '#333' }}>Music Tutors in University</Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 1, mt: 1 }}>
            <LocationOnIcon sx={{ color: '#F3C623' }} />
            <Typography variant="body2" sx={{ color: '#333' }}>Doha, Qatar</Typography>
            <Divider orientation="vertical" flexItem sx={{ backgroundColor: '#E6E6E6', display: { xs: 'none', md: 'block' } }} />
            <StarBorderIcon sx={{ color: '#EBBE49', fontSize: '20px' }} />
            <Typography variant="body2" sx={{ color: '#333' }}>4.0 Rating | 128 Reviews</Typography>
          </Box>
        </Box>

        {/* Action Button */}
        <Button
          variant="contained"
          sx={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            backgroundColor: '#40A39B',
            color: '#ffffff',
            fontWeight: 500,
            textTransform: 'none',
            '&:hover': { backgroundColor: '#359c87' },
            width: { xs: 'auto', md: '150px' },
          }}
        >
          Book Tutor
        </Button>
      </Card>

      {/* About Section */}
      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '10px' }}>About</Typography>
        <Typography variant="body2" sx={{ color: '#878787', lineHeight: '1.5' }}>
          Teaching Philosophy: Ms. Doe believes in making math accessible and enjoyable for all students. She uses a variety of<br />
          teaching methods to cater to different learning styles and encourages students Teaching Philosophy: Ms. Doe believes in<br />
          making math accessible and enjoyable for all students. She uses a variety of teaching methods to cater to different<br />
          learning styles and encourages students.
        </Typography>
      </Box>

      {/* Reviews Section */}
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '10px' }}>Reviews</Typography>

        {/* Review Card */}
        {[{ name: 'Vania Roy', rating: 4.5, date: '3 days ago', comment: 'I really enjoyed Calculus 101. The instructor explained difficult concepts in a way that was easy to understand, and the course materials were very helpful.' },
          { name: 'John Doe', rating: 4.0, date: '1 week ago', comment: 'The tutor was great at helping me understand the subject better. I feel more confident now!' }]
          .map((review, index) => (
            <Card
              key={index}
              sx={{
                width: '100%',
                maxWidth: '560px',
                borderRadius: '9px',
                backgroundColor: '#D4EBFF',
                padding: '20px',
                marginBottom: '16px',
              }}
            >
              <Box display="flex" alignItems="center">
                <Avatar src={pic1} sx={{ width: '64px', height: '64px', borderRadius: '50%' }} />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>{review.name}</Typography>
                  <Typography variant="body2" sx={{ color: '#737373' }}>{review.date}</Typography>
                </Box>
                <Box sx={{ ml: 'auto', textAlign: 'right' }}>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>{review.rating === 4.5 ? 'Excellent' : 'Very Good'} ({review.rating})</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {[...Array(Math.floor(review.rating))].map((_, i) => (
                      <StarBorderIcon key={i} sx={{ color: '#EBBE49', fontSize: '20px' }} />
                    ))}
                    {[...Array(5 - Math.floor(review.rating))].map((_, i) => (
                      <StarBorderIcon key={i} sx={{ color: '#E6E6E6', fontSize: '20px' }} />
                    ))}
                  </Box>
                </Box>
              </Box>
              <Typography variant="body2" sx={{ mt: 2, color: '#878787' }}>{review.comment}</Typography>
            </Card>
          ))}
      </Box>
    </Box>
  );
};

export default TutorDetails;
