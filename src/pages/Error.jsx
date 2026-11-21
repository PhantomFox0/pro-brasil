import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <section className="container erro-pagina">
      <p className="erro-codigo">Erro {error?.status || 404}</p>
      <h1 className="titulo">Página não encontrada</h1>
      <p className="subtitulo erro-descricao">
        O endereço que você tentou acessar não existe ou foi movido. Volte para a
        página inicial para continuar navegando pelas vagas e orientações.
      </p>

      <div className="erro-acoes">
        <Link to="/" className="erro-btn-primario">
          Voltar para a Página Inicial
        </Link>
        <Link to="/vagas" className="erro-btn-secundario">
          Ver vagas
        </Link>
      </div>
    </section>
  );
}

export default Error;