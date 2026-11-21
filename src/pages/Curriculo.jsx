import fotoCurriculo from '../assets/curriculo.jpg'

const dicas = [
  {
    titulo: 'Simplicidade',
    texto: 'Um currículo rico em conteúdo é a melhor forma de expor suas qualificações e experiências.',
  },
  {
    titulo: 'Estrutura',
    texto: 'Uma estrutura limpa é útil para uma boa organização do conteúdo do currículo.',
  },
  {
    titulo: 'Estratégia nos Tópicos',
    texto: 'Utilize palavras e frases que vão direto ao ponto, sem se estender demais em explicações desnecessárias.',
  },
  {
    titulo: 'Foco em Resultados',
    texto: 'Focar nos resultados de experiências antigas tem um peso maior do que o foco em todo o processo.',
  },
]

function Curriculo() {
  return (
    <section className="container curriculo">
      <h1 className="titulo">Montagem de Currículo</h1>
      <p className="subtitulo curriculo-subtitulo">
        O ponto forte da construção de um currículo está na simplicidade e objetividade.
      </p>

      {/* Outro uso da função map */}
      <div className="curriculo-conteudo">
        <div className="curriculo-dicas">
          {dicas.map((dica) => (
            <div className="dica" key={dica.titulo}>
              <h2>{dica.titulo}</h2>
              <p>{dica.texto}</p>
            </div>
          ))}
        </div>

        <img className="curriculo-foto" src={fotoCurriculo} alt="Exemplo de currículo" />
      </div>
    </section>
  )
}

export default Curriculo
