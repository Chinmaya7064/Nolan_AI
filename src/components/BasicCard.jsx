import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { useNavigate } from 'react-router-dom';

export default function BasicCard({ title, type, description }) {

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/carddetails');
  };

  return (
    <div style={{backgroundColor: '#3f68a430', cursor: 'pointer' }} onClick={handleCardClick}>
    <Card 
      sx={{ 
        minWidth: 200,
        minHeight: 260,
        mx: 'auto', 
        my: 2, 
        p: 2,
        background: '#e9ebf1',
        borderRadius: '16px',
        boxShadow: '0 4px 6px #0135801a',
        display: 'flex',
        flexDirection: 'column',
        height: '300px',
        maxHeight: '300px',
        overflow: 'hidden',
        position: 'relative',
        '@media (min-width: 300px)': {
          maxWidth: '50%',  //  for tablets
        },
        '@media (min-width: 600px)': {
          maxWidth: '80%',  //  for tablets
        },
        '@media (min-width: 900px)': {
          maxWidth: '25%',  // for desktops
        }
      }}
    >
      
    <div style={{background: '#1d6ee3', borderTopLeftRadius: '4px', borderTopRightRadius: '4px', height: '52px', marginTop: '20px', marginLeft: '-16px' , position: 'absolute', top: '0', width: '4px'}}></div>

        <CardContent sx={{display: 'flex', flexDirection: 'column',  minHeight: '70px', padding: '0px 16px 12px 24px'}}>
          <div style={{wordWrap: 'break-word', color: '#1a1d24f5', flex: '1 1', fontSize: '16px', fontWeight: '600'}}>
            <Typography sx={{ mb: 1 }} color="text.secondary">
              {type}
            </Typography>
            
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
              {title}
            </Typography>
          </div>
          
          <div style={{wordWrap: 'break-word', color: '#000', fontSize: '13px', fontWeight: '400', letterSpacing: '.03px', overflow: 'hidden', textOverflow: 'ellipsis'}}>
            <Typography variant="body2">
              {description}
            </Typography>
          </div>
        </CardContent>

        <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center', padding: '8px', marginTop: '25px'}}>
          <div style={{alignItems: 'center', background: '#dde0eb', border: '2px solid #1a1d2429', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '24px', height: '150px', justifyContent: 'center', position: 'relative', width: '100%'}}>
            <div style={{display: 'block',}}>
               <span style={{wordWrap: 'normal', display: 'inline-block'}}> 
                  <InsertPhotoIcon sx={{fontSize: '50px'}} />
               </span>
            </div>
          </div>
        </div>
    </Card>
    </div>
  );
}
