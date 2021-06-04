import React from 'react'
import PropTypes from 'prop-types'
// import "../MyComponents/footer.css" // make the full background red

export default function Footer(props) {
    let footerStyle = {
        position: "sticky",
        width: "100%",
        bottom: "0px",
        marginTop: "70px",
        backgroundColor:"red",
        // border: "2px solid red"
    }
    return (
        <footer className = 'bg-dark text-light py-3' style={footerStyle}>
            <p className="text-center">
                Copyright &copy; MytodosList.com
            </p>
        </footer>
    )
}

Footer.propTypes = {

}

