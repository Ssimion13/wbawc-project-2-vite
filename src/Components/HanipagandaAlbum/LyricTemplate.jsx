import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import "../../App.css";
import CheckboxButtons from '../Common/CheckboxButtons';

export default function LikeAnAnimal() {
  const [isVideoOpen, setIsVideoOpen] = React.useState(true);
  const [isJapaneseCharactersVisible, setIsJapaneseCharactersVisible] = React.useState(false);

  const JapaneseCharacterGrid = styled(Grid)({
    display: isJapaneseCharactersVisible ? "block" : "none"
  });

  //TODO: selectively render the text depending on user settings, add a button for each type
  //TODO: Figure out why the overlay is so damn big on the youtube player...
  return (
    <Grid container direction="column">
      {isVideoOpen &&
        <Grid item className="ytVideoContainer">
          <LiteYouTubeEmbed 
            id="9YFZ_7yPId4"  
            title="Toge"
            wrapperClass="yt-lite"
          />
        </Grid>
      }
          <CheckboxButtons 
            isVideoOpen={isVideoOpen} 
            isJapaneseCharactersVisible={isJapaneseCharactersVisible}
            setIsVideoOpen={() => setIsVideoOpen(!isVideoOpen)}
            setIsJapaneseCharactersVisible={() => setIsJapaneseCharactersVisible(!isJapaneseCharactersVisible)}
          />
      <Grid container item direction="column" className="textContainer translationMarginTop">          
        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
            </Grid>

            <Grid item className="englishText">
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
            </Grid>
            <Grid item className="englishText">
            </Grid> 
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
            </Grid>

            <Grid item className="englishText">
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
            </Grid>
            
            <Grid item className="englishText">
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
            </Grid>
            
            <Grid item className="englishText"> 
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
            </Grid>

            <Grid item className="englishText">
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
            </Grid>
            
            <Grid item className="englishText">
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
            </Grid>
            
            <Grid item className="englishText">
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
