import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { Divider, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import "../../App.css";
import CheckboxButtons from '../Common/CheckboxButtons';
import Ebisu from "../../Pictures/Ebisu.jpg";
import Eika_Ebisu from "../../Pictures/Eika_Ebisu.png";
import Sisiphus from "../../Pictures/Sisiphus.jpg";

export default function EveryDayIsAGoodDay() {
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
            id="8WhNIuqhOOo"  
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
        Context
            <Grid item className="japaneseRomanizedText">
                This song is an arrange of the first stage theme and <br/> 
                first stage boss theme of Wily Beast and Weakest Creature. <br/>
                The first level takes place on the riverbed of the Sanzu River <br/> 
                (more or less the Shinto version of the River Styx in Greek Mythology) <br/>
                On the riverbed are the "Mizuko" (lit. "water child" 水子), <br/>
                the spirits of stillborn or aborted children. These child spirits' fate is to <br/>
                attempt to stack rocks in the hopes of reaching heaven (and salvation) -- the catch is that <br/>
                oni come around and destroy their stacks of rocks, thus creating a Sisiphus-esque <br/>
                situation for the poor child spirits. <br/> <br/>

                The first boss of the game, Eika Ebisu is a Mizuko. <br/>
                In every version of Touhou 17's story the main character destroys <br/>
                several of these stone stacks, causing Eika to become angry <br/>
                and attack. <br/> <br/> 

                Her title in the game is "Stillborn Idol of the Riverbed". This is a pun -- <br/>
                she is an idol to the other Mizuko in universe, but her 'last name' <br/>
                Ebisu is a famous god of good fortune and fishermen but also the first god created <br/> 
                by the creator gods Izanami and Izanagi (as opposed to the final boss, who was the last.) <br/>
                ...What is an idol, anyways? <br/> <br/>
                
                <Link sx={{color: "lightblue"}} href="https://en.wikipedia.org/wiki/Ebisu_(mythology)"> Ebisu (Mythology) </Link> <br/>
                <Link sx={{color: "lightblue"}} href="https://en.wikipedia.org/wiki/Mizuko_kuy%C5%8D"> Mizuko (+ Ritual)  </Link>

            </Grid>
            <Grid container item justifyContent="space-around" alignItems="center">
                <Grid item>
                    <img style={{width: '200px', height: '250px'}} src={Eika_Ebisu} />
                </Grid>
                <Grid item>
                    <img style={{width: '200px', height: '250px'}} src={Ebisu} />
                </Grid>
            </Grid>
      </Grid>  
      <Grid container item direction="column" className="textContainer translationMarginTop">  
      Lyrics:         
        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                Hey, 積み上げては崩されちゃう <br/>
                理不尽なの　日々毎日 <br/>
                Yeah, 朝と夜と繰り返して <br/>
                ルーチンもてあまし <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Hey tsumiagete wa kuzusarechau <br/>
                Rifujin nano hibi mainichi <br/>
                Yeah, asa to yoru to kurikaeshite <br/>
                RUUCHIN mo teamashi <br/>
            </Grid>

            <Grid item className="englishText">
                Hey, what stacks up will come down <br/>
                It’s absurd, day after day, everyday <br/>
                Yeah, Repeating over again day and night <br/>
                The Routine is too much for me <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                どうせ同じだったら <br/>
                楽しくしちゃいたいよ <br/>
                ねえ、どうせ続くのなら <br/>
                次はもっと上手く積んじゃおう！ <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Douse onaji dattara <br/>
                Tanoshiku shinaitai yo <br/>
                Nee, douse tsuzuku no nara <br/>
                Tsugi wa motto umaku tsumanjaou <br/>
            </Grid>

            <Grid item className="englishText">
                Well, if it’s all the same, <br/>
                I want to have fun with it! <br/>
                Hey, if it’s going to continue like this anyways <br/>
                On the next one let’s stack them well! <br/>
            </Grid> 

        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                楽しんじゃおうよ　Every day日々是好日 <br/>
                楽しんだ人の勝ち　この指とまれHappy <br/>
                楽しんじゃおうよ　Every day日々是好日 <br/>
                楽しめばイイキモチ <br/>
                全力You Only Live Once <br/>
            </JapaneseCharacterGrid> 

            <Grid item className="japaneseRomanizedText">
                Tanoshinjaou yo Every day nichi nichi kore kou nichi <br/>
                Tanoshinda hito no kachi kono yubitomare Happy <br/>
                Tanoshinjaou yo Every day nichi nichi kore kou nichi <br/>
                Tanoshimeba ii kimochi <br/>
                Zenryoku You Only Live Once <br/>
            </Grid>

            <Grid item className="englishText">
                Let’s have fun! Every day “Every day is a good day” <br/>
                It’s the victory of people who had fun,  *lets meet up here, guys!* Happy! <br/>
                Lets have fun together, Every day “Every day is a good day” <br/>
                With all we can, You only live once! <br/>
            </Grid> 
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                まあどの道このサイクルから <br/>
                抜けることは出来ないしさ <br/>
                じゃあ歯車として廻るうちも、 <br/>
                めいっぱい笑いたいな <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Maa dono michi kono SAIKURU kara <br/>
                Nukeru koto wa dekinai shi sa <br/>
                Jaa haguruma toshite mawaru uchi mo, <br/>
                Meippai waraitai na <br/>
            </Grid>
            
            <Grid item className="englishText">
                Well, since every ‘path’ is this cycle <br/>
                And there’s no way out <br/>
                Then, everyone who serves as a cog in the machine <br/>
                wants to laugh as much as they can, right? <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                どうせ同じだったら <br/>
                楽しくしちゃいたいよ <br/>
                ねえ、どうせ続くんだし <br/>
                少しずつ前に進もうよ！ <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Douse oniji dattara <br/>
                Tanoshiku shichaitai yo <br/>
                Nee, douse tsuzukunda shi <br/>
                Sukushizutsu mae ni susumou yo! <br/>
            </Grid>
            
            <Grid item className="englishText"> 
                Well, if it’s all the same, <br/>
                I want to have fun with it! <br/>
                Hey, if it’s going to continue like this anyways <br/>
                Lets move forward one step at a time! <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                楽しんじゃおうよ　Every day日々是好日 <br/>
                楽しんだ人の勝ち　この指とまれHappy <br/>
                楽しんじゃおうよ　Every day日々是好日 <br/>
                楽しめばイイキモチ <br/>
                全力You Only Live Once <br/>

            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Tanoshinjaou yo Every day nichi nichi kore kou nichi <br/>
                Tanoshinda hito no kachi kono yubitomare Happy <br/>
                Tanoshinjaou yo Every day nichi nichi kore kou nichi <br/>
                Tanoshimeba ii kimochi <br/>
                Zenryoku You Only Live Once <br/>

            </Grid>

            <Grid item className="englishText">
                Let’s have fun! Every day “Every day is a good day” <br/>
                It’s the victory of people who had fun,  *lets meet up here, guys!* Happy! <br/>
                Lets have fun together, Every day “Every day is a good day” <br/>
                With all we can, You only live once! <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="englishText">
                You Only Live Once... <br/>
            </Grid>
        </Grid>
      </Grid>
      <Grid container item direction="column" className="textContainer">          
        Song Analysis:
            <Grid item className="japaneseRomanizedText">
                Every Day is a Good Day:
                    "Every Day is a Good Day" is the translation of the Buddhist expression <br/>
                    "日々是好日", literally "Day day here good day". <br/>

                    I think it's best to leave it to an actual Zen Buddhist to answer this. <br/>

                <Grid container justifyContent="center">
                    <Grid item xs={12}>
                        <LiteYouTubeEmbed 
                            id="BXKnMl-6Rc0"  
                            title="Toge"
                            wrapperClass="yt-lite"
                        />
                    </Grid>
                </Grid>

                <Grid sx={{fontSize: 10}}>
                <br/> (00:10 - 00:25) <br/>
                There is an expression [Every day is a good day*] <br/>     
                It’s also said a few different ways in Japanese. <br/> <br/>

                (00:25 - 00:40) <br/>
                The idea that, in every day in our everyday lives, we try to make our lives better. <br/>
                we are able to capture “the reality that we are alive in this moment” <br/> <br/>

                (00:42 - 01:05) <br/>
                No matter what we do, we all have the way of capturing the world as <br/>
                “today more than yesterday, Now more than before”; <br/>
                The present moment, today, and the past, we’re always comparing them. <br/>
                But a “good day” [好日] isn’t just calling a day “better than the others.” <br/> <br/>

                (01:05 - 01:12) <br/> 
                For example, even if today becomes worse than yesterday, or even <br/>
                If the current situation is worse than before… that it’s (still) “a good day.” <br/> <br/>

                (01:12 - 01:25)  <br/>
                I think that it is very important/precious to recognize <br/>
                that “the moment we call now”, and “the reality we call now” <br/>
                as “a good moment”. <br/> <br/>

                (01:25 -  01:40) <br/>
                To say that you are, at this present moment, “living life to the fullest.” <br/>
                And the act of conducting yourself so you can say you’re living life to <br/>
                The fullest is what makes the future and makes tomorrow. <br/> <br/>

                (01:40 - 01:50) <br/>
                Just like that, living life endeavoring for this is what  <br/>
                I feel the word [Every day is a good day] is expressing.<br/> <br/>

                (01:50 - end) <br/>
                In the morning, we wake up;  <br/>
                at night, once more, we go to sleep. <br/> <br/>

                It is for this very reason, you know? <br/>
                It is because we have this time here… <br/> <br/>

                that I believe we could say “Today is a good day”, can’t we? <br/>
                </Grid>
                <Grid sx={{fontSize: 10}}>
                <br/> <br/>
                The song is sung from Eika's perspective -- this is a philosophy she bases her life around. <br/>
                She is happy. When the MC destroys the stone stacks, she is upset, of course, <br/>
                but she gets right back to stacking stones the moment the MC leaves. <br/>
                It's what makes her happy, it's what her friends want to do. <br/>
                She's stuck stacking stones no matter what happens, so... <br/>
                Why not have fun with it? <br/> <br/>
                </Grid>

                <img style={{width: '200px', height: '200px'}} src={Sisiphus} />

            </Grid>    
      </Grid>  
    </Grid>
  );
}
