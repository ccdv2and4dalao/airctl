import * as React from 'react';
import { FunctionComponent, useCallback, useState } from 'react';
import { antd } from '../../dependency/antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import styles from './main-layout.css';
import { Link } from 'react-router-dom';
import { context } from '../../context';

export function MainLayout(C: FunctionComponent<any>) {
    const { I18nContext: i18n } = context;
    const sidebar_name = i18n.statics.global.sidebar_name;

    return function (props: any) {
        const [collapsed, setCollapsed] = useState(false);
        const swapCollapsed = useCallback(() => setCollapsed((c) => !c), []);
        return (
            <antd.Layout key="global-layout" className={styles['global-layout']}>
                <antd.Layout.Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    trigger={null}
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                    collapsible
                    collapsed={collapsed}
                    key="global-sider"
                >
                    <div className={styles['logo']}>
                        <span className={styles['logo-left']}>Air</span>
                        <span className={styles['logo-mid']}>Control</span>
                        <span className={styles['logo-right']}>Sys</span>
                    </div>
                    <antd.Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} key="global-menu">
                        <antd.Menu.Item key="overview-1">
                            <UserOutlined />
                            <Link to="/app/overview/dashboard" className="nav-text">
                                {sidebar_name.overview.dashboard}
                            </Link>
                        </antd.Menu.Item>
                        <antd.Menu.Item key="overview-2">
                            <UserOutlined />
                            <Link to="/app/overview/form" className="nav-text">
                                {sidebar_name.overview.forms}
                            </Link>
                        </antd.Menu.Item>
                        <antd.Menu.Item key="overview-3">
                            <UserOutlined />
                            <Link to="/app/overview/list" className="nav-text">
                                {sidebar_name.overview.lists}
                            </Link>
                        </antd.Menu.Item>
                        <antd.Menu.SubMenu
                            key="user"
                            title={
                                <span>
                                    <UserOutlined />
                                    <span>{sidebar_name.user.title}</span>
                                </span>
                            }
                        >
                            <antd.Menu.Item key="user-1">
                                <UserOutlined />
                                <Link to="/app/user/form/register" className="nav-text">
                                    {sidebar_name.user.register}
                                </Link>
                            </antd.Menu.Item>
                            <antd.Menu.Item key="user-2">
                                <UserOutlined />
                                <Link to="/app/user/list" className="nav-text">
                                    {sidebar_name.user.list}
                                </Link>
                            </antd.Menu.Item>
                            <antd.Menu.Item key="user-3">
                                <UserOutlined />
                                <Link to="/app/user/profile/:id" className="nav-text">
                                    {sidebar_name.user.profile}
                                </Link>
                            </antd.Menu.Item>
                            <antd.Menu.Item key="user-4">
                                <UserOutlined />
                                <Link to="/app/user/profile/:id/privilege" className="nav-text">
                                    {sidebar_name.user.privilege_control}
                                </Link>
                            </antd.Menu.Item>
                            <antd.Menu.Item key="user-5">
                                <UserOutlined />
                                <Link to="/app/user/pay/:id" className="nav-text">
                                    {sidebar_name.user.payment}
                                </Link>
                            </antd.Menu.Item>
                        </antd.Menu.SubMenu>
                        <antd.Menu.SubMenu
                            key="air"
                            title={
                                <span>
                                    <UserOutlined />
                                    <span>{sidebar_name.air.title}</span>
                                </span>
                            }
                        >
                            <antd.Menu.Item key="air-1">
                                <UserOutlined />
                                <Link to="/app/air/list" className="nav-text">
                                    {sidebar_name.air.list}
                                </Link>
                            </antd.Menu.Item>
                            <antd.Menu.Item key="air-2">
                                <UserOutlined />
                                <Link to="/app/air/inspect?aid=1" className="nav-text">
                                    {sidebar_name.air.inspect}
                                </Link>
                            </antd.Menu.Item>
                            <antd.Menu.Item key="air-3">
                                <UserOutlined />
                                <Link to="/app/air/report-repair" className="nav-text">
                                    {sidebar_name.air.report_repair}
                                </Link>
                            </antd.Menu.Item>
                        </antd.Menu.SubMenu>
                        <antd.Menu.SubMenu
                            key="room"
                            title={
                                <span>
                                    <UserOutlined />
                                    <span>{sidebar_name.room.title}</span>
                                </span>
                            }/>
                        <antd.Menu.Item key="admin-2">
                            <UserOutlined />
                            <Link to="/app/admin/resource" className="nav-text">
                                {sidebar_name.admin.resources}
                            </Link>
                        </antd.Menu.Item>
                        <antd.Menu.Item key="admin-1">
                            <UserOutlined />
                            <Link to="/app/admin/profile/1" className="nav-text">
                                {sidebar_name.admin.profile}
                            </Link>
                        </antd.Menu.Item>
                    </antd.Menu>
                </antd.Layout.Sider>
                <antd.Layout key="global-sub-layout">
                    <antd.Layout.Header className={styles['site-layout-sub-header-background']} style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: styles['trigger'],
                            onClick: swapCollapsed,
                        })}
                    </antd.Layout.Header>
                    <antd.Layout.Content style={{ margin: '24px 16px 0' }}>
                        <div className={styles['site-layout-background']} style={{ padding: 24, minHeight: 360 }}>
                            <C {...props} />
                        </div>
                    </antd.Layout.Content>
                    <antd.Layout.Footer style={{ textAlign: 'center' }}>
                        power by <a href="https://github.com/Myriad-Dreamin">Myriad Dreamin</a>, Air Control System
                        ©2020 Created by React, Ant Design
                    </antd.Layout.Footer>
                </antd.Layout>
            </antd.Layout>
        );
    };
}
