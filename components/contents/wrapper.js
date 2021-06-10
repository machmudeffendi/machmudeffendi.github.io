import Sidebar from '../utils/sidebar'
import Content from '../utils/content'

export default function Wrapper({children}){
    return (
        <main>
            <Sidebar/>
            <Content>
                {children}
            </Content>
        </main>
    )
}