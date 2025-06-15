import Header from '../Components/Header.jsx'
import Nav from '../Components/Nav.jsx'
import Footer from '../Components/Footer.jsx'

function Home(){

    return(
        <>
            <Header/><hr/>
            <Nav/><br/><br/>
            <main>
                <figure>
                    <img src="img/student.jpg" alt="Picture of Deborah Shaw" />
                </figure><br/>
                <div>
                    Hello! <br/>
                    <p>I'm Deborah Shaw — a passionate software engineer dedicated to building thoughtful, user-friendly digital experiences.</p>
                    <p>My journey into tech has been driven by curiosity, a love for learning, and a desire to solve real-world problems.</p>
                    <p>Whether I’m debugging complex code or designing interfaces, I strive to create software that’s both elegant and impactful.</p>
                    <p>Feel free to explore my projects, browse my skillset, and connect with me if you'd like to collaborate or just say hello!</p>
                    <br/><br/>
                    <em>"Success is not final, failure is not fatal: It is the <strong>courage</strong> to continue that counts."</em><br/>
                    - Winston Churchill
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Home