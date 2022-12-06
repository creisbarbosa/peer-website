import Image from "next/image";
import { BasicForms, ContentDiv, LandingSection, ConnectedMachiningSection, OperationSection, CADSection, NumbersSection, PartnerBenefits, VideoSection, BlogSection } from "../styles/pages/home";
import { Button } from "../styles/components/Button";

import singleDot from "../assets/singleDot.svg";
import doubleDot from "../assets/doubleDot.svg";

import CNCLatheImg from "../assets/machines/CNCLathe.svg";
import ConvencionalLatheImg from "../assets/machines/ConvencionalLathe.svg";
import MillingCutterImg from "../assets/machines/MillingCutter.svg";
import MachiningCenterImg from "../assets/machines/MachiningCenter.svg";

import Image01 from "../assets/img/Image01.png";
import Image02 from "../assets/img/Blog_01.png";
import Image03 from "../assets/img/Blog_02.png";

import CompaniesSlider from "../components/CompaniesSlider";
import AlliedCompaniesSlider from "../components/AlliedCompaniesSlider";

export default function Home() {
  return (
    <>
      <LandingSection>
        <ContentDiv>
          <BasicForms>
            <Image src={singleDot} alt="Company logo" />
            <Image src={doubleDot} alt="Company logo" />
          </BasicForms>
          <h1>A forma mais fácil e rápida de comprar peças usinadas</h1>
          <p>A plataforma da Peerdustry conta com <strong>+ de 400</strong> fornecedores garante a qualidade e o prazo de entrega de peças usinadas spot.</p>
          <Button color="blue">Comprar peças usinadas</Button>
        </ContentDiv>
      </LandingSection>

      <CompaniesSlider/>

      <OperationSection>
        <div className="operationWrapper">
          <div className="operationHeader">
            <h2>Como funciona?</h2>
            <hr />
            <p>Como uma empresa de tecnologia especializada em Usinagem Conectada, nosso maior objetivo é simplificar a vida de empresas que fornecem e compram peças usinadas sob demanda.
            Gerenciamos de forma integral - de ponta a ponta - os processos de compra e venda dos nossos parceiros para gerar valor e tornar a cadeia de usinagem de peças mais eficiente.</p>
          </div>
          <div className="operationCards">
            <article className="clientOperationCard">
              <div>
                <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="21.5" cy="22" r="21.5" fill="#003362"/>
                </svg>
                <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="21.5" cy="22" r="21.5" fill="#CFE2F2"/>
                </svg>
              </div>
              <h3>Quem consome peças usinadas</h3>
              <p>Em uma ponta temos empresas que consomem peças usinadas de baixo volume sob demanda, para a montagem de produtos finais, como máquinas e equipamentos ou para uso em manutenção das suas linhas de produção.</p>
            </article>
            <article className="peerdustryOperationCard">
              <div>
                <svg width="117" height="44" viewBox="0 0 117 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M83.1765 39.3301C87.2443 41.6694 91.7106 43.388 96.3372 43.383C107.985 43.1579 117.045 33.6354 116.649 21.9363C116.253 10.2374 106.549 0.738443 94.8866 0.538086C90.26 0.54304 85.9101 2.26724 82.001 4.61499C75.0268 8.80366 66.8172 11.2103 57.9658 11.2196C49.0194 11.2291 40.5626 8.78841 33.2514 4.53123C29.3471 2.25781 25.045 0.608482 20.5906 0.613577C8.81524 0.697707 -0.386616 10.2721 0.0125079 22.0601C0.41167 33.8481 10.2612 43.4025 22.0415 43.462C26.4958 43.4573 30.6859 41.799 34.436 39.5173C41.4582 35.245 49.7493 32.7865 58.6957 32.7769C67.547 32.7676 75.9191 35.1565 83.1765 39.3301Z"  fill="#003362"/>
                </svg>
              </div>
              <h3>Peerdustry</h3>
              <p>No meio está a Peer,  integrando as duas pontas da cadeia de usinagem de peças. Unimos empresas com capacidade produtiva ociosa com outras que apresentam demanda por fabricação.</p>
            </article>
            <article className="partnersOperationCard">
              <div>
                <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="21.5" cy="22" r="21.5" fill="#CFE2F2"/>
                </svg>
                <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="21.5" cy="22" r="21.5" fill="#003362"/>
                </svg>
              </div>
              <h3>Parceiros de manufatura</h3>
              <p>Na outra ponta temos os fabricantes de peças usinadas, que por meio da Peer conseguem capturar novos trabalhos e assim utilizar seu maquinário ocioso para atender clientes.</p>
            </article>
          </div> 
        </div>
        
      </OperationSection>

      <ConnectedMachiningSection>

        <main>
          <div className="header">
          <h2>Usinagem Conectada</h2>
          <p>A Peerdustry facilita a compra e venda de peças usinadas sob demanda. Gerenciamos os processos de ponta a ponta, desde o pedido até a entrega, gerando eficiência para toda a cadeia de usinagem. E o melhor: fazemos tudo digitalmente!</p>
          <BasicForms>
            <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21.5" cy="22" r="21.5"/>
            </svg>
            <svg width="117" height="44" viewBox="0 0 117 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M83.1765 39.3301C87.2443 41.6694 91.7106 43.388 96.3372 43.383C107.985 43.1579 117.045 33.6354 116.649 21.9363C116.253 10.2374 106.549 0.738443 94.8866 0.538086C90.26 0.54304 85.9101 2.26724 82.001 4.61499C75.0268 8.80366 66.8172 11.2103 57.9658 11.2196C49.0194 11.2291 40.5626 8.78841 33.2514 4.53123C29.3471 2.25781 25.045 0.608482 20.5906 0.613577C8.81524 0.697707 -0.386616 10.2721 0.0125079 22.0601C0.41167 33.8481 10.2612 43.4025 22.0415 43.462C26.4958 43.4573 30.6859 41.799 34.436 39.5173C41.4582 35.245 49.7493 32.7865 58.6957 32.7769C67.547 32.7676 75.9191 35.1565 83.1765 39.3301Z"/>
            </svg>
            <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21.5" cy="22" r="21.5"/>
            </svg>
          </BasicForms>
        </div>

        <div className="cardsContainer">

          <div className="secondCardWrapper">
            <div className="imageCard">
            </div>
            <div className="card">
              <div className="cardHeader">
                <strong>Para quem compra</strong>
                <h2>Compre peças usinadas fácil e rápido</h2>
              </div>
              <div className="content">
                <p>Atualmente, contamos com centenas de parceiros de manufatura homologados em nossa plataforma digital. Ou seja, os compradores têm acesso a um grande volume de fornecedores em um só canal, gerando economia de tempo na busca por novos fornecedores +</p>
                <Button color="red">Solicitar cotação →</Button>
              </div>
            </div>
          </div>

          <div className="thirdCardWrapper">
            <div className="card">
              <div className="cardHeader">
                <strong>Para quem quer ser um parceiro de produção</strong>
                <h2>Gere receita a partir de máquinas ociosas</h2>
              </div>
              <div className="content">
                <p>Com a Peerdustry, um leque de oportunidades se abre, possibilitando que fornecedores gerem receita a partir de máquinas ociosas. A plataforma também possibilita que as empresas passem a acessar mercados que não conseguiam alcançar anteriormente +</p>
                <Button color="red">Seja um parceiro →</Button>
              </div>
            </div>
            <div className="imageCard">
            </div>
          </div>

        </div>
        </main>


      </ConnectedMachiningSection>

      <NumbersSection>
        <div className="numbersWrapper">
          <div className="numbersHeader">
            <h2>Em números</h2>
            <hr />
            <p>Nós contamos com centenas de parceiros de manufatura homologados em nossa plataforma.  Até o momento já conseguimos...</p>
          </div>
          <div className="numbersCards">
            <article className="numbersCardsInfo">
              <div>
                <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="21.5" cy="22" r="21.5" fill="#003362"/>
                </svg>
                <svg width="117" height="44" viewBox="0 0 117 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M83.1765 39.3301C87.2443 41.6694 91.7106 43.388 96.3372 43.383C107.985 43.1579 117.045 33.6354 116.649 21.9363C116.253 10.2374 106.549 0.738443 94.8866 0.538086C90.26 0.54304 85.9101 2.26724 82.001 4.61499C75.0268 8.80366 66.8172 11.2103 57.9658 11.2196C49.0194 11.2291 40.5626 8.78841 33.2514 4.53123C29.3471 2.25781 25.045 0.608482 20.5906 0.613577C8.81524 0.697707 -0.386616 10.2721 0.0125079 22.0601C0.41167 33.8481 10.2612 43.4025 22.0415 43.462C26.4958 43.4573 30.6859 41.799 34.436 39.5173C41.4582 35.245 49.7493 32.7865 58.6957 32.7769C67.547 32.7676 75.9191 35.1565 83.1765 39.3301Z"  fill="#CFE2F2"/>
                </svg>
                <svg width="117" height="44" viewBox="0 0 117 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M83.1765 39.3301C87.2443 41.6694 91.7106 43.388 96.3372 43.383C107.985 43.1579 117.045 33.6354 116.649 21.9363C116.253 10.2374 106.549 0.738443 94.8866 0.538086C90.26 0.54304 85.9101 2.26724 82.001 4.61499C75.0268 8.80366 66.8172 11.2103 57.9658 11.2196C49.0194 11.2291 40.5626 8.78841 33.2514 4.53123C29.3471 2.25781 25.045 0.608482 20.5906 0.613577C8.81524 0.697707 -0.386616 10.2721 0.0125079 22.0601C0.41167 33.8481 10.2612 43.4025 22.0415 43.462C26.4958 43.4573 30.6859 41.799 34.436 39.5173C41.4582 35.245 49.7493 32.7865 58.6957 32.7769C67.547 32.7676 75.9191 35.1565 83.1765 39.3301Z"  fill="#CFE2F2"/>
                </svg>
                <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="21.5" cy="22" r="21.5" fill="#CFE2F2"/>
                </svg>
                <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="21.5" cy="22" r="21.5" fill="#CFE2F2"/>
                </svg>
              </div>
              <div className="numbersInfo">
                <h2>+36.000</h2>
                <strong>Peças usinadas</strong>
              </div>
                <p>Por meio da tecnologia de análise de dados conseguimos entregar os pedidos certos para os parceiros de manufatura ideais, otimizando a produção de peças usinadas.</p>
            </article>
            <article className="numbersCardsInfo">
              <div>
                <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="21.5" cy="22" r="21.5" fill="#003362"/>
                </svg>
                <svg width="117" height="44" viewBox="0 0 117 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M83.1765 39.3301C87.2443 41.6694 91.7106 43.388 96.3372 43.383C107.985 43.1579 117.045 33.6354 116.649 21.9363C116.253 10.2374 106.549 0.738443 94.8866 0.538086C90.26 0.54304 85.9101 2.26724 82.001 4.61499C75.0268 8.80366 66.8172 11.2103 57.9658 11.2196C49.0194 11.2291 40.5626 8.78841 33.2514 4.53123C29.3471 2.25781 25.045 0.608482 20.5906 0.613577C8.81524 0.697707 -0.386616 10.2721 0.0125079 22.0601C0.41167 33.8481 10.2612 43.4025 22.0415 43.462C26.4958 43.4573 30.6859 41.799 34.436 39.5173C41.4582 35.245 49.7493 32.7865 58.6957 32.7769C67.547 32.7676 75.9191 35.1565 83.1765 39.3301Z"  fill="#CFE2F2"/>
                </svg>
                <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="21.5" cy="22" r="21.5" fill="#003362"/>
                </svg>
                <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="21.5" cy="22" r="21.5" fill="#003362"/>
                </svg>
              </div>
              <div className="numbersInfo">
                <h2>+14.000 h</h2>
                <strong>Capacidade de usinagem / mês</strong>
              </div>
                <p>O registro de cada uma das máquinas dos nossos parceiros de usinagem nos possibilita dimensionar nossa capacidade produtiva em horas.</p>
            </article>
          </div>
          <div className="numbersCardsMachines">
            <article>
              <Image src={ConvencionalLatheImg} alt=""/>
              <p><strong>+40</strong> Tornos convencionais</p>
            </article>
            <article>
              <Image src={CNCLatheImg} alt=""/>
              <p><strong>+40</strong> Tornos CNC</p>
            </article>
            <article>
              <Image src={MillingCutterImg} alt=""/>
              <p><strong>+40</strong> Fresas CNC</p>
            </article>
            <article>
              <Image src={MachiningCenterImg} alt=""/>
              <p><strong>+50</strong> Centros de usinagem</p>
            </article>
            
          </div>  
        </div>
      </NumbersSection>

      <PartnerBenefits>
        <div className="partnerBenefitsImg">
          <Image src={Image01} alt=""></Image>
        </div>
          <div className="partnerBenefitsContent">
            <h2>Inove o seu  processo produtivo</h2>
            <hr/>
            <div className="paragraph">
              <p>Na era da indústria 4.0, as empresas que estão passando por transformação digital estão à frente. Cada vez mais, o mercado de peças usinadas sob demanda exige rapidez, eficiência e assertividade.</p>
              <p>O digital e a tecnologia de dados permitem que os clientes e Parceiros de Manufatura da Peer ganhem tempo para produzir mais, deixando para trás etapas burocráticas e trabalhosas dos processos de compra e venda de peças usinadas.Já pensou em fornecer ou comprar peças digitalmente, economizando até tempo de custos de deslocamento?</p> 
              <h3>Transforma agora a produção da sua empresa!</h3>            
            </div>
            <div className="benefitsCards">
              <article>
                <strong>Economize</strong>
                <h3>+ 60h</h3>
                <strong>Abertura de novos clientes</strong>
              </article>
              <article>
                <strong>Economize</strong>
                <h3>+ 70h</h3>
                <strong>Elaboração de orçamentos</strong>
              </article>
              <article>
                <strong>Economize</strong>
                <h3>+ 60h</h3>
                <strong>Compra de MP + Frete</strong>
              </article>
            </div>
            <Button color="red">Fale com a Peer</Button>
        </div>
      </PartnerBenefits>

      <CADSection>
        <div>
          <h2>Ganhe eficiência usando a modelagem 3D em desenhos técnicos!</h2>
          <p>Baixe agora o e-book <strong>&#34;Desenho Técnico: por que usar a modelagem 3D?&#34;</strong> e entenda quais são as principais vantagens do desenho 3D para o mercado de usinagem e como ele pode otimizar a sua rotina de compra de peças usinadas.</p>
          <Button color="white"> Baixe agora [PDF] ↓ </Button>
        </div>
      </CADSection>

      <VideoSection>
        <header>
          <h2>Conte com o suporte da Peerdustry de ponta a ponta</h2>
          <hr />
          <p>Na nossa visão, a compra e a venda de peças usinadas devem fazer parte de um único ecossistema, trabalhando de forma integrada e otimizada. Utilizamos tecnologia para oferecer ao mercado de peças usinadas um novo e inovador modelo de negócios, resolvendo problemas de ponta a ponta, desde o início do processo de compra/venda até a entrega dos pedidos.
          </p>
          <Button color="blue">Saiba mais →</Button>
        </header>
        <iframe src="https://www.youtube.com/embed/hZ1Y0pXYBRQ?controls=1">
        </iframe>
      </VideoSection>

      <AlliedCompaniesSlider/>

      <BlogSection>
        <div className="blogWrapper">
          <div className="blogHeader">
            <h2>Blog da usinagem</h2>
            <hr />
            <p>Saiba mais sobre a Usinagem Conectada aplicada no setor metal mecânico nos processos de manufatura por usinagem mecânica.</p>
          </div>
          <div className="blogCards">
            <article>
              <div>
                <Image src={Image02} alt="" />
              </div>
              <div className="content">
                <h3>Como economizar na compra de peças usinadas?</h3>
                <strong>18 de Novembro de 2022</strong>
                <p>Entenda como a Peer ajuda a economizar na compra de peças usinadas, aumentado a eficiência da sua empresa. Veja o case de uma ferramentaria!</p>
                <Button color="blue">Leia mais →</Button>
              </div>
            </article>
            <article>
              <div>
                <Image src={Image03} alt="" />
              </div>
              <div className="content">
                <h3>Custo de matéria-prima afeta menos as indústrias de pequeno porte.</h3>
                <strong>10 de Outubro de 2022</strong>
                <p>Entenda como a Peer ajuda compradores e fornecedores de peças usinadas a economizar na escolha e compra de matéria-prima</p>
                <Button color="blue">Leia mais →</Button>
              </div>
            </article>
          </div> 
        </div>
      </BlogSection>
    </>
  )
}