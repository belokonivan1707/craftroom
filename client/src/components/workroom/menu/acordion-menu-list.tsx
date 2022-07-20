import React from 'react';
import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import Accordion from '@mui/material/Accordion/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails/AccordionDetails';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider/Divider';
import Typography from '@mui/material/Typography/Typography';

export const AccordionMenuList = () => {
  return (
    <List>
      {Array.from({ length: Math.floor(Math.random() * 10) }, (_, index) => (
        <ListItem
          key={index}
          disableGutters
          sx={{
            py: 0,
            borderBottom: '1px solid',
            borderColor: 'custom.divider'
          }}
        >
          <Accordion sx={{ width: '100%', boxShadow: 'none' }}>
            <AccordionSummary sx={{ p: 0 }} expandIcon={<ExpandMoreIcon />}>
              <ListItemText
                primary={`Category ${index}`}
                primaryTypographyProps={{
                  variant: 'h5'
                }}
              />
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
              {Array.from({ length: Math.floor(Math.random() * 10) }, (_, index) => (
                <div key={index}>
                  <Divider />
                  <Typography variant="h5" sx={{ py: 2 }} key={index}>
                    title {index}
                  </Typography>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        </ListItem>
      ))}
    </List>
  );
};
