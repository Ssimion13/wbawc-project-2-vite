import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import "../../App.css";
import CheckboxButtons from '../Common/CheckboxButtons';

export default function RockAByeBaby() {
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
            id="8_gw1ArxDLM"  
            title="RockaByeBaby"
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
                此岸ライフ捨てちゃって <br/>
                彼岸サイド目指しちゃって  <br/>
                畜生餓鬼道堕ちて地獄道  <br/>
                煩悩堪能もう三悪道 慈愛？ <br/>
                無いっす地獄なんで 冷水ダイブ！ <br/>
                あの世なんで 川越え泣き声どんぶらこっこ <br/>
                あそこで泣くのはロックなBaby？！ <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                shigan raifu sutechatte higan saido mezashichatte  <br/>
                chikushou gaki-dou ochite jigoku-dou bonnou tannou <br/>
                mou san’aku-dou jiai? nai ssu jigoku nande  <br/>
                reisui daibu! ano yo nande kawa koe  <br/>
                nakigoe donburako kko asoko de <br/>
                naku no wa rokku na Baby?! <br/>
            </Grid>

            <Grid item className="englishText">
                I threw away my life <br/>
                And aimed to cross to the other side <br/>
                Falling through the all three evil realms:  <br/>
                animal and hungry spirit, and hell with  <br/>
                skillful worldly desire and loving it? <br/>
                Diving to hell is a cold water dive! <br/>
                Why that world? Crossing a river, hearing a cry, tumbling <br/>
                Is that cry over there from a rockin’ baby? <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
              おやっ人じゃねえ！ <br/>
              こりゃっ人じゃねえ！ <br/>
              そりゃそうじゃねねんねんころりよ  <br/>
              Oh yeah, 人じゃねえ！  <br/>
              Oh no, 鬼じゃね？ <br/>
              こりゃ手遅れころりよころりよ <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                oya hito janee!  <br/>
                korya hito janee!  <br/>
                sorya sou ja ne nen nen korori yo <br/>
                Oh yeah, hito ja nee! Oh no, oni ja nee? <br/>
                korya teokure korori yo korori yo <br/>
            </Grid>
            <Grid item className="englishText">
                Hey there, you’re a human ain’t ya? <br/>
                Hey ho, a human, huh? <br/>
                That’s how it is, effortlessly rocking asleep <br/>
                Oh yeah, a human huh? <br/>
                Oh no, an oni, right? <br/>
                Well, it's too late, rock a bye, rock a bye… <br/>
            </Grid> 
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                ゆらゆらゆら揺りかごには石の赤ん坊！  <br/>
                (Wow, Rock-a-Bye Baby) <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                yura yura yura yurikago ni wa ishi no akanbou! <br/>
                (Wow, Rock-a-Bye Baby) <br/>
            </Grid>

            <Grid item className="englishText">
                Swinging, shaking, rolling in a cradle <br/>
                Is a stone baby! (Wow, rock-a-bye baby!) <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                Rock! Rock-a-Bye Baby～♪ <br/>
                ちょいとこの子抱いておくれ <br/>
                やっと眼ったばかりなんだよ…優しく <br/>
                Rock! Rock-a-Bye Baby～♪ <br/>
                重くなるのは愛だからかもね <br/>
                いつの間にか君も永眠ねんねん！<br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Rock! Rock-a-Bye Baby～♪ <br/>
                choi to kono ko daite okure <br/>
                yatto nemutta bakari nan da yo… <br/>
                yasashiku Rock! Rock-a-Bye Baby～♪ <br/>
                omoku naru no wa ai da kara kamo ne <br/>
                itsu no ma ni ka kimi mo eimin nen nen! <br/>
            </Grid>
            
            <Grid item className="englishText">
                Rock! Rock-a-Bye Baby～♪ <br/> 
                Can ya hold this kid for me for a sec? <br/>
                I finally got 'em to sleep…  so rock gently! <br/>
                Rock-a-Bye Baby ~  <br/>
                It might be love that's making it heavier, huh? <br/>
                before you know it you’ll also be in a forever nighty night! <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                ブンブン両手振っちゃって  <br/>
                ノンノンNot yet来るなって？  <br/>
                鬼さん鬼さん鬼さんこちら  <br/>
                南無三わからん帰らばどちら？ <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                bun bun ryoute fucchatte  <br/>
                non non Not yet kuru na tte?  <br/>
                oni-san oni-san oni-san kochira  <br/>
                namusan wakaran kaeraba dochira? <br/>
            </Grid>
            
            <Grid item className="englishText"> 
            Swinging with both hands <br/>
            Non non Not yet, don’t come, you say! <br/>
            Oni-san Oni-san Oni-san - which is which, <br/>
            Buddha? Don't know 'em, which way to go back? <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                おやっ人じゃねえ！ <br/>
                ありゃっ鬼じゃね？  <br/>
                そりゃそうじゃねころりよころりよ <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                oya hito janee!  <br/>
                korya oni janee!  <br/>
                sorya sou ja ne korori yo korori yo <br/>
            </Grid>

            <Grid item className="englishText">
                Hey there, you’re a human ain’t ya? <br/>
                Hey ho, an oni, huh? <br/>
                Seems right, rocking back and forth <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                呪うような子守歌が三途川から  <br/>
                (Oh Rock-a-Bye Baby!) <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                norou you na komori uta ga sanzu kawa kara <br/>
                (Oh Rock-a-Bye Baby!) <br/>
            </Grid>
            
            <Grid item className="englishText">
                A curse-like lullaby from the Sanzu River…  <br/>
                (Oh Rock-a-Bye Baby!) <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                Rock! Rock-a-Bye Baby～♪  <br/>
                ちょいとこの子抱いておくれ  <br/>
                やっと眼ったばかりなんだよ…優しく  <br/>
                Rock! Rock-a-Bye Baby～♪  <br/>
                重くなるのは愛だからかもね  <br/>
                いつの間にか君も永眠ねんねん！ <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Rock! Rock-a-Bye Baby～♪  <br/>
                choi to kono ko daite okure  <br/>
                yatto nemutta bakari nan da yo…  <br/>
                yasashiku Rock! Rock-a-Bye Baby～♪ <br/>
                omoku naru no wa ai da kara kamo ne <br/>
                itsu no ma ni ka kimi mo eimin nen nen! <br/>
            </Grid>
            
            <Grid item className="englishText">
                Rock! Rock-a-Bye Baby～♪  <br/>
                Can ya hold this kid for me for a sec? <br/>
                I finally got 'em to sleep… so rock gently! <br/>
                Rock! Rock-a-Bye Baby ~  <br/>
                It might be love that's making it heavier, huh? <br/> 
                before you know it you’ll also be in a forever nighty night! <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                Rock! Rock-a-Bye Baby♪  <br/>
                何も心配いらないよ  <br/>
                安らかに眠ってこの胸に抱かれて <br/>
                Rock! Rock-a-Bye Baby♪ <br/>
                怖いことはなにも起きないよ  <br/>
                食べちゃいたいくらいに  <br/>
                カワイイBaby… <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Rock! Rock-a-Bye Baby♪  <br/>
                nani mo shinpai iranai yo <br/>
                yasuraka ni nemutte kono mune ni dakarete  <br/>
                Rock! Rock-a-Bye Baby♪  <br/>
                kowai koto wa nani mo okinai yo <br/>
                tabechaitai kurai ni kawaii Baby… <br/>
            </Grid>
            
            <Grid item className="englishText">
                Rock! Rock-a-Bye Baby～♪ <br/>
                There’s nothing to worry about ~ <br/>
                Rest peacefully in this chest of mine… <br/>
                Rock! Rock-a-Bye Baby～♪ <br/>
                I won’t let anything scary happen, <br/>
                You baby, so cute I could eat… <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                ねんねんころりよ <br/>
                Oh, ころりよ…  <br/>
                ねんねんころりよ <br/>
                Oh, ころりよ… <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                nen nen korori yo <br/>
                Oh, korori yo… <br/>
                nen nen korori yo <br/>
                Oh, korori yo… <br/>
            </Grid>
            
            <Grid item className="englishText" style={{fontStyle: "italic"}}>
                Rock a bye baby, on the tree top, <br/>
                When the wind blows the cradle will rock. <br/>
                When the bough breaks the cradle will fall, <br/>
                And down will come baby, cradle and all…. <br/>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
