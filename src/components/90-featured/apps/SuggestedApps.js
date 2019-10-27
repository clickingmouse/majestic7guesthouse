import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Card, CardColumns, Container, Col, Row } from "react-bootstrap";
import { getApps, deleteApp } from "../../../redux/actions/appActions";

import AppCard from "./AppCard";
import hkg from "../../../media/apps/hkgMyFlight.png";
import mtrc from "../../../media/apps/mtr.png";
import openRice from "../../../media/apps/openRice.png";
import hkMyGuide from "../../../media/apps/hkMyGuide.png";
import hkTaxi from "../../../media/apps/hkTaxi.png";
import gogoVan from "../../../media/apps/gogoVan.png";
import lalaMove from "../../../media/apps/lalaMove.png";
import AppModal from "./AppModal";
function SuggestedApps(props) {
  //should be an array
  const [apps, setApps] = useState([]);

  useEffect(() => {
    console.log("loading suggested apps");
    props.getApps();

    console.log(props);
  }, []);

  return (
    <Container>
      <h5 className="block">SuggestedApps</h5>
      <Row>
        <Col sm={9}>
          <CardColumns>
            {props.apps.apps.map(
              ({
                _id,
                appName,
                appDescription,
                authorName,
                authorID,
                logoFileID
              }) => (
                <span>
                  <br />
                  <AppCard
                    icon={`/api/apps/image/${logoFileID}`}
                    title={appName}
                    descr={appDescription}
                    author={authorName}
                    authorID={authorID}
                    _id={_id}
                  />
                </span>
              )
            )}
          </CardColumns>
        </Col>

        <Col sm={3}>
          <AppModal />
          <h3>Featured Apps</h3>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => ({
  apps: state.app
});
const mapDispatchToProps = () => dispatch => {
  return {
    getApps: () => dispatch(getApps()),
    deleteApp: () => dispatch(deleteApp())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuggestedApps);
