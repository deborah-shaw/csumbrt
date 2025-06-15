import Header from '../Components/Header.jsx'
import Nav from '../Components/Nav.jsx'
import Footer from '../Components/Footer.jsx'

function Cst363(){

    return(
        <>
            <Header/><hr/>
            <Nav/><br/><br/>
            <div id="project">
                <h2 id="class-title">CST363 Introduction to Database Systems</h2>

                <h4>Course Description:</h4>
                <p>This course provides balanced coverage of database use and design,focusing on relational databases. Students will learn to design relational schemas, write SQL queries, access a DB programmatically,and perform database administration. Students will gain a working knowledge of the algorithms and data structures used in query evaluation and transaction processing. Students will also learn to apply newer database technologies such as XML, NoSQL, and Hadoop.</p>

                <h3>Projects</h3>

                <h4>MongoDB and Spring Boot Prescription System</h4>
                <a href="projects/cst363_MongoDB_and_Spring_Boot_project.zip"><h5>Project</h5></a>

                <h4>Design a MySQL Database for Prescription System</h4>
                <a href="projects/cst363_mysql_database_report.pdf"><h5>Report</h5></a>
                <a href="projects/cst363_mysql_database_project.zip"><h5>Project</h5></a>
            </div>
            <Footer/>
        </>
    );
}

export default Cst363