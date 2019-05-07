import * as React from 'react'
import {
    Layout, Menu, Breadcrumb, Icon
} from 'antd';
import { Route, Switch, Link } from 'react-router-dom';
import "./main.css";
import userList from '@/view/userManagement/userList';
import addUser from '@/view/userManagement/addUser';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


interface Location {
    pathname: string,
}
interface MainProps {
    title?: string,
    location: Location
}
interface MainState {
    name?: string,
    currentPathName: string
}

class Main extends React.Component<MainProps, MainState> {
    public state: MainState = {
        name: "state",
        currentPathName: ""
    }
    // constructor(props: MainProps, state: MainState) {
    //     super(props, state);
    // };

    public componentDidMount() {
        this.setState({
            currentPathName: this.props.location.pathname
        })
        // this.state.currentPathName=this.props.location.pathname;
    }
    public itemOnclick(item: any) {
        console.log(item);
        this.setState({
            currentPathName: item.key
        })
    }
    public render() {
        const { currentPathName } = this.state;
        return (<Layout>
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1"><Link to="/main/userList" className="container">nav</Link></Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['/main/userList']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                            <Menu.Item key="/main/userList" onClick={(item) => this.itemOnclick(item)}><Link to="/main/userList">用户列表</Link></Menu.Item>
                            <Menu.Item key="/main/addUser" onClick={(item) => this.itemOnclick(item)}><Link to="/main/addUser">添加用户</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/main/addUsers">test</Link></Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{
                        background: '#fff', padding: 24, margin: 0, minHeight: 280,
                    }}
                    >
                        <Switch>
                            <Route path="/main/userList" component={userList} />
                            <Route path="/main/addUser" component={addUser} />
                        </Switch>

                    </Content>
                </Layout>
            </Layout>
        </Layout>
        )
    }
}

export default Main;