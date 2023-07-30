import "./Gateways.css";
import downloadDark from "../../assets/Gateways/Downlaod-dark.svg";
import downloadLight from "../../assets/Gateways/Downlaod-light.svg";
import fullScreen from "../../assets/Gateways/fullScreen.svg";
import map from "../../assets/Gateways/map.svg";
import refresh from "../../assets/Gateways/Refresh.svg";
import table from "../../assets/Gateways/Table.svg";
import upload from "../../assets/Gateways/Upload.svg";
import deleteIcon from "../../assets/Gateways/Delete.svg";
import CreateGateway from "./CreateGateway";
import { useState, useEffect } from "react";
import callGetAllGatewaysApi from "../../api/getAllGateways";
/* eslint-disable */
const Gateways = () => {
  const [showCreateGateWay, setShowCreateGateway] = useState(false);

  const handleAddGateway = () => {
    setShowCreateGateway(!showCreateGateWay);
  };

  const [allGateways, setAllGateways] = useState([]);

  useEffect(() => {
    getGateways();
  }, []);

  async function getGateways() {
    try {
      const response = await callGetAllGatewaysApi();
      console.log("Response");

      console.log(response.data);

      setAllGateways(response?.data);
    } catch (error: any) {
      alert(error.message);
    }
    console.log("Array");

    console.log(allGateways);
  }

  return (
    <>
      {showCreateGateWay && (
        <CreateGateway
          handleAddGateway={handleAddGateway}
          getGateways={getGateways}
        />
      )}
      <div className="top">
        <h3 className="main-heading">Gateways</h3>
        <div className="action-buttons">
          <img src={fullScreen} alt="" />
          <img src={upload} alt="" />
          <img src={downloadDark} alt="" />
          <img src={refresh} alt="" />
          <img src={table} alt="" />
          <img src={map} alt="" />
        </div>
        <div className="add-gateways" onClick={handleAddGateway}>
          <span className="add-btn">➕</span>
        </div>
      </div>

      <div className="list-of-gateways">
        {allGateways.map((cur: any) => {
          return (
            <div className="gateways">
              <h1 className="gateway-name">{cur.name}</h1>
              <hr />
              <h4>Jul 28, 2022, 13:13</h4>
              <h4>Variables : 7</h4>
              <h4>Devices: {cur.connectedDevices}</h4>
              <div className="action-buttons-in-gateways">
                <div className="action-button-wrapper">
                  <img src={downloadLight} alt="download button" />
                </div>
                <div className="action-button-wrapper">
                  <img src={deleteIcon} alt="Delete gateway" />
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="gateways">
          <h1 className="gateway-name">Gas Meter</h1>
          <hr />
          <h4>Jul 28, 2022, 13:13</h4>
          <h4>Variables : 7</h4>
          <h4>Devices : 3</h4>
          <div className="action-buttons-in-gateways">
            <div className="action-button-wrapper">
              <img src={downloadLight} alt="download button" />
            </div>
            <div className="action-button-wrapper">
              <img src={deleteIcon} alt="Delete gateway" />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Gateways;
