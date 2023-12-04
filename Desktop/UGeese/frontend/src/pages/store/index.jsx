import { GooseAvatar } from "../../shared/Avatars";
import { Alert, Avatar, Card } from 'antd';
import './index.css'
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Modal from "./Modal";
import { useState } from "react";
const { Meta } = Card;

export default function Store() {
    const [modal, setModal] = useState(false)
    return (
        <div className="store">
            <h1>Store</h1>
            <div className="store_cards">
                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://static.riverbender.com/media/7272322724-Cybertruck1.jpg"
                            style={{height:180}}
                        />
                    }
                    actions={[
                        <ShoppingCartOutlined key="setting" onClick={()=>setModal(true)}/>,
                        <EyeOutlined key="edit" />
                    ]}
                >
                    <Meta
                        // avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                        title="Hyndai"
                        description="500 coins"
                    />
                </Card>
                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            style={{height:180}}
                        />
                    }
                    actions={[
                        <ShoppingCartOutlined key="setting" onClick={()=>setModal(true)}/>,
                        <EyeOutlined key="edit" />
                    ]}
                >
                    <Meta
                        // avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                        title="Designer"
                        description="100 coins"
                    />
                </Card>
                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/legacy_blog/Pair_of_socks_575.jpg"
                            style={{height:180}}

                        />
                    }
                    actions={[
                        <ShoppingCartOutlined key="setting" onClick={()=>setModal(true)}/>,
                        <EyeOutlined key="edit" />
                    ]}
                >
                    <Meta
                        // avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                        title="Cool old socks"
                        description="200 coins"
                    />
                </Card>
                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://static.ca-news.org/upload/ennews/5/672915.1656673666.b.jpg"
                            style={{height:180}}

                        />
                    }
                    actions={[
                        <ShoppingCartOutlined key="setting" onClick={()=>setModal(true)}/>,
                        <EyeOutlined key="edit" />
                    ]}
                >
                    <Meta
                        // avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                        title="Some old guy"
                        description="500 coins"
                    />
                </Card>
                <Modal onClose={()=>setModal(false)} open={modal}/>
            </div>
            {/* <GooseAvatar name={'designer'} /> */}
        </div>
    )
}