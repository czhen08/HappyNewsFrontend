import React from 'react';
import './PredictNews.css';
import "antd/dist/antd.css";
import IMG from './news.png'
import { Layout, Typography, Col, Row, Button, Input, Space, List, Select } from 'antd';

const { Option } = Select;
const { Header, Content, Footer } = Layout;
const { TextArea } = Input;
const { Title } = Typography;
const backendUrl = "http://127.0.0.1:5000/predict?article=";

export async function getNews(outlet) {
    let result = await fetch("http://127.0.0.1:5000/news?outlet=" + outlet).then(response => response.json());
    return result;
  }

class PredictNews extends React.Component {

  constructor(props) {
    super(props);
    this.state = { articles: [], _isMounted: false, outlet: "BBC" };
    this.fetchNews = this.fetchNews.bind(this);
    this.posDict = {};
  }

  componentDidMount() {
    this.fetchNews();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchNews() {
    getNews(this.state.outlet)
      .then(news => this.setState({ articles: news }));
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

  onChange= value => {
    this.setState({outlet: value}, () => {
      this.posDict = {};
      this.negDict = {};  
      console.log('new: ' + this.state.outlet);
      this.fetchNews();
      console.log('finish');
    }); 
  }

  render() {
    return (
    <Layout>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }}> 
      <Title level={3} >
        <div style={{ textAlign: 'center', marginTop: '1%' }}>Predict News Sentiment</div>
      </Title>
      </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        <Row style={{ marginBottom: 20 }}>
            <div style={{ width: 200, fontWeight:'bold', textAlign: 'center', fontSize:'17px'}}> Select a news outlet: </div>
            <Select
                  defaultValue="BBC"
                  showSearch
                  style={{ width: 200 }}
                  optionFilterProp="children"
                  onChange={this.onChange}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="BBC">BBC</Option>
                  <Option value="DailyMail">DailyMail</Option>
                  <Option value="Guardian">Guardian</Option>
                  <Option value="Metro">Metro</Option>
                  <Option value="Mirror">Mirror</Option>
                  <Option value="Reuters">Reuters</Option>
                  <Option value="Sun">Sun</Option>
                  <Option value="Independent">Independent</Option>
            </Select>
        </Row>
        <Row>
          <List
            grid={{ gutter: [0,16]}}
            dataSource={this.state.articles}
            renderItem={(item,index) => (
            <List.Item>
              <Row gutter={[16, 16]} style={{height: 180, border: '2px solid #A9A9A9'}}>
              <Col span={6}>
                <a href={item.url} >
                    <img style={{ maxWidth: '100%', maxHeight: '95%' }} alt="img" src={item.image_url || IMG} />
                </a>
              </Col>
              <Col span={12}>
              <Row>
              <TextArea className="news-title" rows={1} value={item.title} style={{ fontWeight:'bold',resize:'none', overflow: 'overlay' }}/>
              </Row>
              <Row>
              <TextArea className="news-content" rows={5} value= {item.content + '\n' + item.url || 'Read More..'} style={{resize:'none', overflowY: 'overlay' }}/>
              </Row>
              </Col>
              <Col span={6}>
              <Space direction="vertical">
              <Row><Button type="primary" id="predict" onClick={()=> this.predictSentiment(item.content, index)}>Predict</Button></Row>
              <Row>
                <TextArea className="news-content" rows={4} id={"positiveInput"+index} value={this.posDict[index]} style={{ resize:'none', overflow: 'overlay' }}/>
              </Row>
              </Space>
            </Col>
            </Row>
            </List.Item>
          )}/> 
        </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>HappyNews ©2020 MSc Individual Project</Footer>
    </Layout>
  </Layout>
    );
  }
}

export default PredictNews;
