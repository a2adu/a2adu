import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

const GNewsletterButtons = ({onAdd}) => {  
{/* Input check functionality - if empty, alerts an error message */}
const [text, setText] = useState('');

const onSubmit = (e) => {
    e.preventDefault()
    console.info( 'Textas:', text); 
    if (!text) {
        alert('Irasykite teksta')
      return
  }

  onAdd({ text })
    setText('')
  }

{/* Initialized Google Buttons */}
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },

    link: {
      display: 'flex',
    },

    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  }));
  
  const classes = useStyles();

  return (
  <div className="GNewsletter">
    <form className="ml-block-form" action="" onSubmit={onSubmit} data-code="k7u2u4" method="post" target="_blank">
                    <div className="ml-form-formContent">
                      <div className="ml-form-fieldRow ml-last-item">
                        <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                          <input type="email" className="form-control" data-inputmask="" name="fields[email]" value={text} placeholder="Jūsų el. pašto adresas" aria-invalid="false"/>
                          <TextField id="standard-basic" label="El. pastas" value={text} onChange={(e) => setText(e.target.value)} placeholder="Jūsų el. pašto adresas" />
                        </div>
                      </div>
                    </div>

                    <div className={classes.root}>
                  <Button type="submit" variant="outlined">Default</Button>
          </div>
  </form>
  </div>
 
 
  );
}

export default GNewsletterButtons;
