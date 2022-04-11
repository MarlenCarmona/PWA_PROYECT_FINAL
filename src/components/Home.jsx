
export default function Home() {
    return (
      <>
        <main>
          <h2>Julissa Dominguez</h2>
          <p>Navega un poco.</p>
          <img src={process.env.PUBLIC_URL + '/yul.jpg'} alt="imagen-prueba" height="250px"/>
        </main>
      </>
    );
  }