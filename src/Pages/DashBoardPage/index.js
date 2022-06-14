import {
  Avatar,
  Box,
  Button,
  Footer,
  Grid,
  Image,
  Layer,
  Nav,
  Page,
  PageContent,
  Sidebar,
  Spinner,
  Text,
  Tip,
} from "grommet";
import { Location, Clipboard, Menu, PiedPiper } from "grommet-icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideMenu from "../../Components/SideMenu/SideMenu";
import TrackingCards from "../../Components/TrackingCards/TrackingCards";
import WaitSpinner from "../../Components/WaitSpinner";
import { api } from "../../Services/api";
import TrackingOverlay from "../TrackingOverlayPage";
import "./index.css";
import { PieChart } from "../../Components/Charts/PieChart";
import { LineChart } from "../../Components/Charts/LineChart";
import { BarChart } from "../../Components/Charts/BarChart";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [tiposDeVeiculos, setTiposDeVeiculos] = useState([]);
  const [tiposDeEnergia, settiposDeEnergia] = useState([]);

  const [tipoH2Data, setTipoH2Data] = useState(null);
  const [emissaoMedia, setEmissaoMedia] = useState(0);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      api.get("relatorio").then((response) => {
        console.log(response.data);
        setLoading(false);

        setTipoH2Data(
          fromJsonToChartData(response.data.tiposEQtdDeH2Transportados)
        );
        setEmissaoMedia(
          fromJsonToChartData(response.data.emissaoMediaPorEmpresa)
        );
        setTiposDeVeiculos(fromJsonToChartData(response.data.tiposDeVeiculosESuasQtd));
        settiposDeEnergia(fromJsonToChartData(response.data.fontesDeEnergiaUsadas));
      });
    }, 4000);
  }, []);

  const fromJsonToChartData = (response) => {
    let data = {
      labels: [],
      datasets: [
        {
          label: "",
          data: [],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
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


  if (loading) {
    return <WaitSpinner />;
  }

  const ddata = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

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
            gap="medium"
            margin="auto"
            height="large"
            elevation="medium"
            background="light-1"
            round="small"
          >
            <Box direction="row" >
              
                <PieChart
                  chartData={tipoH2Data}
                  text={"Tipos de H2 entregues"}
                />
              
              
                <PieChart
                  chartData={tiposDeVeiculos}
                  text={"Tipos de tipos de veiculos utilizados"}
                />
              <PieChart
                  chartData={tiposDeEnergia}
                  text={"Tipos de fontes de energia usadas na compressão"}
                />
            </Box>

            <Box direction="row" width="medium" >
                <BarChart
                  chartData={emissaoMedia}
                  text={"Emissão de CO2(kg/km) por empresa"}
                />
                
            </Box>
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
