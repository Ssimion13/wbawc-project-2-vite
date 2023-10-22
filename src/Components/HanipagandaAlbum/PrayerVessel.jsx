import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import "../../App.css";
import CheckboxButtons from '../Common/CheckboxButtons';

export default function PrayerVessel() {
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
            id="nzHJmiw-8Wc"  
            title="PrayerVessel"
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
                空っぽの瞳に浮かんでは消えた <br/>
                交わらない誰かの影 <br/>
                笑っている　どこかで <br/>
                遠のいていく音影 <br/>
                ここに置き去りの僕らは <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Karappo no hitomi ni yukande wa kieta <br/>
                Majiwaranai dareka no kage <br/>
                Waratte iru dokoka de <br/>
                Toonoiteiku on kage <br/>
                Koko ni okizari no bokura wa <br/>
            </Grid>

            <Grid item className="englishText">
                Floating in and out of my vacant eyes <br/>
                Are someone's shadow that never meets with mine <br/>
                Laughing, somewhere <br/>
                The shadow of a sound that is fading to the distance <br/>
                Are we, who have been left to the wolves <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                どうか、この祈りが届くのなら <br/>
                まだ神がいるなら <br/>
                なにか信じられる希望を　光を <br/>
                ああ、空に星は絶えて <br/>
                花は色を失ってしまうから <br/>
                奪えない祈りの器を <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Douka, kono inori ga todoku no nara <br/>
                Mada kami ga iru nara <br/>
                Nanika shinjirareru kibou wo hikari wo <br/>
                Aa, sora ni hoshi wa taete <br/>
                Hana wa iro wo ushinatte shimau kara <br/>
                Ubaenai inori no utsuwa wo <br/>
            </Grid>
            <Grid item className="englishText">
                Please, if these prayers can reach, <br/>
                If there are still gods in this world <br/>
                [Give us] something to put our hope in – give us light <br/>
                Ah, because the stars in the sky are fading out <br/>
                and the flowers are losing all their color <br/>
                [Give us] A prayer vessel that cannot be taken from us <br/>
            </Grid>  
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                悲しみを量って比べて競って <br/>
                例え「幸福だ」って言われたって <br/>
                浮かんだ血は癒えない <br/>
                傷口はふさがらない <br/>
                頬を流れ渇いた涙 <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Kanashimi wo hakatte kurabete kisoutte <br/>
                Tatoe [koufuku da] tte iwaretatte <br/>
                Yukanda chi wa ienai <br/>
                Kizuguchi wa fusagaranai <br/> 
                Hoho wo nagare kawaita namida <br/>
            </Grid>

            <Grid item className="englishText">
                Measuring, comparing, and competing between our suffering <br/>
                Even if someone says “I’m happy” <br/>
                The blood that floats in the water will never heal <br/>
                The wounds will never heal <br/>
                Thirsty tears streaming down our cheeks <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                どうか、この祈りが届くのなら <br/>
                まだ神がいるなら <br/>
                なにか信じられる希望を　光を <br/>
                ああ、空に星は絶えて <br/>
                花は色を失ってしまうから <br/>
                奪えない祈りの器を <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Douka, kono inori ga todoku no nara <br/>
                Mada kami ga iru nara <br/>
                Nanika shinjirareru kibou wo hikari wo < br/>
                Aa, sora ni hoshi wa taete <br/>
                Hana wa iro wo ushinatte shimau kara <br/>
                Ubaenai inori no utsuwa wo <br/>
            </Grid>
            
            <Grid item className="englishText">
                Please, if these prayers can reach, <br/>
                If there are still gods in this world <br/>
                [Give us] Something to put our hope in – give us light <br/>
                Ah, because the stars in the sky are fading out <br/>
                and the flowers are losing all their color <br/>
                [Give us] A prayer vessel that cannot be taken from us <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                神様、この祈りが　この想いが <br/>
                まだ聞こえるのなら <br/>
                力なき僕らに最後の救いを <br/>
                ああ、空に星輝き <br/>
                花の色は数え切れないはず <br/>
                信じられるものがあるなら <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Kamisama, kono inori ga kono omoi ga <br/>
                Mada kikoeru no nara <br/>
                Chikara naki bokura ni saigo no sukui wo <br/>
                Aa, sora ni hoshi kagayaki (?) <br/>
                Hana no iro wa kazoekirenai hazu <br/>
                Shinjirareru mono ga aru nara <br/>
            </Grid>
            
            <Grid item className="englishText"> 
                Oh Lord, these prayers, these feelings <br/>
                If you can still hear them <br/>
                [Give us], the powerless, our final salvation <br/>
                Ah, the stars sparkling in the sky, and <br/>
                the colors of the flowers are without measure <br/>
                As long as we have something to believe in <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                奪えない祈りの器よ <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Ubaenai inori no utsuwa yo <br/>
            </Grid>

            <Grid item className="englishText">
                A prayer vessel that cannot be taken away <br/>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
