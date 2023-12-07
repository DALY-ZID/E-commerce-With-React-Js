import React from 'react'

export default function Footer() {
    return (
        <div>
            <p className="text-center" style={ FooterStyle }>Designed & coded by <a href="https://www.instagram.com/mohamed_ali_zid/" target="_blank" rel="noopener noreferrer">DALY ZID</a></p>
        </div>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    bottom: 0,
    padding: "1rem",
    marginTop: "3rem",
    marginBottom: 0,
    width: "100%",
    opacity: ".5"
}
