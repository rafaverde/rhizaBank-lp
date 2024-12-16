import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
};

export default function PrivacyPolicies() {
  return (
    <main className="bg-slate-100">
      <div className="px-4 py-16 lg:m-auto lg:max-w-[1170px] lg:justify-between xl:px-0">
        <h2 className="text-3xl font-extrabold text-rhiza-green-500">
          Política de Privacidade da Rhiza Bank
        </h2>

        <p className="text-slate-500">
          Bem-vindo à Política de Privacidade da Rhiza Bank. Esta política
          descreve como coletamos, usamos, divulgamos e protegemos suas
          informações pessoais quando você visita nosso site{" "}
          <a href="https://rhizabank.com.br">rhizabank.com.br</a>.
        </p>

        <h3 className="mt-4 text-xl font-bold text-rhiza-blue-500">
          Informações que Coletamos
        </h3>
        <p className="text-slate-500">
          Coletamos diferentes tipos de informações, incluindo:
        </p>
        <ul className="mt-2 space-y-2 text-slate-500">
          <li>
            <strong>Informações Pessoais</strong>: Nome, endereço de e-mail,
            número de telefone e outros dados de contato que você nos fornece.
          </li>
          <li>
            <strong>Informações de Uso</strong>: Dados sobre como você usa nosso
            site, como as páginas visitadas, o tempo gasto no site e outras
            atividades de navegação.
          </li>
          <li>
            <strong>Informações Técnicas</strong>: Endereço IP, tipo de
            navegador, sistema operacional e outras informações técnicas
            coletadas automaticamente.
          </li>
        </ul>

        <h3 className="mt-4 text-xl font-bold text-rhiza-blue-500">
          Como Usamos Suas Informações
        </h3>
        <p className="text-slate-500">
          Utilizamos suas informações para os seguintes fins:
        </p>
        <ul className="mt-2 space-y-2 text-slate-500">
          <li>Para fornecer e melhorar nossos serviços.</li>
          <li>
            Para responder às suas perguntas e fornecer suporte ao cliente.
          </li>
          <li>Para personalizar sua experiência no nosso site.</li>
          <li>
            Para fins de marketing, incluindo o envio de anúncios
            personalizados.
          </li>
          <li>Para cumprir obrigações legais e regulatórias.</li>
        </ul>

        <h3 className="mt-4 text-xl font-bold text-rhiza-blue-500">
          Compartilhamento de Informações
        </h3>
        <p className="text-slate-500">
          Podemos compartilhar suas informações com:
        </p>
        <ul className="mt-2 space-y-2 text-slate-500">
          <li>Prestadores de serviços que trabalham em nosso nome.</li>
          <li>Parceiros de negócios e afiliados.</li>
          <li>Autoridades legais, quando necessário para cumprir a lei.</li>
        </ul>

        <h3 className="mt-4 text-xl font-bold text-rhiza-blue-500">
          Segurança das Informações
        </h3>
        <p className="text-slate-500">
          Adotamos medidas de segurança apropriadas para proteger suas
          informações contra acesso, alteração, divulgação ou destruição não
          autorizada.
        </p>

        <h3 className="mt-4 text-xl font-bold text-rhiza-blue-500">
          Seus Direitos
        </h3>
        <p className="text-slate-500">
          Você tem o direito de acessar, corrigir, excluir ou limitar o uso de
          suas informações pessoais. Para exercer esses direitos, entre em
          contato conosco usando as informações fornecidas abaixo.
        </p>

        <h3 className="mt-4 text-xl font-bold text-rhiza-blue-500">
          Alterações a Esta Política
        </h3>
        <p className="text-slate-500">
          Podemos atualizar esta Política de Privacidade periodicamente.
          Notificaremos sobre quaisquer alterações publicando a nova política em
          nosso site. Recomendamos revisar esta página regularmente para se
          manter informado sobre nossas práticas de privacidade.
        </p>

        <h3 className="mt-4 text-xl font-bold text-rhiza-blue-500">Contato</h3>
        <p className="text-slate-500">
          Se você tiver dúvidas sobre nossa Política de Privacidade, entre em
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

        <p className="text-slate-500">
          Última atualização:{" "}
          {new Intl.DateTimeFormat("pt-BR").format(new Date())}
        </p>
      </div>
    </main>
  );
}
