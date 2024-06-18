import styled from 'styled-components'

function App() {

  return (
    <Background>
      <div className='img'/>
      <div className='headline'>
        <h2>Sil Miranda</h2>
        <h3>Rio de Janeiro, Brasil</h3>
      </div>
      <p>"Desenvolvedor Front-end"</p>

      <button>GitGub</button>
      <button>Portfólio</button>
      <button>Linkedin</button>
      <button>Instagram</button>
    </Background>
  )
}

const Background = styled.main `
    width:400px;
    height: 630px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    background-color: hsl(0, 0%, 12%);
    border-radius: 30px;


  @media(max-width:600px) {
      width: 360px;
    }

  .img{
    width: 110px;
    height: 110px;
    
    background-size: 110px;
    background-image: url('src/assets/profile.jpg');
    background-position: center;
    background-repeat: no-repeat;
    
    border-radius: 100%;
    box-shadow: 1px 1px 4px hsl(0, 0%, 12%);
  }

  .headline {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  h2 {
    font-size: 24px;
  }

  h3{
    color: hsl(75, 94%, 57%);
    font-size: 18px;
  }

  p {
    font-weight: 300;
    font-size: 18px;
  }

  button {
    width: 300px;
    height: 50px;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 15px;
    background-color: hsl(0, 0%, 20%);
    box-shadow: 1px 1px 1px hsl(0, 0%, 16%);
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
      background-color: hsl(0, 0%, 26%);
    }
  }


`

export default App
