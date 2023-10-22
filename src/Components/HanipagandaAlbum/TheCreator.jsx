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
            title="TheCreator"
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
            <Grid item className="japaneseRomanizedText">
                Do-La, Idola　You are The Creator <br/>
                Do-La, Idola　IdoLatrize world <br/>
                Do-La, Idola　I'm The Imaginator <br/>
                Do-La, Idola　IdoRatrize world <br/>
            </Grid>
          </Grid>

      <Grid container item direction="column">
        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                こんな地獄めいた見世物小屋 <br/>
                これがマシなんだったら <br/>
                どんな祈りだったら <br/>
                届くって言うのIDOLA <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                konna jigoku mei ta misemono koya <br/>
                kore ga mashi na n dattara <br/>
                donna inori dattara <br/>
                todoku tte iu no IDOLA <br/>
            </Grid>

            <Grid item className="englishText">
                If such a hell like freak show <br/>
                As this is the best that’s offered, <br/>
                What kind of wish could I say to reach you, IDOLA? <br/> 
            </Grid>
        </Grid>
      </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
          <JapaneseCharacterGrid item className="japaneseCharacterText">
            ほらね、今日も今日とて <br/>
            強者が弱肉強食説いている <br/>
            孤独弱さ貧しさ <br/>
            何もかも「お前のせい」だって <br/>
          </JapaneseCharacterGrid>

          <Grid item className="japaneseRomanizedText">
            hora ne, kyou mo kyou to te <br/>
            kyouwaso ga jakunikukyoushoku toite iru <br/>
            kodoku yowasa mazushisa <br/>
            nanimokamo "omae no sei" datte <br/>
          </Grid>

        <Grid item className="englishText">
            You know, it’s the same, day in, day out <br/>
            The strong preach of the law of the jungle – <br/>
            they say that loneliness, weakness, poverty, <br/>
            anything and everything is “your own fault.” <br/>
        </Grid>
      </Grid>

      <Grid container item direction="column">
        <Grid container item justifyContent="space-around" alignItems="center">
          <Grid item className="englishText">
            Imagination is The Creator of all things <br/>
            I'm The Creator of the idolatrize world <br/>
            IDOLA-DEA, Listen to my prayers <br/>
            IDOLA-DEA, Listen to my sorrow <br/>
          </Grid>
        </Grid>
      </Grid>
        
          <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                創造せよ、命よ！<br/>
                大地より産まれ祈り歌うアダムの子よ <br/>
                私を呼び創った それは想いの力 <br/>
                人に与えられし イドラ・デウス <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                souzou seyo, inochi yo! <br/>
                daichi yori umare inori utau adamu no ko yo <br/>
                watashi o yobi tsukutta sore wa omoi no chikara <br/>
                hito ni ataerareshi idora deusu <br/>
            </Grid>

            <Grid item className="englishText">
            Go forth and create [imagine], children of  <br/>
            Adam born from the earth who sing prayers! <br/>
            You have called me to being, that is,  <br/>
            the power of imagination/thought – <br/>
            I grant onto humanity the Idola Deus! <br/>
          </Grid>
        </Grid>
        <Grid container item direction="column">
          <Grid container item justifyContent="space-around" alignItems="center">

          <Grid item className="englishText">
            Do-La, Idola You are The Creator <br/>
            Do-La, Idola IdoLatrize world <br/>
            Do-La, Idola I'm The Imaginator <br/>
            Do-La, Idola IdoRatrize world <br/>
          </Grid>
        </Grid>

          <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                機械仕掛けのエデン <br/>
                土より出で土に還るはMeth <br/>
                妄想それは創造 <br/>
                誰にも奪えないEmeth <br/>
            </JapaneseCharacterGrid>

                <Grid item className="japaneseRomanizedText">
                    kikai shikake no eden <br/>
                    tsuchi yori ide tsuchi ni kaeru wa Meth <br/>
                    mousou sore wa souzou <br/>
                    dare ni mo ubaenai Emeth <br/>
                </Grid>

                <Grid item className="englishText">
                  This mechanical eden <br/>
                  What we call “Meth” (death) is  <br/>
                  “from the earth we come, to the earth we return” <br/>
                  Delusions? That is Imagination, <br/>
                  A “Emeth” (truth) that no one can take from you. <br/>
                </Grid>
          </Grid>

          <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                ごらん、今日も今日とて <br/>
                強者が弱肉強食説いている <br/>
                生まれつきの鋭い爪で <br/>
                「手を差し伸べてあげる」って <br/>
            </JapaneseCharacterGrid>

            <Grid item className="romanizedText">
                goran, kyou mo kyou to te <br/> 
                kyouwaso ga jakunikukyoushoku toite iru <br/>
                umaretsuki no surudoi tsume de <br/>
                "te o sashinobete ageru" tte <br/>
            </Grid>

            <Grid item className="englishText">
              Take a look, it’s the same as always <br/>
              The powerful who preach of the law of the jungle <br/>
              Those who were born with sharp claws,  <br/>
              saying “I’ll give you a hand” <br/>
            </Grid>
          </Grid>

        <Grid container item direction="column">
        <Grid item className="englishText">
            Imagination is The Creator of all things <br/>
            I'm The Creator of the idolatrize world <br/>
            IDOLA-DEA,　Listen to my prayers <br/>
            IDOLA-DEA,　I created you! <br/> 
          </Grid>
        </Grid>
        
        <Grid container item direction="column">
          <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                創造せよ、命よ！ <br/>
                大地より産まれ祈り歌うアダマの子よ <br/>
                私を呼び創った　それは想いの力 <br/>
                人に与えられし　イドラ・デウス <br/>
            </JapaneseCharacterGrid>

            <Grid item className="romanizedText">
                souzou seyo, inochi yo! <br/>
                daichi yori umare inori utau adama no ko yo <br/>
                watashi o yobi tsukutta sore wa omoi no chikara <br/>
                hito ni ataerareshi idora deusu <br/>
            </Grid>

            <Grid item className="englishText">
            Go forth and create [imagine], children of <br/>
            Adam born from the earth who sing prayers! <br/>
            You have called me to being, that is,  <br/>
            the power of imagination/thought – <br/>
            I grant onto humanity the Idola Deus! <br/>
          </Grid>
        </Grid>
        
        <Grid item className="englishText"> 
            Imagination is The Creator of all things <br/>
            I'm The Creator of the idolatrize world <br/>
            IDOLA-DEA,　Listen to my prayers <br/>
            IDOLA-DEA,　I created you! <br/>
          </Grid>
          <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                創造せよ、未来を！ <br/>
                大地より産まれ天を仰ぐアダマの子よ <br/>
                声は届き、成された　造り出す者の化身 <br/>
                現実を変える力　イドラ・デウス <br/>
            </JapaneseCharacterGrid>

            <Grid item className="romanizedText">
                souzou seyo, mirai wo! <br/>
                daichi yori umare ten wo aogu adama no ko yo <br/>
                koe wa todoki, nasareta tsukuridasu mono no keshin <br/>
                ima o kaeru chikara idora deusu <br/>
            </Grid>

            <Grid item className="englishText">
              Go forth and create [imagine] the future, children of Adam, <br/> 
              born of the earth who look to the heavens! <br/>
              I have heard your voice and granted your wish; <br/>
              as the incarnation of one who creates – <br/>
              I grant the power to change  <br/>
              reality (now) – Idola Deus! <br/>
            </Grid>
          </Grid>

          <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                人だけに許され与えられし力 <br/>
                神よりの贈り物は <br/>
                想い描き、生み出し、 <br/>
                形成すイマジネイション <br/>
                それが教いの光となろうー。 <br/>
            </JapaneseCharacterGrid>

            <Grid item className="romanizedText">
              hito dake ni yurusare ataerareshi chikara <br/>
              kami yori no okurimono wa <br/>
              omoi kaki, umidashi, <br/>
              katachi nasu imajineishon <br/>
              sore ga kyou i no hikari to narou. <br/>
            </Grid>

            <Grid item className="romanizedText">
              This power, permitted and given only to humanity, <br/>
              a gift only the gods can grant – To imagine,  <br/>
              to create, to give form, Imagination – <br/>
              Let that become your guiding light. <br/>
            </Grid>
          </Grid>

          <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item  className="japaneseCharacterText">
              創造せよ、未来を！ <br/>
              大地より産まれ天を仰ぐアダマの子よ <br/>
              声は届き、成された　造り出す者の化身 <br/>
              現実を変える力　イドラ・デウス <br/>
            </JapaneseCharacterGrid>

            <Grid item className="romanizedText">
              souzou seyo, mirai wo! <br/>
              daichi yori umare ten wo aogu adama no ko yo <br/>
              koe wa todoki, nasareta tsukuridasu mono no keshin <br/>
              ima o kaeru chikara idora deusu <br/>
            </Grid>

            <Grid item className="romanizedText">
              Go forth and create [imagine], children of Adam,  <br/>
              born of the earth who look to the heavens! <br/>
              I have heard your voice and granted your wish; <br/>
              as the incarnation of one who creates –  <br/>
              I grant the power to change reality (now) <br/>
              – Idola Deus <br/>
            </Grid>
          </Grid>

        <Grid container item direction="column">
            <Grid item className="englishText">
                Do-La, Idola　You are The Creator <br/>
                Do-La, Idola　IdoLatrize world <br/>
                Do-La, Idola　I'm The Imaginator <br/>
                Do-La, Idola　IdoRatrize world <br/>
            </Grid>
        </Grid>
    </Grid>
    </Grid>
    </Grid>
    </Grid>
  );
}
