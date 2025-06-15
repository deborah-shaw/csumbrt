
function Footer(){

    return(
        <footer>
            <hr/>
            &copy;{new Date().getFullYear()} Shaw
            <br/><br/>
            <figure>
                <img src="img/csumb2.jpg" alt="Logo of CSUMB" style={{ maxWidth: "100px", maxHeight: "100px" }} />
            </figure>
        </footer>
    );
}

export default Footer