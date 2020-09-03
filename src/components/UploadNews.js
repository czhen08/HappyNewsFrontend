import React from 'react';
import './News.css';
import "antd/dist/antd.css";
import IMG from './news.png'
import { Layout, Typography, Col, Row, Button, Input } from 'antd';

const { Header, Content, Footer } = Layout;
const { TextArea } = Input;
const { Title } = Typography;
const backendUrl = "http://127.0.0.1:5000/upload-news?url=";


class UploadNews extends React.Component {

  constructor(props) {
    super(props);
    this.state = { article:{}, prediction:0};
  }

  predictSentiment(news,index){
    var posInput = document.getElementById("positiveInput"+index);
    fetch(backendUrl+news)
    .then(res => res.json())
    .then((data) => { 
      this.setState({ posDict: data })
      this.posDict[index] = data['response']['positive'];
      posInput.value = this.posDict[index];
    })
    .catch(console.log);
  }

  uploadNews(){
    var input_url = document.getElementById("input").value;
    console.log(input_url)
    this.setState({ url: input_url })
    fetch(backendUrl+input_url)
    .then(res => res.json())
    .then((data) => { 
      this.setState({ article: data['response']['article'], prediction:data['response']['prediction']})
      console.log(data)
    })
    .catch(console.log);
  }


  render() {
    return (
    <Layout>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }}> 
      <Title level={3} >
        <div style={{ textAlign: 'center', marginTop: '1%' }}>Upload News</div>
      </Title>
      </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        <Row>
        <Col span={12}>
          <Input id="input" placeholder="Input URL here" />
        </Col>
        <Col span={6}>
        <Button type="primary" id="upload" onClick={()=> this.uploadNews()}>Upload</Button>
        </Col>
        </Row>
        <Row style={{marginTop: 20}}>
          <Col span={8}>
          <div style={{height: 187}}>
          <a href={this.state.article.url} ><img style={{width:'auto', height:'auto', maxWidth: '100%', maxHeight: '100%'}} alt="img" src={this.state.article.image_url || IMG} /></a>
          </div>
          </Col>
          <Col span={10}>
          <TextArea className="news-content" rows={8} id={"prediction"} value={this.state.prediction} style={{ resize:'none', overflow: 'overlay' }}/>
          </Col>
        </Row>
        <Row style={{marginTop: 5}}>
          <Col span={18}><TextArea placeholder="title" className="news-title" rows={1} value={this.state.article.title} style={{ fontWeight:'bold',resize:'none', overflow: 'overlay' }}/></Col>
        </Row>
        <Row>
          <Col span={18}><TextArea placeholder="body" className="news-content" rows={10} value= {this.state.article.content} style={{resize:'none', overflowY: 'overlay' }}/></Col>
        </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>HappyNews ©2020 MSc Individual Project</Footer>
    </Layout>
  </Layout>
    );
  }
}

export default UploadNews;
