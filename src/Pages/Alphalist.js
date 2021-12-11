import React, {useState, useEffect} from 'react'
import Definitions from './Definitions';
import { Alpha, Define, GlossaryContainer } from './styledElement';

export default function Alphalist(props) {
  
  const [selection, setSelection] = useState('A')

  // useEffect(() => {
  //   props.func(selection);
  // }, [selection]);

  const glossLetter = {
    fontSize:'12px',
    textAlign:"center",
    color:'#444',
    fontWeight:'600'
    }
    const glossLetterSelected = {
      fontSize:'12px',
      textAlign:"center",
      fontWeight:'600',
      backgroundColor: '#41CC89',
      color:'#e6fcf2',
      borderWidth: '2px',
      borderColor:'#e6fcf2',
      borderRadius: '8px'
      }
    const container = {
      paddingBottom:'120px'
    }
    return (
        <div style={container}>
          <GlossaryContainer>
            <Alpha>
          <p onClick={() => setSelection('A')} style={selection === 'A' ? glossLetterSelected : glossLetter}>A</p>
<p onClick={() => setSelection('B')} style={selection === 'B' ? glossLetterSelected : glossLetter}>B</p>
<p onClick={() => setSelection('C')} style={selection === 'C' ? glossLetterSelected : glossLetter}>C</p>
<p onClick={() => setSelection('D')} style={selection === 'D' ? glossLetterSelected : glossLetter}>D</p>
<p style={selection === 'E' ? glossLetterSelected : glossLetter} onClick={() => setSelection('E')}>E</p>
<p style={selection === 'F' ? glossLetterSelected : glossLetter} onClick={() => setSelection('F')}>F</p>
<p style={selection === 'G' ? glossLetterSelected : glossLetter} onClick={() => setSelection('G')}>G</p>
<p style={selection === 'H' ? glossLetterSelected : glossLetter} onClick={() => setSelection('H')}>H</p>
<p style={selection === 'I' ? glossLetterSelected : glossLetter} onClick={() => setSelection('I')}>I</p>
<p style={selection === 'J' ? glossLetterSelected : glossLetter} onClick={() => setSelection('J')}>J</p>
<p style={selection === 'K' ? glossLetterSelected : glossLetter} onClick={() => setSelection('K')}>K</p>
<p style={selection === 'L' ? glossLetterSelected : glossLetter} onClick={() => setSelection('L')}>L</p>
<p style={selection === 'M' ? glossLetterSelected : glossLetter} onClick={() => setSelection('M')}>M</p>
<p style={selection === 'N' ? glossLetterSelected : glossLetter} onClick={() => setSelection('N')}>N</p>
<p style={selection === 'O' ? glossLetterSelected : glossLetter} onClick={() => setSelection('O')}>O</p>
<p style={selection === 'P' ? glossLetterSelected : glossLetter} onClick={() => setSelection('P')}>P</p>
<p style={selection === 'Q' ? glossLetterSelected : glossLetter} onClick={() => setSelection('Q')}>Q</p>
<p style={selection === 'R' ? glossLetterSelected : glossLetter} onClick={() => setSelection('R')}>R</p>
<p style={selection === 'S' ? glossLetterSelected : glossLetter} onClick={() => setSelection('S')}>S</p>
<p style={selection === 'T' ? glossLetterSelected : glossLetter} onClick={() => setSelection('T')}>T</p>
<p style={selection === 'U' ? glossLetterSelected : glossLetter} onClick={() => setSelection('U')}>U</p>
<p style={selection === 'V' ? glossLetterSelected : glossLetter} onClick={() => setSelection('V')}>V</p>
<p style={selection === 'W' ? glossLetterSelected : glossLetter} onClick={() => setSelection('W')}>W</p>
<p style={selection === 'X' ? glossLetterSelected : glossLetter} onClick={() => setSelection('X')}>X</p>
<p style={selection === 'Y' ? glossLetterSelected : glossLetter} onClick={() => setSelection('Y')}>Y</p>
<p style={selection === 'Z' ? glossLetterSelected : glossLetter} onClick={() => setSelection('Z')}>Z</p>
</Alpha>
<Define>
          <Definitions letter={selection}/>
          </Define>
          </GlossaryContainer>
</div>
    )
}