import React from 'react';
import {Row, Col} from 'react-bootstrap';

/**
 * Creates page section component
 */

const PageSection = ({title, children}) => {
    return (
        <Row className="page-section">
            <Col md={12}>
                <div className="section-header">
                    <strong>{title}</strong>
                </div>
                <div className="section-body">
                    {children}
                </div>
            </Col>
        </Row>
    );
};

PageSection.propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.node
};

export default PageSection;
