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
            id="77q3-KriFmU"  
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
                一二の三、一二の三歩で <br/>
                何もかも忘れちゃいましょう <br/>
                悲しみや憎しみなんかに <br/>
                縛られないように <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Ichi ni no san, ichi ni no sanpo de <br/>
                Nanimo kamo wasurechaimashou <br/>
                Kanashimi ya kuyashimi minna ni <br/>
                Shiborarenai you ni <br/>
            </Grid>

            <Grid item className="englishText">
                1, 2, and 3, with 1, 2, 3 steps <br/>
                Let’s forget anything and everything <br/>
                So everyone won’t be shackled by such things <br/>
                like pain and hatred <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                誰も恨まないで済むのなら <br/>
                [きっともっと楽しくなれる] <br/>
                誰も妬まないで済むのなら <br/>
                [きっともっと素直に笑える] <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Daremo uramanai de sumu no nara <br/>
                [kitto motto tanoshiku nareru] <br/>
                Daremo netamanai de sumu no nara <br/>
                [kitto motto sunao ni kotaeru] <br/>
            </Grid>
            <Grid item className="englishText">
                If I could just not hold a grudge against anyone <br/>
                [Certainly it would become more enjoyable] <br/>
                If I could not hold jealousy of anyone <br/> 
                [Certainly I could more honestly laugh] <br/>
            </Grid> 
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                庭には二羽ニワトリ <br/>
                裹庭には二羽おり <br/>
                庭には二羽ニワトリ <br/>
                裹庭には二羽…庭には？ <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Niwa ni wa niwa niwatori <br/>
                Ura niwa niwa niwa ori <br/>
                Niwa ni wa niwa niwatori <br/>
                Ura ni wa niwa niwa… niwa ni wa? <br/>
            </Grid>

            <Grid item className="englishText">
                “In the garden there are two chickens <br/>
                In the backyard there are two birds <br/>
                In the garden there are two chickens <br/>
                In the backyard there are two chickens <br/>
                ….(how many) were in the garden?” <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                Step! 1,2,3 <br/>
                一二の三、一二の三歩で <br/>
                何もかも忘れちゃいました <br/>
                悲しみも憎しみもみんな <br/>
                どこ吹く風ヒラヒラ <br/>
                一二の三、一二の三歩で <br/>
                何もかも許しちゃいますよ <br/>
                ららら、久侘歌！ <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Step! 1,2,3 <br/>
                ichi ni no san, ichi ni no sanpo de <br/>
                nanimo kamo wasurechaimashita <br/>
                {/* TODO is this right? */}
                kanashimi mo kuyashimi mo minna <br/>
                doko fuku kaze <i> hira hira </i> <br/>
                ichi ni no san, ichi ni no sanpo de <br/>
                nanimo kamo yurushichaimasu yo <br/>
                rarara, kutaka <br/>
            </Grid>
            
            <Grid item className="englishText">
                Step! 1,2,3 <br/>
                One, two and three, in one, two and three steps <br/>
                I'll forget everything and anything <br/>
                Sadness and hatred and everything <br/>
                floating somewhere, blowing in the wind <br/>
                One, two and three, in one, two and three steps <br/>
                I will forgive/allow everything and anything <br/>
                la la la, Kutaka**! <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                思い出す苦痛がなければ <br/>
                [過去に置き去りにした記憶] <br/>
                疑う余地も不安もないから <br/>
                [未来、希望だけで描くの] <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Omoidasu kutsuu ga nakereba <br/>
                [kako ni okizari ni shita kioku] <br/>
                utagu yochi mo fuan mo nai kara <br/>
                [mirai, kibou dake de egaku no] <br/>
            </Grid>
            
            <Grid item className="englishText"> 
                If I could not remember the painful memories <br/>
                [The memories, left behind in the past] <br/>
                I wouldn't have doubt or unease <br/>
                [I could draw out the future with just my hopes] <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                庭には二羽ニワトリ <br/>
                裹庭には二羽おり <br/>
                庭には二羽ニワトリ <br/>
                裹庭には二羽…庭には？ <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Niwa ni wa niwa niwatori <br/>
                Ura niwa niwa niwa ori <br/>
                Niwa ni wa niwa niwatori <br/>
                Ura ni wa niwa niwa… niwa ni wa? <br/>
            </Grid>

            <Grid item className="englishText">
                “In the garden there are two chickens <br/>
                In the backyard there are two birds <br/>
                In the garden there are two chickens <br/>
                In the backyard there are two chickens <br/>
                ….(how many) in the garden?” <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                Step! 1,2,3 <br/>
                一二の三、一二の三歩で <br/>
                何もかも忘れちゃいました <br/>
                悲しみも憎しみもみんな <br/>
                どこ吹く風ヒラヒラ <br/>
                一二の三、一二の三歩で <br/>
                何もかも許しちゃいますよ <br/>
                ららら、久侘歌！ <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Step! 1,2,3 <br/>
                ichi ni no san, ichi ni no sanpo de <br/>
                nanimo kamo wasurechaimashita <br/>
                {/* TODO is this right? */}
                kanashimi mo kuyashimi mo minna <br/>
                doko fuku kaze <i> hira hira </i> <br/>
                ichi ni no san, ichi ni no sanpo de <br/>
                nanimo kamo yurushichaimasu yo <br/>
                rarara, kutaka <br/>
            </Grid>
            
            <Grid item className="englishText">
                Step! 1,2,3 <br/>
                One, two and three, in one, two and three steps <br/>
                I forgot everything and anything <br/>
                Sadness and hatred and everything <br/>
                floating somewhere, blowing in the wind <br/>
                One, two and three, in one, two and three steps <br/>
                I will forgive/allow everything and anything <br/>
                la la la, Kutaka**! <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                一二の三、一二の三歩で忘れちゃいますよ <br/>
                根に時つにも根っこがないのです <br/>
                一二の三、一二の三歩で許しちゃいますよ <br/>
                だって、縛られるのはごめんですから。 <br/>

            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Step! 1,2,3 <br/>
                ichi ni no san, ichi ni no sanpo de <br/>
                nanimo kamo wasurechaimasu yo <br/>
                kon nitokitsu ni mo kokko ga nai no desu <br/>
                ichi ni no san, ichi ni no sanpo de <br/>
                yurushichaimasu yo <br/>

                datte, shiborareru no wa gomen desu kara <br/>
            </Grid>
            
            <Grid item className="englishText">
            Step! 1,2,3
                One, two and three, in one, two and three steps <br/>
                I'll forget everything and anything <br/>
                The thing is, there's no reason to ever hold a grudge*  <br/>
                One, two and three, in one, two, and three steps <br/>
                I'll forgive you <br/>

                After all, I want to avoid being tied down... <br/>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
