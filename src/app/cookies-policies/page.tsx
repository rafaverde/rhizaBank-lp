import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
};

export default function CookiesPolicies() {
  return (
    <main className="bg-slate-100">
      <div className="px-4 py-16 lg:m-auto lg:max-w-[1170px] lg:justify-between xl:px-0">
        <h2 className="text-3xl font-extrabold text-rhiza-green-500">
          Política de Cookies da Rhiza Bank
        </h2>

        <h3 className="mt-4 text-xl font-bold text-rhiza-blue-500">
          O que são cookies?
        </h3>
        <p className="text-slate-500">
          Cookies são pequenos arquivos de texto que são armazenados no seu
          dispositivo (computador, tablet, smartphone) quando você visita um
          site. Eles são amplamente utilizados para fazer com que os sites
          funcionem de forma mais eficiente e para fornecer informações aos
          proprietários do site.
        </p>

        <h3 className="mt-4 text-xl font-bold text-rhiza-blue-500">
          Como usamos os cookies?
        </h3>
        <p className="text-slate-500">
          No <strong>Rhiza Bank</strong>, utilizamos cookies para melhorar a
          experiência do usuário em nosso site{" "}
          <a href="https://rhizabank.com.br">rhizabank.com.br</a>, personalizar
          conteúdo e anúncios, fornecer recursos de mídia social e analisar
          nosso tráfego. As informações coletadas por meio dos cookies podem
          incluir dados como seu endereço IP, tipo de navegador, tempo de visita
          e páginas visitadas.
        </p>

        <h3 className="mt-6 text-xl font-extrabold text-rhiza-blue-500">
          Tipos de cookies que utilizamos
        </h3>

        <h3 className="mt-4 text-xl font-bold text-rhiza-blue-500">
          Cookies de rastreamento
        </h3>
        <p className="text-slate-500">
          Esses cookies são utilizados para rastrear a atividade dos visitantes
          em nosso site e coletar dados sobre o comportamento de navegação.
          Exemplos de cookies de rastreamento que utilizamos incluem:
        </p>
        <ul className="mt-2 space-y-2 text-slate-500">
          <li>
            <strong>Facebook</strong>: Utilizamos cookies do Facebook para medir
            a eficácia de nossas campanhas publicitárias no Facebook e para
            fornecer anúncios personalizados com base em suas interações
            anteriores com nosso site.
          </li>
          <li>
            <strong>Facebook Ads</strong>: Esses cookies ajudam a otimizar e
            personalizar os anúncios que mostramos a você no Facebook.
          </li>
          <li>
            <strong>Google Analytics</strong>: Utilizamos cookies do Google
            Analytics para coletar dados anônimos sobre o uso do site, o que nos
            ajuda a entender como nossos visitantes interagem com o site e a
            melhorar sua experiência.
          </li>
          <li>
            <strong>Google Tag Manager</strong>: Utilizamos cookies do Google
            Tag Manager para gerenciar e implementar tags de marketing e análise
            no nosso site, facilitando a integração e o funcionamento de outras
            ferramentas de rastreamento como Google Analytics e Facebook Ads.
          </li>
        </ul>

        <h3 className="mt-4 text-xl font-bold text-rhiza-blue-500">
          Gerenciamento de cookies
        </h3>
        <p className="text-slate-500">
          Você pode controlar e/ou excluir cookies como desejar - para detalhes,
          consulte <a href="https://aboutcookies.org">aboutcookies.org</a>. Você
          pode excluir todos os cookies que já estão no seu computador e pode
          configurar a maioria dos navegadores para impedir que eles sejam
          colocados. No entanto, se você fizer isso, talvez tenha que ajustar
          manualmente algumas preferências sempre que visitar um site e alguns
          serviços e funcionalidades poderão não funcionar.
        </p>

        <h3 className="mt-4 text-xl font-bold text-rhiza-blue-500">Contato</h3>
        <p className="text-slate-500">
          Se você tiver dúvidas sobre nossa política de cookies, entre em
          contato conosco:
        </p>
        <ul className="mt-2 space-y-2 text-slate-500">
          <li>
            <strong>Endereço</strong>: Rua Cosme Ferreira Marques, 169 - 1º
            andar 59200-000 - Centro - Santa Cruz/RN, Brasil
          </li>
          <li>
            <strong>WhatsApp</strong>: 84 99935-7157
          </li>
          <li>
            <strong>E-mail</strong>:{" "}
            <a href="mailto:atendimento@rhizabank.com.br">
              atendimento@rhizabank.com.br
            </a>
          </li>
        </ul>

        <p className="mt-6 text-sm text-slate-500">
          Última atualização:{" "}
          {new Intl.DateTimeFormat("pt-BR").format(new Date())}
        </p>
      </div>
    </main>
  );
}
