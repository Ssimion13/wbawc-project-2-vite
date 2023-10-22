
import { Checkbox, Grid } from '@mui/material';
import "../../App.css"

export default function CheckoutButtons(props) {
  const {
    isVideoOpen,
    isJapaneseCharactersVisible,
    setIsVideoOpen,
    setIsJapaneseCharactersVisible
  } = props;

  return (
    <Grid container>
      <Grid item>
        <Checkbox
          checked={isVideoOpen} 
          onClick={(e) => {
          setIsVideoOpen()}
          //[TODO] maybe add in cookie support here?
        }/>  
          <span style={{color: "white"}}> Enable Video </span>
      </Grid>
        <Grid item>
          <Checkbox
            checked={isJapaneseCharactersVisible}  
            onClick={setIsJapaneseCharactersVisible}
          //[TODO] maybe add in cookie support here?
          />
            <span style={{color: "white"}}> Enable Japanese Characters </span>
        </Grid>
    </Grid>
  );
}
