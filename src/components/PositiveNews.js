import React from 'react';
import './News.css';
import "antd/dist/antd.css";
import IMG from './news.png'
import { Layout, Typography, Card, Row, Input, List, Select } from 'antd';

const { Option } = Select;
const { Header, Content, Footer } = Layout;
const { TextArea } = Input;
const { Title } = Typography;
const { Meta } = Card;
const backendUrl = "http://127.0.0.1:5000/predict?sentence=";

export async function getNews(outlet) {
  let result = await fetch("http://127.0.0.1:5000/positive-news?outlet=" + outlet).then(response => response.json());
  return result;
}

class PositiveNews extends React.Component {

  constructor(props) {
    super(props);
    this.state = { articles: [], _isMounted: false, outlet: "BBC" };
    this.fetchNews = this.fetchNews.bind(this);
    this.posDict = {};
    this.negDict = {};
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

  onChange= value => {
    this.setState({outlet: value}, () => {
      console.log('new: ' + this.state.outlet);
      this.fetchNews();
      console.log('finish')
    }); 
  }

  render() {
    return (
      <Layout>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Title level={3} >
              <div style={{ textAlign: 'center', marginTop: '1%' }}>Positive News Articles</div>
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
                  grid={{ gutter: 16, column: 3 }}
                  dataSource={this.state.articles}
                  renderItem={(item, index) => (
                    <List.Item>
                      <Card hoverable style={{ width: 310, height: 420 }}
                        cover={
                          <a href={item.url} >
                            <img style={{ width: 310, height: 180 }} alt="img" src={item.image_url || IMG} />
                          </a>
                        }
                      >
                        <Meta
                          title={[
                            <TextArea className="news-title" rows={2} value={item.title} style={{ fontWeight: 'bold', resize: 'none', border: 'none', overflow: 'overlay' }} />
                          ]}
                          description={[
                            <TextArea className="news-content" rows={6} value={item.content || 'Read More..'} style={{ resize: 'none', width: '101%', overflowY: 'overlay' }} />,
                          ]}
                        />
                      </Card>
                    </List.Item>
                  )} />
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>HappyNews ©2020 MSc Individual Project</Footer>
        </Layout>
      </Layout>
    );
  }
}



export default PositiveNews;
