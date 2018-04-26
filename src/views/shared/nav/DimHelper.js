import React, { Component } from 'react'

//here merge layout and component props

class DimHelper extends Component {

    //componentWillMount(){
	//	const { setTitle } = this.props
	//	setTitle && setTitle('Publica y comparte tus documentos - uDocz')
    //}

    render() {
        const { isMobile } = this.props
        return (
                { isMobile ? this.props.optionA : this.props.optionB }
        );
    }

}

export default DimHelper;