import { useState, useEffect } from "react";
import { getCharacterById } from "../api/Character";
import Card from 'react-bootstrap/Card';

import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SickOutlinedIcon from '@mui/icons-material/SickOutlined';

export default function ResidentInfo({ residentUrl }) {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    getCharacterById(residentUrl).then(res => setCharacter(res));
  }, []);
  console.log(character);
  return (
    <Card style={{ width: '18rem' }} className="cardResident">
      <Card.Img variant="top" src={character?.image} style={{ width: "100%", borderRadius: 0 }} />
      <Card.Body>
        <Card.Title>{character?.name}</Card.Title>
        <Card.Text>
          <span>
            Status:&nbsp;
            <span style={{
              color: character?.status === "Dead" ? 'red' : ( character?.status === "Alive" ? '#8fff8ba4' : 'white'),
              }}>
              {character?.status}&nbsp;
              {
                character?.status === "Dead" ?
                <SickOutlinedIcon /> :
                ( character?.status === "Alive" ?
                <SentimentSatisfiedAltIcon /> :
                <QuestionMarkIcon />
                )
              }
            </span>
          </span>
          <br />
          <span>
            Species: {character?.species}
          </span>
          <br />
          <span>
            Origin: {character?.name}
          </span>
          <br />
          <span>
            Times appear: {character?.episode?.length}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
