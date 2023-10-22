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
            id="ddZtHNodAsM"  
            title="LikeAnAnimal"
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
            <Grid item className="englishText">
              Eat, Eat, Eat or Be Eaten <br/>
              Like an, Like an, Like an animal<br/>
              Eat, Eat, Eat or Be Eaten <br/>
              Like an, Like an animal <br/>

            </Grid>        
          <Grid container item justifyContent="space-around" alignItems="center">
              <JapaneseCharacterGrid item className="japaneseCharacterText">
                捕食者が今も闇から狙ってる <br/>
                震えて見渡したってもう手遅れ手遅れ手遅れ <br/>
                The end of the game <br/>
                ケダモノだものエモノだもの <br/>
              </JapaneseCharacterGrid>

              <Grid item className="japaneseRomanizedText">
                Hoshokusha ga ima mo yami kara neratteru <br/>
                Yurete minagashitatte mou teokure teokure teokure <br/>
                The end of the game <br/>
                Kedamono da mono emono da mono <br/>
              </Grid>

              <Grid item className="englishText">
                Even now the predators aim for you from the shadows <br/>
                If you tremble or overlook them then <br/>
                it’s already over, it’s too late <br/>
                The end of the game <br/>
                You’re an animal, an animal that’s the prey <br/>
              </Grid>
          </Grid>

          <Grid container item justifyContent="space-around" alignItems="center">
              <JapaneseCharacterGrid item className="japaneseCharacterText">
                牙を剥き出して爪で掻きまわせ <br/>
                眼ギラつかせなんて無力な猿ども！ <br/>
              </JapaneseCharacterGrid>

              <Grid item className="japaneseRomanizedText">
                Kiba wo mukidashite tsume de kakimawase <br/>
                gan(?) kiratsukase nante muryoku na saru domo! <br/>
              </Grid>

              <Grid item className="englishText">
                Bear your fangs and tear them apart with your claws, <br/>
                These powerless monkeys with glazed over eyes! <br/>
              </Grid>
          </Grid>

          <Grid container item justifyContent="space-around" alignItems="center">
              <JapaneseCharacterGrid item className="japaneseCharacterText">
                獣だものCrawling like an animal <br/>
                謀りあう地獄のサバイバルゲーム <br/>
                生き残れ強さだけがリアリティ <br/>
                弱・肉・強・食 Like an Animal <br/>
              </JapaneseCharacterGrid>

              <Grid item className="japaneseRomanizedText">
                Kedamono da mono Crawling like an animal <br/>
                hakari au jigoku no Survival Game <br/>
                Ikinokore tsuyosa dake ga reality <br/>
                Jaku niku kyou shoku Like an animal <br/>
              </Grid>

              <Grid item className="englishText">
                  A thing that’s an beast, Crawling like an animal <br/>
                  Everyone, scheming in this Survival Game of hell <br/>
                  The reality that only the strong remain <br/>
                  The law of the fittest, Like an Animal <br/>
              </Grid>
          </Grid>

          <Grid container item justifyContent="space-around" alignItems="center">
              <JapaneseCharacterGrid item className="japaneseCharacterText">
                言葉や祈りは力で捻伏せて <br/>
                「誰かのために」なんて、 <br/>
                一人じゃ鶏じゃどうしようもない <br/>
                ケダモノだものエモノだもの <br/>
              </JapaneseCharacterGrid>

              <Grid item className="japaneseRomanizedText">
                  Kotoba ya inori wa chikara de nejifusete <br/>
                  [dareka no tame ni] nante <br/>
                  Hitori ja tori ja dou shiyou mo nai <br/>
                  Kedamono da mono no emono da mono <br/>
              </Grid>

              <Grid item className="englishText">
                  Forcing words and prayers through force, <br/>
                  Something like “For someone else’s sake”,  <br/>
                  There’s no saving lonely white meat like you. <br/>
                  An animal, an animal that’s the prey <br/>
              </Grid>
          </Grid>

          <Grid container item justifyContent="space-around" alignItems="center">
              <JapaneseCharacterGrid item className="japaneseCharacterText">
                牙を剥き出して爪で掻きまわせ <br/>
                眼ギラつかせ利他は利用、利己的に <br/>
              </JapaneseCharacterGrid>

              <Grid item className="japaneseRomanizedText"> 
                Kiba wo mukidashite tsume de kakimawase <br/>
                gan(?) kiratsukase rita wa riyou, rikoteki ni <br/>
              </Grid>

              <Grid item className="englishText">
                Bear your fangs and tear them apart with your claws, <br/>
                Their eyes glazed over, their altruism exploited, selfishly <br/>
              </Grid>
          </Grid>

          <Grid container item justifyContent="space-around" alignItems="center">
              <JapaneseCharacterGrid item className="japaneseCharacterText">
                獣だものCrawling like an animal <br/>
                謀りあう地獄のサバイバルゲーム <br/>
                生き残れ強さだけがリアリティ <br/>
                弱・肉・強・食Like an Animal <br/> 
              </JapaneseCharacterGrid>

              <Grid item className="japaneseRomanizedText">
                Kedamono da mono Crawling like an animal <br/> 
                Hakari au au jigoku no Survival Game <br/> 
                Ikinokore tsuyosa dake ga reality <br/> 
                Jaku niku kyou shoku Like an animal <br/>
              </Grid>

              <Grid item className="englishText">
                A thing that’s an beast, Crawling like an animal <br/>
                Everyone scheming in this Survival Game of hell <br/>
                The reality that only the strong remain <br/>
                The law of the fittest, Like an Animal <br/>
              </Grid>
          </Grid>

          <Grid container item justifyContent="space-around" alignItems="center">
              <JapaneseCharacterGrid item className="japaneseCharacterText">
                所詮、この世は弱肉強食 <br/>
                ようこそ地獄のサバイバルゲーム <br/>
                強いか、速いか、狡賢いか、 <br/>
                どれでもないなら餌になれ！ <br/>
              </JapaneseCharacterGrid>

              <Grid item className="japaneseRomanizedText">
                Shosen, kono yo wa jakunikukyoushoku <br/>
                Youkoso jigoku no Survival Game <br/>
                Tsuyoi ka, hayai ka, zurugashikoi ka, <br/>
                Doredemo nai nara esa ni nare! <br/>
              </Grid>

              <Grid item className="englishText">
                In the end, this world is the survival of the fittest <br/>
                Welcome, to this Survival Game of hell<br/> 
                The strong, the fast, or the devious – <br/> 
                If you’re none of those, become the prey! <br/>
              </Grid>
          </Grid>

          <Grid container item justifyContent="space-around" alignItems="center">
              <JapaneseCharacterGrid item className="japaneseCharacterText">
                地を這え獣、夢中でCrawling like an animal <br/>
                謀りあう地獄のサバイバルゲーム <br/> 
                生き残れ強さこそが真実 <br/>
                弱・肉・強・食Like an Animal <br/>
              </JapaneseCharacterGrid>

              <Grid item className="japaneseRomanizedText">
                  Chi wo hae kedamono, muchuu de Crawling like an animal <br/> 
                  Habakari au jigoku no Survival Game <br/>
                  Ikinokore tsuyosa koso ga genjitsu <br/>
                  Jaku niku kyou shoku Like an animal <br/>
              </Grid>

              <Grid item className="englishText">
                    A thing that’s an beast, Crawling like an animal <br/>
                    Everyone, scheming in this Survival Game of hell <br/>
                    The reality that only the strong remain <br/>
                    The law of the fittest, Like an Animal <br/>
              </Grid>
          </Grid>
      </Grid>
    </Grid>
  );
}
