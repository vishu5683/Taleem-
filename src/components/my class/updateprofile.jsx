import React from 'react';
import { Box, TextField, MenuItem, InputAdornment, Avatar, Typography } from '@mui/material';
import ProfileBanner from '../common comps/profilebanners'; // Import the ProfileBanner component
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import profileImage from '../../assets/profile/image.svg'; // Import the profile image

const ProfileUpdate = () => {
    return (
        <Box>
            {/* Profile Banner with profile image overlapping */}
            <ProfileBanner>
                <Box 
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Avatar
                        src={profileImage}
                        alt="Profile"
                        sx={{
                            width: 155,
                            height: 155,
                            borderRadius: '128px',
                            border: '6px solid white',
                            position: 'absolute',
                            bottom: '-157.5px', // Adjusted to be half on the banner and half over the fields section
                        }}
                    />
                </Box>
            </ProfileBanner>

            {/* Profile Update Form */}
            <Box sx={{ padding: '24px', marginTop: '80px' }}> {/* Adjust marginTop to ensure space below the image */}
                
                {/* Full Name & Mobile Number */}
                <Box sx={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                    <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>
                            Full Name
                        </Typography>
                        <TextField
                            placeholder="Naseem Chikitani"
                            defaultValue="Naseem Chikitani"
                            fullWidth
                            variant="outlined"
                            InputProps={{
                                style: {
                                    height: '48px',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    color: '#737373'
                                }
                            }}
                        />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>
                            Mobile Number
                        </Typography>
                        <TextField
                            placeholder="+123-456-678"
                            defaultValue="+123-456-678"
                            fullWidth
                            variant="outlined"
                            InputProps={{
                                style: {
                                    height: '48px',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    color: '#737373'
                                }
                            }}
                        />
                    </Box>
                </Box>

                {/* Email ID & Address */}
                <Box sx={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                    <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>
                            Email ID
                        </Typography>
                        <TextField
                            placeholder="naseem@xyz.com"
                            defaultValue="naseem@xyz.com"
                            fullWidth
                            variant="outlined"
                            InputProps={{
                                style: {
                                    height: '48px',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    color: '#737373'
                                }
                            }}
                        />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>
                            Address
                        </Typography>
                        <TextField
                            placeholder="89123 Keshawn Valleys"
                            defaultValue="89123 Keshawn Valleys"
                            fullWidth
                            variant="outlined"
                            InputProps={{
                                style: {
                                    height: '48px',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    color: '#737373'
                                }
                            }}
                        />
                    </Box>
                </Box>

                {/* Grade Selection */}
                <Box sx={{ marginBottom: '16px', width: '50%' }}> {/* Reduced the width to 50% */}
                    <Typography sx={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>
                        Select Grade
                    </Typography>
                    <TextField
                        placeholder="10th"
                        defaultValue="10th"
                        select
                        fullWidth
                        variant="outlined"
                        SelectProps={{
                            IconComponent: () => null // Hides the default dropdown arrow
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <ExpandMoreIcon />
                                </InputAdornment>
                            ),
                            style: {
                                height: '48px',
                                fontSize: '16px',
                                fontWeight: 400,
                                color: '#737373'
                            }
                        }}
                    >
                        <MenuItem value="9th">9th</MenuItem>
                        <MenuItem value="10th">10th</MenuItem>
                        <MenuItem value="11th">11th</MenuItem>
                        <MenuItem value="12th">12th</MenuItem>
                    </TextField>
                </Box>
            </Box>
        </Box>
    );
};

export default ProfileUpdate;
