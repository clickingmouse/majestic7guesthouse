import React, { Component, useState } from "react";
import { Button, Modal, Form, Label, Input, FormLabel } from "react-bootstrap";
import AppIconPreview from "./AppIconPreview";
import { connect } from "react-redux";
import { addApp } from "../../../redux/actions/appActions";
//import {addApp} from '../..'
//import uuid from "uuid";
import PropTypes from "prop-types";
const AppModal = props => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [app, setApp] = useState({
    name: "",
    description: "",
    //   icon: null,
    logiFile: null,
    fileBuffer: null
    //    filename: "",
    //    mimetype: ""
  });

  // const [file, setFile]= useState({
  //   file:null,
  //   fileBuffer:null,
  //   filename:"",
  //   mimetype:""
  // })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = e => {
    //    setName({ [e.targe.name]: e.target.value });
    console.log("itemHandleChange");
    setName(e.target.value);
    setApp({ ...app, [e.target.name]: e.target.value });
    console.log("---===>", app);
  };

  const handleFile = e => {
    console.log("handleFile");
    console.log(e.target.files[0]);
    //
    console.log(e.target.files[0]);
    let reader = new FileReader();
    let icon = e.target.files[0];
    let file = e.target.files[0];

    reader.onloadend = () => {
      setApp({
        ...app,
        logoFile: file,
        fileBuffer: reader.result
      });
    };
    reader.readAsDataURL(file);

    //
    // setApp({
    //   ...app,
    //   icon: icon
    // });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("XXX");
    //dyanamic author later
    const newApp = {
      //id: uuid(),
      appName: app.name,
      appDescription: app.description,
      logoFile: app.logoFile,
      //logo: {
      filename: app.logoFile.name,
      mimetype: app.logoFile.type,
      authorName: props.user.name,
      authorID: props.user.id
      //        fileBuffer: app.fileBuffer,
      //suggestedBy: "Majestic7"
      //}
    };
    console.log("state-->", app);
    console.log("insering -->", newApp);
    //axios.post("/api/app", newApp)
    // add item via addApp action
    props.addApp(newApp);
    // close model
    handleClose();

    //   <Button
    //   variant="primary"
    //   onClick={handleShow}
    //   style={{ marginBottom: "2rem" }}
    // >
    //   Suggest an App
    // </Button>
  };
  return (
    <>
      {props.isAuthenticated ? (
        <Button
          variant="primary"
          onClick={handleShow}
          style={{ marginBottom: "2rem" }}
        >
          SUGGEST APP
        </Button>
      ) : (
        <h4 className="mb-3 ml-4">Please login to sugest an app</h4>
      )}

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={onSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Suggest an App</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Suggest a good app to use when visitin Hong Kong
            <Form.Group controlId="formAppName">
              <Form.Label>Add Suggestion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter item to add"
                onChange={handleChange}
                name="name"
              />
              <Form.Text className="text-muted">App Name....</Form.Text>
            </Form.Group>
            <Form.Group controlId="formAppIcon">
              <Form.Label>App Icon</Form.Label>
              <Form.Control type="file" onChange={handleFile} name="icon" />
              <Form.Text className="text-muted">upload App icon</Form.Text>
            </Form.Group>
            <AppIconPreview icon={app} />
            <Form.Group controlId="formAppDescription">
              <Form.Label>Add Suggestion</Form.Label>
              <Form.Control
                as="textArea"
                rows="5"
                type="text"
                placeholder="What makes it awesome?"
                onChange={handleChange}
                name="description"
              />
              <Form.Text className="text-muted">Describe the app</Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Add Item
            </Button>
          </Modal.Footer>{" "}
        </Form>
      </Modal>
    </>
  );
};

AppModal.propTypes = {
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
  item: state.item,
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated
});
const mapDispatchToProps = dispatch => {
  return {
    addApp: app => {
      dispatch(addApp(app));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppModal);

//export default AppModal;
