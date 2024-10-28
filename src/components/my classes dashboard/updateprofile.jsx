import React, { useEffect, useState } from 'react';
import { Box, TextField, MenuItem, InputAdornment, Avatar, Typography, Button } from '@mui/material';
import ProfileBanner from '../common comps/profilebanners';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import profileImage from '../../assets/profile/image.svg';
import MyClassLayout from './MyClassLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile ,updateProfile} from '../../Redux/Actions';
import { useNavigate } from 'react-router-dom';

const ProfileUpdate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getProfileData = useSelector((state) => state.getProfileReducer?.getProfileData);
    
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        email: '',
        address: '',
        grade: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        dispatch(getProfile());
    }, []);

    useEffect(()=>{
        if(getProfileData){
            setFormData({
                fullName: getProfileData?.name,
                mobileNumber: getProfileData?.mobile_no,
                email: getProfileData?.email,
                address: getProfileData?.address,
                grade: ''
            })
        }
    },[getProfileData])

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = 'Full Name is required';
        if (!formData.mobileNumber) newErrors.mobileNumber = 'Mobile Number is required';
        // if (!formData.email) newErrors.email = 'Email ID is required';
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email format is invalid';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (field) => (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: event.target.value,
        }));
    };

    const handleSubmit = () => {
        if (validate()) {
            let payload=
            {
            name: formData?.fullName,
            // email: formData?.email,
                // "mobile_no: "1234567891",
            address: formData?.address,
            gender: getProfileData?.gender,
            grades:getProfileData?.grades,
            // dob: "2024-09-11T10:23:02.396Z",
            }
            dispatch(updateProfile(payload,()=>{console.log("POST API CALL")}));
            console.log(getProfileData,"Form data:", formData); // Here you can update the state in Redux or send it to an API
            navigate('/profile');
        }
    };

    return (
        <MyClassLayout>
            <Box>
                <ProfileBanner>
                    <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                        <Avatar
                            src={profileImage}
                            alt="Profile"
                            sx={{
                                width: 155,
                                height: 155,
                                borderRadius: '128px',
                                border: '6px solid white',
                                position: 'absolute',
                                bottom: '-157.5px',
                            }}
                        />
                    </Box>
                </ProfileBanner>

                <Box sx={{ padding: '24px', marginTop: '80px' }}>
                    <Box sx={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                        <Box sx={{ flex: 1 }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>
                                Full Name
                            </Typography>
                            <TextField
                                placeholder="Enter Name"
                                value={formData.fullName}
                                onChange={handleChange('fullName')}
                                fullWidth
                                variant="outlined"
                                error={!!errors.fullName}
                                helperText={errors.fullName}
                                InputProps={{
                                    style: { height: '48px', fontSize: '16px', fontWeight: 400, color: '#737373' }
                                }}
                            />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>
                                Mobile Number
                            </Typography>
                            <TextField
                                placeholder="Enter Mobile Number"
                                value={formData.mobileNumber}
                                onChange={handleChange('mobileNumber')}
                                fullWidth
                                variant="outlined"
                                error={!!errors.mobileNumber}
                                helperText={errors.mobileNumber}
                                InputProps={{
                                    style: { height: '48px', fontSize: '16px', fontWeight: 400, color: '#737373' }
                                }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
             {/*            <Box sx={{ flex: 1 }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>
                                Email ID
                            </Typography>
                            <TextField
                                placeholder="Enter Email"
                                value={formData.email}
                                onChange={handleChange('email')}
                                fullWidth
                                variant="outlined"
                                error={!!errors.email}
                                helperText={errors.email}
                                InputProps={{
                                    style: { height: '48px', fontSize: '16px', fontWeight: 400, color: '#737373' }
                                }}
                            />
                        </Box> */}
                        <Box sx={{ flex: 1 }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>
                                Address
                            </Typography>
                            <TextField
                                placeholder="Enter Address"
                                value={formData.address}
                                onChange={handleChange('address')}
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    style: { height: '48px', fontSize: '16px', fontWeight: 400, color: '#737373' }
                                }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ marginBottom: '16px', width: '50%' }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>
                            Select Grade
                        </Typography>
                        <TextField
                            placeholder="Enter Grade"
                            value={formData.grade}
                            onChange={handleChange('grade')}
                            select
                            fullWidth
                            variant="outlined"
                            SelectProps={{ IconComponent: () => null }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <ExpandMoreIcon />
                                    </InputAdornment>
                                ),
                                style: { height: '48px', fontSize: '16px', fontWeight: 400, color: '#737373' }
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

            <Box className="flex justify-end p-0 mt-8">
                <Button
                    variant="outlined"
                    sx={{
                        width: '164px',
                        height: '48px',
                        padding: '14px 16px',
                        borderRadius: '8px',
                        borderColor: '#40A39B',
                        color: '#40A39B',
                        marginRight: "30px"
                    }}
                    onClick={() => navigate('/profile')}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        width: '164px',
                        height: '48px',
                        padding: '14px 16px',
                        borderRadius: '8px',
                        backgroundColor: '#40A39B',
                        color: '#fff',
                        marginRight: '75px',
                    }}
                    onClick={handleSubmit}
                >
                    Save
                </Button>
            </Box>
        </MyClassLayout>
    );
};

export default ProfileUpdate;
