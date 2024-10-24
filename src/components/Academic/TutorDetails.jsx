import React from 'react';
import { Box, Typography, Divider, Card, Button } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import girl from '../../assets/course card/girl.png';
import Avatar from '@mui/material/Avatar';

const TutorDetails = () => {
  return (
    <Box
      sx={{
        padding: { xs: '10px 20px', sm: '20px 50px', md: '20px 100px' },
      }}
    >
      {/* Breadcrumbs */}
      <Typography
        variant="body2"
        sx={{
          fontWeight: 400,
          fontSize: { xs: '10px', md: '12px' },
          color: '#737373',
          marginBottom: '8px', // reduced margin between breadcrumb and content
          textAlign: 'left',
        }}
      >
        Home &gt; Recreational &gt; Tutors Listing &gt;{' '}
        <span style={{ fontWeight: 700, color: 'black' }}>Tutors Details</span>
      </Typography>

      {/* Tutor Card */}
      <Card
        sx={{
          width: { xs: '100%', md: '763px' },
          height: { xs: 'auto', md: '173px' },
          borderRadius: '12px',
          background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
          padding: '20px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative', // allow positioning of button
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
          }}
        />

        {/* Tutor Info */}
        <Box sx={{ flexGrow: 1, marginLeft: { xs: '0', md: '10px' }, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Daniela Chikitani
          </Typography>

          {/* Tutor Additional Info */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: '10px',
              marginTop: '8px',
            }}
          >
            <BusinessCenterIcon sx={{ color: '#F3C623' }} />
            <Typography variant="body2" sx={{ color: '#333' }}>
              Music Tutors in University
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: '10px',
              marginTop: '8px',
            }}
          >
            <LocationOnIcon sx={{ color: '#F3C623' }} />
            <Typography variant="body2" sx={{ color: '#333' }}>
              Doha, Qatar
            </Typography>
            <Divider orientation="vertical" flexItem sx={{ backgroundColor: '#E6E6E6', display: { xs: 'none', md: 'block' } }} />
            <StarBorderIcon sx={{ color: '#EBBE49', fontSize: '20px' }} /> {/* Changed star color and size */}
            <Typography variant="body2" sx={{ color: '#333' }}>
              4.0 Rating | 128 Reviews
            </Typography>
          </Box>
        </Box>

        {/* Action Buttons */}
        <Button
          variant="contained"
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px', // Button at top-right corner
            backgroundColor: '#40A39B',
            color: '#ffffff',
            fontWeight: 500,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#359c87',
            },
            width: { xs: 'auto', md: '150px' },
          }}
        >
          Book Tutor
        </Button>
      </Card>

      {/* About Section */}
      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '10px' }}>
          About
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#878787',
            lineHeight: '1.5',
            width: '100%', // Remove width restriction
          }}
        >
          Teaching Philosophy: Ms. Doe believes in making math accessible and enjoyable for all students. She uses a variety of<br/>
          teaching methods to cater to different learning styles and encourages students Teaching Philosophy: Ms. Doe believes in<br/>
          making math accessible and enjoyable for all students. She uses a variety of teaching methods to cater to different<br/>
          learning styles and encourages students.
        </Typography>
      </Box>

      {/* Reviews Section */}
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '10px' }}>
          Reviews
        </Typography>

        {/* Review Card */}
        <Card
          sx={{
            width: '560px',
            height: '206px',
            borderRadius: '9px',
            backgroundColor: '#D4EBFF',
            padding: '20px',
            marginBottom: '16px',
          }}
        >
          <Box display="flex" alignItems="center">
            <Avatar sx={{ width: '64px', height: '64px', borderRadius: '50%' }}>V</Avatar>
            <Box sx={{ marginLeft: '16px' }}>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Vania Roy
              </Typography>
              <Typography variant="body2" sx={{ color: '#737373' }}>
                3 days ago
              </Typography>
            </Box>
            <Box sx={{ marginLeft: 'auto', textAlign: 'right' }}>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Excellent (4.5)
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {[...Array(3)].map((_, i) => (
                  <StarBorderIcon key={i} sx={{ color: '#EBBE49', fontSize: '20px' }} />
                ))}
                {[...Array(2)].map((_, i) => (
                  <StarBorderIcon key={i} sx={{ color: '#E6E6E6', fontSize: '20px' }} />
                ))}
              </Box>
            </Box>
          </Box>
          <Typography variant="body2" sx={{ marginTop: '16px', color: '#878787' }}>
            I really enjoyed Calculus 101. The instructor explained difficult concepts in a way that was easy to understand, and the
            course materials were very helpful.
          </Typography>
        </Card>

        {/* Add another review card */}
        <Card
          sx={{
            width: '560px',
            height: '206px',
            borderRadius: '9px',
            backgroundColor: '#D4EBFF',
            padding: '20px',
            marginBottom: '16px',
          }}
        >
          <Box display="flex" alignItems="center">
            <Avatar sx={{ width: '64px', height: '64px', borderRadius: '50%' }}>J</Avatar>
            <Box sx={{ marginLeft: '16px' }}>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                John Doe
              </Typography>
              <Typography variant="body2" sx={{ color: '#737373' }}>
                1 week ago
              </Typography>
            </Box>
            <Box sx={{ marginLeft: 'auto', textAlign: 'right' }}>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Very Good (4.0)
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {[...Array(4)].map((_, i) => (
                  <StarBorderIcon key={i} sx={{ color: '#EBBE49', fontSize: '20px' }} />
                ))}
                <StarBorderIcon sx={{ color: '#E6E6E6', fontSize: '20px' }} />
              </Box>
            </Box>
          </Box>
          <Typography variant="body2" sx={{ marginTop: '16px', color: '#878787' }}>
            The tutor was great at helping me understand the subject better. I feel more confident now!
          </Typography>
        </Card>
      </Box>
    </Box>
  );
};

export default TutorDetails;
