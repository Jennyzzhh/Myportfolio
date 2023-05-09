import React, {useState} from 'react';
import NavTabs from './NavTabs';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact'
import Footer from './footer.js';

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.

export default function PortfolioContainer(){
    const [currentPage,setCurrentPage] = useState('About')

    const renderPage = () => {

        if (currentPage === 'About') {
            return <About/>;
        }
        if (currentPage === 'Resume') {
            return <Resume/>;
        }
        if (currentPage === 'Contact') {
            return <Contact/>;
        }
        return <Portfolio/>;
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer/>
        </div>
    )
};
