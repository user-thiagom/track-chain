import {
  Box,
  Button, Text
} from "grommet";
import { Menu } from "grommet-icons";
import { useEffect, useState } from "react";
import { BarChart } from "../../Components/Charts/BarChart";
import { LineChart } from "../../Components/Charts/LineChart";
import { PieChart } from "../../Components/Charts/PieChart";
import SideMenu from "../../Components/SideMenu/SideMenu";
import WaitSpinner from "../../Components/WaitSpinner";
import { api } from "../../Services/api";
import "./index.css";

export const fromJsonToChartData = (response) => {
  let data = {
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: [
          "#11D470",
          "#A8EB1E",
          "#D49E11",
          '#ED4B13',
          '#D9485D',
          '#AD67F5'

        ],
        hoverOffset: 4,
      },
    ],
  };

  Object.keys(response).map((key) => {
    data.datasets[0].data.push(response[key]);
    data.labels.push(key);
  });

  return data;
};

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [dados, setDados] = useState({});
  const [tiposDeVeiculos, setTiposDeVeiculos] = useState([]);
  const [tiposDeEnergia, settiposDeEnergia] = useState([]);

  const [tipoH2Data, setTipoH2Data] = useState(null);
  const [emissaoMedia, setEmissaoMedia] = useState(0);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      api.get("relatorioGeral").then((response) => {
        console.log(response.data);
        setLoading(false);
        setDados(response.data)
        setTipoH2Data(
          fromJsonToChartData(response.data.tiposEQtdDeH2Transportados)
        );
        setEmissaoMedia(
          fromJsonToChartData(response.data.emissaoMediaPorEmpresa)
        );
        setTiposDeVeiculos(fromJsonToChartData(response.data.tiposDeVeiculosESuasQtd));
        settiposDeEnergia(fromJsonToChartData(response.data.fontesDeEnergiaUsadas));
      });
    }, 1000);
  }, []);

  if (loading) {
    return <WaitSpinner />;
  }


  return (
    <Box // Container
      direction="column"
      justify="center"
      overflow="auto"
      height="100vh"
    >
      <Box //Caixa que contem o conteudo da página
        direction="row"
        align="center"
        justify="start"
        overflow="auto"
        height="100%"
      >
        {showBar && <SideMenu handlerFunction={setShowBar} />}

        <Box //Div menu lateral
          fill="vertical"
          direction="column"
          justify="start"
          align="center"
          pad={{ top: "3px" }}
        >
          <Button
            icon={<Menu size="large" />}
            onClick={() => {
              setShowBar(true);
            }}
            hoverIndicator
            margin={{ left: "30px", top: "30px" }}
            className="btn-menu"
          />
        </Box>

        <Box //Div do conteúdo da página
          height="100%"
          direction="column"
          justify="between"
          align="center"
          fill="horizontal"
        >
          <Box //Caixa dos contratos
            justify="start"
            align="start"
            width="xxlarge"
            gap="small"
            margin="auto"
            height="large"
            elevation="medium"
            background="light-1"
            round="small"
          >
            <Box //Linha 1
              direction="row"
              fill='horizontal'
              justify='center'
              align='center'
              gap='medium'
              margin={{ top: 'medium' }}
              pad={{ horizontal: 'large' }}

              height='100vh'
            >
              <Box //Card 1
                justify='center'
                align='center'
                height='100%'
                width='80%'
                round='medium'
                elevation='medium'
                gap="medium"
                pad={{ horizontal: 'medium' }}
              >
                <Box //Linha 1
                  align="start"
                  justify="center"
                  fill='horizontal'
                >
                  <Text size="medium">
                    TIPO DE H2 MAIS REQUISITADO
                  </Text>
                  <Text size="xlarge" weight='bold'>
                    {dados.h2MaisSolicitado.toUpperCase()}
                  </Text>
                </Box>

                <Box //Linha 2
                  align="start"
                  justify="start"
                  fill='horizontal'
                  direction="row"
                  gap="large"
                >
                  <Box fill='horizontal'>
                    <Text size="medium">
                      TRANSPORTADORA MAIS FREQUENTE
                    </Text>
                    <Text size="xlarge" weight='bold'>
                      {dados.transportadoraMaisFrequente.toUpperCase()}
                    </Text>
                  </Box>

                  <Box fill='horizontal'>
                    <Text size="medium">
                      CO2 TOTAL EMITIDO NO TRANSPORTE
                    </Text>
                    <Text size="xlarge" weight='bold'>
                      {dados.co2TotalEmitido} Kg
                    </Text>
                  </Box>
                </Box>

                <Box //Linha 3
                  align="start"
                  justify="start"
                  fill='horizontal'
                  direction="row"
                  gap="large"
                >
                  <Box fill='horizontal'>
                    <Text size="medium">
                      TIPO DE VEICULO MAIS USADO
                    </Text>
                    <Text size="xlarge" weight='bold'>
                      Caminhão
                    </Text>
                  </Box>

                  <Box fill='horizontal'>
                    <Text size="medium">
                      DISTÂNCIA TOTAL PERCORRIDA
                    </Text>
                    <Text size="xlarge" weight='bold'>
                      {dados.distanciaTotal} Km
                    </Text>
                  </Box>
                </Box>

              </Box>

              <Box //Card 2
                direction="row"
                justify='center'
                align='center'
                height='100%'
                width='80%'
                round='medium'
                elevation='medium'
                gap="small"
                pad={{ horizontal: 'medium' }}
              >

                <Box //Coluna 1

                  fill='horizontal'
                  gap="medium"
                >
                  <Box //Linha 1
                    fill='horizontal'
                  >
                    <Text size="medium">
                      ENERGIA MÉDIA GASTA NA PRODUÇÃO
                    </Text>
                    <Text size="xlarge" weight='bold'>
                      {dados.energiaMediaGasta} Mj
                    </Text>
                  </Box>

                  <Box //Linha 2
                    fill='horizontal'
                  >
                    <Text size="medium">
                      VOLUME MÉDIO DE H2 GERADO
                    </Text>
                    <Text size="xlarge" weight='bold'>
                      {dados.volumeMedioH2} m³/h
                    </Text>
                  </Box>

                  <Box //Linha 3
                    fill='horizontal'
                  >
                    <Text size="medium">
                      EFICIÊNCIA DA GERAÇÃO
                    </Text>
                    <Text size="xlarge" weight='bold'>
                      {dados.eficienciaDaGeracao * 100} %
                    </Text>
                  </Box>
                </Box>

                <Box //Coluna 2
                  width='60%'
                >
                  <PieChart
                    chartData={tiposDeEnergia}
                    text={"Tipos de fontes de energia usadas na compressão"}
                  />
                </Box>
              </Box>
            </Box>

            <Box //Linha 2
              direction="row"
              fill='horizontal'
              justify='center'
              align='center'
              gap='medium'
              margin={{ bottom: 'medium' }}
              pad={{ horizontal: 'large' }}
              height='100vh'
            >
              <Box //Card 1
                justify='center'
                align='center'
                height='100%'
                width='80%'
                round='medium'
                elevation='medium'
                direction="row"
              >
                <Box
                width='40%'
                >
                  <PieChart
                    chartData={tiposDeVeiculos}
                    text={"Tipos de tipos de veiculos utilizados"}
                  />
                </Box>
                <Box
                width='40%'
                >
                  <PieChart
                    chartData={tipoH2Data}
                    text={"Tipos de H2 entregues"}
                  />
                </Box>
              </Box>

              <Box //Card 2
                justify='center'
                align='center'
                height='100%'
                width='80%'
                round='medium'
                elevation='medium'
              >
                <Box
                width='90%'
                >
                  <BarChart
                    chartData={emissaoMedia}
                    text={"Emissão de CO2(kg/km) por empresa"}
                  />
                </Box>
              </Box>
            </Box>

          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;