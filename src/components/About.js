import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#264362',
        backgroundColor: props.mode === 'dark' ? '#264362': 'white'
    }

    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3' style={{color: props.mode==='dark'?'white':'#264362'}}>About Us</h1>
            <div id="accordion">
                <div className="card">
                    <div className="card-header" style={myStyle}>
                        <a className="card-link" style={myStyle} data-toggle="collapse" href="#collapseOne">
                            <strong>What Does It Do?</strong>
                        </a>
                    </div>
                    <div id="collapseOne" className="collapse show" data-parent="#accordion">
                        <div className="card-body" style={myStyle}>
                            <i>TextUtils is a Utility used to analyze your text. You can use it to count words and characters, copy ypur text and also to convert your text to uppercase , lowercase , titlecase. TextUtils reads out your text and also has the facility of voice input.</i>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" style={myStyle}>
                        <a className="collapsed card-link" style={myStyle} data-toggle="collapse" href="#collapseTwo">
                            <strong>How To Use??</strong>
                        </a>
                    </div>
                    <div id="collapseTwo" className="collapse show" data-parent="#accordion">
                        <div className="card-body" style={myStyle}>
                            <i>Enter your text in the given textarea.To convert it into uppercase click on the <strong>UPPERCASE Button</strong>, for lowercase click on the <strong>lowercase Button</strong>, for capitalizing the first letter of each word click on the <strong>TitleCase Button</strong>, copy your text using the <strong>Copy Text Button</strong>, to remove the whole text click on <strong>CLEAR Button</strong>.The <strong>Read Out Button</strong> reads the whole paragraph. For voice input click on the <strong>Talk To Type Button</strong>.</i>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" style={myStyle}>
                        <a className="collapsed card-link" style={myStyle} data-toggle="collapse" href="#collapseThree">
                            <strong>Browser Compatibility</strong>
                        </a>
                    </div>
                    <div id="collapseThree" className="collapse show" data-parent="#accordion">
                        <div className="card-body" style={myStyle}>
                            <i>This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
