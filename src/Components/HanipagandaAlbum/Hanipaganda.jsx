import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import "../../App.css";
import CheckboxButtons from '../Common/CheckboxButtons';

export default function Hanipaganda() {
  const [isVideoOpen, setIsVideoOpen] = React.useState(true);
  const [isJapaneseCharactersVisible, setIsJapaneseCharactersVisible] = React.useState(false);

  const JapaneseCharacterGrid = styled(Grid)({
    display: isJapaneseCharactersVisible ? "block" : "none"
  });

  //TODO: selectively render the text depending on user settings, add a button for each type
  //TODO: Figure out why the overlay is so damn big on the youtube player...

  //TODO The romaji of these lyrics (orig. from a chinese site) are....full of typos. Fix it later...
  return (
    <Grid container direction="column">
      {isVideoOpen &&
        <Grid item className="ytVideoContainer">
          <LiteYouTubeEmbed 
            id="r3j1IhPRFs0"  
            title="Hanipaganda"
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
                ハニワーッ進め！GO！（いちにい、いちにい…）ハニワーッ歌え！（ウオー！）<br />
                ハッハ　ハニハニ　ハニワ！ハニワ！　ハッハ　ハニハニ　ハニヤス！ハニヤサー！ <br />
                ハッハ　ハニハニ　ハニワ！ハニワ！　ハッハ　ハニハニ　ハニヤス！ハニヤス！ <br />
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                haniwaa susume! GO! (ichi nii, ichi nii...) haniwa utae! (woo!) <br />
                HA-HA　HANIHANI　HANIWA! HANIWA!　HA-HA　HANIHANI　HANIYASU!　HANIYASA-! <br />
                HA-HA　HANIHANI　HANIWA! HANIWA!　HA-HA　HANIHANI　HANIYASU!　HANIYASU! <br />
            </Grid>

            <Grid item className="englishText">
                Haniwa - Forward! GO! (1,2 , 1,2) Haniwa, shout out! (Woo !) <br />
                HA-HA　HANIHANI　HANIWA! HANIWA!　HA-HA　HANIHANI　HANIYASU!　HANIYASA-! <br />
                HA-HA　HANIHANI　HANIWA! HANIWA!　HA-HA　HANIHANI　HANIYASU!　HANIYASU! <br />
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                お待ちかねの千軍万馬　危険思想ハニパガンダ <br />
                時は来たり叫べLouder　ドキドキ土器救いの時 <br /> 
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                omachi ka ne no sengunbanba kigen shisou hanipaganda <br />
                toki wa kitari sakebe Louder dokidoki doki sukui no toki <br />
            </Grid>

            <Grid item className="englishText">
                The long waited veterans of a thousand battles <br />
                A dangerous ideology – Hanipaganda  <br />
                The time has come, shout Louder  <br />
                Heart pumping earthenware <br />
                The time for salvation has come! <br />
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
            セラミクスで千軍万馬　素焼き思想ハニパガンダ <br />
            望み望め弱きHuman　ドキドキ土器救いの時 <br />
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                seramikusu de sengunbanba suyaki shisou hanipaganda <br />
                nozomi nozome yowaki Human dokidoki sukui no toki <br />
            </Grid>

            <Grid item className="englishText">
                Veterans of a thousand battles in Ceramic <br />
                Unpolished thoughts, Hanipaganda <br />
                Wish for your desires, weak human <br />
                Heart pumping earthenware <br />
                The time for salvation has come! <br />
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
            ハニパガンダ　ガンダ　ハッハッハ　ハニハニデ　ハニパニ <br />
            ベンガランダ　ダッダッダ　ワレワレハ　ハニワナノダ！ <br />
            ハニパガンダ　ハッハッハ　ハニハニデ　ハニパニ <br />
            ベンガランダ　ダッダッダ　ハニヤスヤ　ハニヤサー！ <br />
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                HANIPAGANDA　GANDA　HA-HA-HA　HANIHANIDE　HANIPANI <br />
                bengaranda da-da-da wareware wa haniwa na no da! <br />
                HANIPAGANDA　HA-HA-HA　HANIHANIDE　HANIPANI <br />
                BENGARANDA　DA-DA-DA　HANIYASUYA　HANIYASA！ <br />
            </Grid>

            <Grid item className="englishText">
                HANIPAGANDA　GANDA　HA-HA-HA　HANIHANIDE　HANIPANI <br />
                bengaranda da-da-da We are the Haniwa! <br />
                HANIPAGANDA　HA-HA-HA　HANIHANIDE　HANIPANI <br />
                BENGARANDA　DA-DA-DA　HANIYASUYA　HANIYASA！ <br />
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
            木っ端微塵上等、杖刀人兵長　無尽蔵　有象偶像 <br />
            カラのウツワはアイドルにヨシ！具合がイイのだ。 <br />
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                koppamijin joutou, joutounin heichou mujinzou uzou guzou <br />
                kara no utsuwa wa aidoru ni yoshi! guai ga iinoda. <br />
            </Grid>

            <Grid item className="englishText">
                The superiors – smashed to smithereens <br />
                One who wields a wooden sword, a leading commander <br />
                An inexhaustible supply <br />
                of Idols with defined form <br />

                It is good for an empty vessel to become an idol! <br />
                It’s a good way to be. <br />
            </Grid> 
        </Grid>
        
        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
            ハニパガンダ　ガンダ　ハッハッハ　ハニハニデ　ハニパニ <br />
            ベンガランダ　ダッダッダ　ワレワレハ　ハニワナノダ！ <br />
            ハニパガンダ　ハッハッハ　ハニハニデ　ハニパニ <br />
            ベンガランダ　ダッダッダ　ハニヤスヤ　ハニヤサー！<br />
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                HANIPAGANDA　GANDA　HA-HA-HA　HANIHANIDE　HANIPANI <br />
                bengaranda da-da-da wareware wa haniwa na no da! <br />
                HANIPAGANDA　HA-HA-HA　HANIHANIDE　HANIPANI <br />
                BENGARANDA　DA-DA-DA　HANIYASUYA　HANIYASA！
            </Grid>

            <Grid item className="englishText">
                HANIPAGANDA　GANDA　HA-HA-HA　HANIHANIDE　HANIPANI <br />
                bengaranda da-da-da We are the Haniwa! <br />
                HANIPAGANDA　HA-HA-HA　HANIHANIDE　HANIPANI <br />
                BENGARANDA　DA-DA-DA　HANIYASUYA　HANIYASA！ <br />
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
            ハニパガンダ　ガンダ　ハッハッハ　ハニハニデ　ハニパニ <br />
            ベンガランダ　ダッダッダ　ワレワレハ　ムテキナノダ！ <br />
            ハニパガンダ　ハッハッハ　ハニハニデ　ハニパニ <br />
            ベンガランダ　ダッダッダ　ハニヤスヤ　ハニヤサー！<br />

            右向けーっ右！（はっにー　はっにー）　 <br />
            左向けーっ左！（はっにー　はっにー） <br />
            声をあげろー！（ハニヤス！ハニヤス！ハニヤス！ハニヤス！） <br />
            ハニワーッとつげきー！（ワーッ！） <br />
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                HANIPAGANDA　GANDA　HA-HA-HA　HANIHANIDE　HANIPANI <br />
                bengaranda da-da-da wareware wa muteki na no da! <br />
                HANIPAGANDA　HA-HA-HA　HANIHANIDE　HANIPANI<br /> 
                BENGARANDA　DA-DA-DA　HANIYASUYA　HANIYASA！　<br /> 

                migi muke- migi! (ha-ni- ha-ni-) hidari muke- hutari! (ha-ni- ha-ni-) <br />
                koe o agerou-! (haniyasu! haniyasu! haniyasu! haniyasu!) haniwa- totsugeki-! (wa-!) <br />
            </Grid>

            <Grid item className="englishText">
                HANIPAGANDA　GANDA　HA-HA-HA　HANIHANIDE　HANIPANI <br />
                bengaranda da-da-da We are invincible! <br />
                HANIPAGANDA　HA-HA-HA　HANIHANIDE　HANIPANI <br />
                BENGARANDA　DA-DA-DA　HANIYASUYA　HANIYASA！ <br />

                Face right! (Ha-ni ha-ni)  <br />
                Face left! (ha-ni ha-ni) <br />
                Shout out! (haniyasu! haniyasu! haniyasu! haniyasu!) haniwa- attack! (wa-!) <br />
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                我々は器、魂の憑代　土より出でて大地へと還す体 <br />
                何度も壊せ　粉々にするがいい　形を奪うだけならば滅ぼせぬ <br />
                人の祈りは希望を顕現し　愛するものではなく、愛を望んだから <br />
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                wareware wa utsuwa, tamashii no yorishiro  <br />
                tsuchi yori de dete daichi e to kaesu karada <br />
                nandomo kowase konagona ni suru ga ii katachi o ubau dakenaraba horobosenu <br />
                hito no inori wa kibou o kengenshi aisuru mono dewa naku, ai o nozonda kara <br />
            </Grid>

            <Grid item className="englishText">
                We are containers, vessels that hold divine spirits <br />
                Bodies that come from the earth that we will return to <br />
                Destroy us or break us to pieces as much as you like <br />
                If we only lose our form we will not be destroyed <br />

                People's prayers are the <br />
                manifestation of their hopes <br />
                Because it's not the things that they love <br />
                but love itself they search for <br />

                **repeat chorus <br />
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
