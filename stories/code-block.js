'use strict';

var React = require('react');
var Highlight  = require('react-hljs');

var CodeBlock = React.createClass({
    displayName: 'CodeBlock',
    propTypes: {
        literal: React.PropTypes.string,
        language: React.PropTypes.string
    },

    componentDidMount: function() {
        this.highlightCode();
    },

    componentDidUpdate: function() {
        this.highlightCode();
    },

    highlightCode: function() {
        // hljs.highlightBlock(this.refs.code);
    },

    render: function() {
        return (
            <Highlight className='ltcrm-code-js'>
                <code ref="code" className={this.props.language}>{this.props.literal}</code>
            </Highlight>
        );
    }
});

module.exports = React.createFactory(CodeBlock);
