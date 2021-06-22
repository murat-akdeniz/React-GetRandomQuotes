import { Wrapper, Paragraf, Button } from './stylesComponent';

const Currency = (props) => {
  const { quote, author, onClick } = props

  return (
    <Wrapper>
      <Paragraf>{quote}</Paragraf>
      <small style={{ marginBottom: '50px', fontSize: '1.8rem' }}>{author}</small>
      <Button onClick={onClick}>New Quote</Button>

    </Wrapper>
  )
}
export default Currency


