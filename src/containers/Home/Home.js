import { Row, Column } from '@mycv/mycv-grid'

function Home() {
    return (
        <Row>
            <Column size={0} sizeTablet={4} sizeDesktop={3}>
                <h1>Sibar</h1>
            </Column>

            <Column size={12} sizeTablet={8} sizeDesktop={9}>
                <h1>Content</h1>
            </Column>
        </Row>
    )
}

export default Home
