import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import emptyImage from './empty_image.png'
import patrickImage from './patricks_favorite_line_graph.png'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDownloadModal : false
    };

    this.textUpdate = this.textUpdate.bind(this);
    this.clearText = this.clearText.bind(this);
    this.openDownloadModal = this.openDownloadModal.bind(this);
    this.closeDownloadModal = this.closeDownloadModal.bind(this);
  }

  textUpdate() {
    setTimeout(function() {
      this.refs.diagramImage.src = patrickImage;
    }.bind(this), 1000);
  }

  openDownloadModal() {
    this.setState({
      showDownloadModal : true
    });
  }

  closeDownloadModal() {
    this.setState({
      showDownloadModal : false
    });
  }

  clearText() {
    this.refs.diagramImage.src = emptyImage;
    this.refs.mainTextArea.value = "";
  }

  render() {
    return (
      <div className="main-page">
        <div className="row justify-content-center ml-0 mr-0">
          <div className="pt-3 col-lg-8">
            <h1 className="pb-1" id="maintitle"> The Sentimental Image </h1>
            <h4 className="pb-2" id="subtitle"> Text-sentiment analysis using machine learning </h4>
            <p> Enter your writing into the box below and the website will draw an image based on the emotions in your writing! </p>
            <div className="row py-3 ml-0 mr-0">
              <div className="col-6 px-5">
                <Form>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enter text here:</Form.Label>
                    <Form.Control as="textarea" rows={8} onChange={this.textUpdate} ref="mainTextArea" />
                  </Form.Group>
                </Form>
                <Button className="mx-2" variant="primary" onClick={this.clearText}>Clear</Button>
                <Button className="mx-2" variant="primary">Undo</Button>
              </div>
              <div className="col-6 px-5">
                <Tabs defaultActiveKey="linear" id="figure-tabs">
                  <Tab eventKey="linear" title="Linear">
                    <Image src={emptyImage} ref="diagramImage" />
                  </Tab>
                  <Tab eventKey="abstract" title="Abstract">
                    Placeholder Abstract
                  </Tab>
                </Tabs>
                <Button className="mx-2" variant="primary" onClick={this.openDownloadModal}>Download CSV</Button>
                <Button className="mx-2" variant="primary" onClick={this.openDownloadModal}>Download Image</Button>
                <Button className="mx-2" variant="primary">Share</Button>
              </div>
            </div>
          </div>
        </div>
        <Modal show={this.state.showDownloadModal}>
          <Modal.Header closeButton>
            <Modal.Title>Download?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to download?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeDownloadModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.closeDownloadModal}>
              Download
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
