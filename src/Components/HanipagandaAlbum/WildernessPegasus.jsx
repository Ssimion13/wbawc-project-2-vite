import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import "../../App.css";
import CheckboxButtons from '../Common/CheckboxButtons';

export default function WildernessPegasus() {
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
            id="lNedVSJJ1Po"  
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
                フッ…坊や…やめておきな。 <br/>
                とてもじゃないがお前に私はやれないぜ…。 <br/>
                私の名？私は勁牙組組長、驪駒。 <br/> 
                人呼んで「漆黒のペガサス」さ…。<br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Fuu.. Bouya…. Yamete oki na. <br/>
                Totemo janai ga, omae ni watashi wa yarenai ze… <br/>
                Watashi no na? Watashi wa keigagumi kumichou, Kurokuma. <br/>
                Hito yonde [shikkoku no Pegasus] sa…. <br/>
            </Grid>

            <Grid item className="englishText">
                Hmph...stop it boy, would ya? <br/>
                There’s no way you could “do*” me… <br/>
                My name? I am Keiga clan boss, Kurokoma. <br/>
                They call me "The Jet Black Pegasus", you know... <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                黒き翼、照りつける太陽　地獄の荒野 <br/>
                「灼熱地獄、熱いよ凄く」 <br/>
                死に場所なら私が決めてやるここが墓陽だ…。 <br/>
                「裁きはスルー、地獄直送」 <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Kuroki tsubasa, teritsukeru taiyou jikoku no kouya <br/>
                [shakunetsu jigoku, atsui yo sugoku] <br/>
                Shi ni basho nara watashi ga kimete yaru koko ga hakoba(?) da…. <br/>
                [sabaki wa through, jigoku chokusou] <br/>
            </Grid>
            <Grid item className="englishText">    
                Black wings, the shining sun beating down, a hellish wasteland. <br/>
                Burning hell, it's hot, very hot <br/>
                If it's a place to die, I'll decide it myself... this is the Grave Sun... <br/>
                "Judgement is through, sent straight to hell." <br/>
            </Grid> 
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                今こそ力示せ　思惑謀略は要らない <br/>
                火力を私に示せ　喰う側になるのか？ <br/>
                それとも―。 <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Ima koso chikara shimese omowaku wa iranai <br/>
                Karyoku wo watashi ni shimese kuugawa ni naru no ka? <br/>
                Soretomo – .. <br/>
            </Grid>

            <Grid item className="englishText">
                Now is the time to show your power, 
                no need for scheming or speculation,  <br/>
                Show me your firepower. Will you be one who eats? <br/>
                Or…? <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                嵐、風荒ぶ黒きペガサス <br/>
                挫きねじ伏せる黒きペガサス <br/>
                荒野を走り抜けろ黒きペガサス <br/>
                力こそパワー黒きペガサス <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Arashi kaze susabu kuroki Pegasus <br/>
                Kujiki nejifuseru kuroki Pegasus <br/>
                Kouya wo hashiri nukeru kuroki Pegasus <br/>
                Chikara koso Power koroki Pegasus <br/>
            </Grid>
            
            <Grid item className="englishText">
                A storm running wild in the wind, the Black Pegasus <br/>
                The black Pegasus that crushes and twists <br/>
                Running through the wastes, the Black Pegasus <br/>
                Strength is power, the Black Pegasus <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                三つ数えよう…命乞いならば今しておけ <br/>
                「誰も聞かない無論慈悲はない」 <br/>
                弱い奴らに生きる道はない…さようならだ <br/>
                「情け無用の畜生道だ」 <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Mitsu kazoeyou…. Inochigoi naraba ima shite oke <br/>
                [daremo kikanai muron jihi wa nai] <br/>
                Yowai yatsura ni ikiru michi wa nai…. Sayonara da <br/>
                [nasake muyou no chikushoudou da] <br/>
            </Grid>
            
            <Grid item className="englishText"> 
                Lets count to three… <br/>
                if you’re gonna beg for your life, do it now <br/>
                [Not that anyone would listen,  <br/>
                obviously there will be no mercy] <br/>
                The weak have no path for them, it’s farewell <br/>
                [The pathetic and useless of the Animal Realm] <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                いくぞ最後のフロンティア <br/>
                強いものが強い、それが法（ロウ） <br/>
                お前はどちらに従う？喰う側になるのか？ <br/>
                それとも―。 <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Ikuzo saigo no Frontier <br/>
                Tsuyoi mono ga tsuyoi, sore ga [rou] <br/>
                Omae wa dochira ni shitagau? Kuugawa ni naru no ka? <br/>
                Soretomo –.... <br/>
            </Grid>

            <Grid item className="englishText">
                Here we go to the final frontier. <br/>
                Those that are strong are strong. <br/>
                That's the way of the world. <br/>
                Which side will you obey?  <br/>
                The side that eats? <br/>
                Or... <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                嵐、風荒ぶ黒きペガサス <br/>
                挫きねじ伏せる黒きペガサス <br/>
                荒野を走り抜けろ黒きペガサス <br/>
                力こそパワー黒きペガサス <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Arashi kaze susabu kuroki Pegasus <br/>
                Kujiki nejifuseru kuroki Pegasus <br/>
                Kouya wo hashiri nukeru kuroki Pegasus<br/>
                Chikara koso Power koroki Pegasus <br/>

            </Grid>
            
            <Grid item className="englishText">
                A storm running wild in the wind, the black Pegasus <br/>
                The black Pegasus that crushes and twists <br/>
                Running through the wastes, the Black Pegasus <br/>
                Strength is power, the Black Pegasus <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                天を翔けて　そんな頃もあった <br/>
                遠い昔に.... もう過去の事さ <br/>
                いつかきっと　あのお方が来る <br/>
                その日の為に.... <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Ten wo kakete sonna koro mo atta <br/>
                Tooi mukashi ni… mou kako no koto sa <br/>
                Itsuka kitto ano okata ga kuru <br/>
                Sono hi no tame ni… <br/>
            </Grid>
            
            <Grid item className="englishText">
                There was a time when we flew through the sky... a long time ago. <br/>
                That’s all a thing of the past now. <br/>
                Someday, I'm sure that noble one <br/> 
                will come... and for the sake of that day.. <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                地獄に嘶くダークホース <br/> 
                「和を以て貴しとなす」<br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Jigoku ni inanaku Dark Horse <br/>
                [Wa wo motte toutoshi to nasu] <br/>
            </Grid>
            
            <Grid item className="englishText">
                The dark horse that neighs in hell <br/>
                "Hold Harmony Sacred"** <br/>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
