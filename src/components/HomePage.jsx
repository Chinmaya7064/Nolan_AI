import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Root = styled('div')(({ theme }) => ({
  height: '100vh',
  backgroundColor: '#101820',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
}));

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
});

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
});

const Logo = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  },
}));

const MainContent = styled(Container)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3),
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    padding: theme.spacing(4),
  },
}));

const TextSection = styled(Box)(({ theme }) => ({
  flex: 1,
  textAlign: 'center',
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    paddingRight: theme.spacing(6),
  },
}));

const Headline = styled(Typography)(({ theme }) => ({
  fontSize: '1.8rem',
  fontWeight: 'bold',
  lineHeight: 1.3,
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
}));

const HighlightedText = styled('span')({
  color: '#00BFFF',
});

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#007FFF',
  color: '#fff',
  padding: theme.spacing(1, 3),
  fontSize: '0.9rem',
  '&:hover': {
    backgroundColor: '#005BBB',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
    padding: theme.spacing(1, 4),
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(3),  
  [theme.breakpoints.up('md')]: {
    marginTop: 0,
  },
}));

const StyledImage = styled('img')(({ theme }) => ({
  borderRadius: '10px',
  width: '650px',
  maxWidth: '600px',
  height: '380px',
  transform: 'perspective(1500px) rotateY(-35deg)', 
  [theme.breakpoints.down('sm')]: {
    maxWidth: '300px',
  },
  border: '2px solid rgba(29, 110, 227, .4)',
}));




function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavClick = (path) => {
    setDrawerOpen(false);
    navigate(path);
  };

  if (isAuthenticated) {
    navigate('/dashboard');
  }

  const navLinks = [
    { label: "About Us", path: "/" },
    { label: "Pricing", path: "/" },
    { label: "Features", path: "/" },
    { label: "New Project", path: "/" },
    { label: "Blog", path: "/" },
  ];

  return (
    <Root>
      <StyledAppBar position="static">
        <StyledToolbar>
          <Logo variant="h6">NOLAN</Logo>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map((link) => (
              <Button key={link.label} color="inherit" onClick={() => handleNavClick(link.path)}>
                {link.label}
              </Button>
            ))}
            <Button variant="outlined" color="inherit" onClick={() => loginWithRedirect()}>
              Log in
            </Button>
          </Box>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </StyledToolbar>
      </StyledAppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle} >
        <List sx={{ width: 250,  }}>
          {navLinks.map((link) => (
            <ListItem button key={link.label} onClick={() => handleNavClick(link.path)}>
              <ListItemText primary={link.label} />
            </ListItem>
          ))}
          <ListItem button onClick={() => loginWithRedirect()}>
            <ListItemText primary="Log in" />
          </ListItem>
        </List>
      </Drawer>

      <MainContent>
        <TextSection>
          <Headline>
            Bring your film project to life <br />
            from <HighlightedText>idea</HighlightedText> to <HighlightedText>production</HighlightedText>
          </Headline>
          <StyledButton variant="contained">Start Creating</StyledButton>
        </TextSection>

        <ImageContainer>
          <StyledImage
            src="https://www.nolanai.app/_next/image?url=%2Fimages%2Fhero-img-for-studios_50.webp&w=3840&q=75"
            alt="Film Project"
          />
        </ImageContainer>
      </MainContent>
    </Root>
  );
}

export default HomePage;
