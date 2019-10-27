import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";

//actions
import { deleteApp } from "../../../redux/actions/appActions";

function AppCard(props) {
  // <img src={props.icon} width="140" />
  console.log(props);
  const onDeleteClick = id => {
    props.deleteApp(id);
  };
  console.log(props.authorID);
  console.log(props.user);
  return (
    <Card>
      <Card.Img variant="top" src={props.icon} className="p-4" />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.descr}</Card.Text>

        <Card.Footer>Suggested By: {props.author}</Card.Footer>
        {props.isAuthenticated ? (
          props.authorID == props.user.id ? (
            <Button
              block
              variant="danger"
              className="remove-btn"
              color="danger"
              size="sm"
              onClick={
                onDeleteClick.bind(this, props._id)
                //() => {
                // this.setState(state=>({
                // items: state.items.filter(item => item.id!==id )}))
                //*
                //   setItems(items => items.filter(item => item.id !== id));
                // }
              }
            >
              DELETE
            </Button>
          ) : null
        ) : null}
      </Card.Body>
    </Card>
  );
}

const mapStateToProps = state => ({
  apps: state.app,
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated
});
const mapDispatchToProps = () => dispatch => {
  return {
    deleteApp: id => dispatch(deleteApp(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppCard);
