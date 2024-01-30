import styled from "styled-components";

export default function Home() {

    return (
        <StyledDiv>
            <h2>Herzlich willkommen in meiner privaten Hausbibliothek!</h2>
            <StyledP> Ich freue mich sehr, dass Sie den Weg hierher
                gefunden haben und lade Sie ein, sich in meinem persönlichen Bücherparadies umzusehen. Als
                leidenschaftlicher Leser und Sammler habe ich im Laufe der Jahre eine vielfältige Auswahl an Büchern aus
                verschiedenen Genres und Epochen zusammengetragen.

                In meiner Hausbibliothek finden Sie eine breite Palette von Büchern, von zeitlosen Klassikern bis hin zu
                aktuellen Bestsellern. Egal, ob Sie nach einem spannenden Krimi, einem inspirierenden Sachbuch oder
                einem romantischen Liebesroman suchen, hier werden Sie sicherlich fündig. Stöbern Sie durch die Regale,
                lassen Sie sich von den Buchumschlägen verführen und entdecken Sie neue Welten zwischen den Seiten.

                Ich hoffe, dass Sie sich in meiner Hausbibliothek wohl fühlen und dass Sie beim Lesen die gleiche Freude
                und Inspiration empfinden, die ich selbst beim Durchstöbern meiner Büchersammlung erlebe. Vielen Dank
                für Ihren Besuch und viel Vergnügen beim Erkunden meiner Bücherwelt!</StyledP>
        </StyledDiv>
    );
}
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:99vw;
`;
const StyledP = styled.p`
    display: flex;
    justify-content: center;
    align-content: center;
    width:70vw;
    font-size: 2vw;
    margin-top:5vw
`;