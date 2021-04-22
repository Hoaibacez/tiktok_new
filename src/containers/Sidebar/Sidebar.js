import { useState, useEffect } from 'react'
import axios from "axios";
import Accounts from "../../entites/Account";

import MainSidebarComponent from '../../components/MainSidebar'

function Sidebar() {
    const [isCollapse, setIsCollapse] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    const [sugestAcount, setSugestAcount] = useState([]);
    const [pagination, setPagination] = useState({
        total: 0,
        perPage: 0,
        currentPage: 1,
        totalPages: 0
    });
    
    useEffect(() => {
        axios
          .get(`/api/users/suggested?page=${pagination.currentPage}`)
          .then(({ data }) => {
            const accounts = data.data.map((account) => new Accounts(account));
            setSugestAcount(sugestAcount.concat(accounts));
            setPagination({
                total: data.meta.pagination.total,
                currentPage: data.meta.pagination.current_page,
                totalPages: data.meta.pagination.total_pages,
                perPage: data.meta.pagination.per_page,
            })
            if (pagination.currentPage  === pagination.totalPages) {
                setIsCollapse(!isCollapse)
            }

          })
          .catch((e) => {
            console.log(e)
          })    
    }, [pagination.currentPage])
      
    const handleLogin = () => {
        alert("XU LY LOGIN")
      }

    const handleSeeToggle = () => {
        if (pagination.currentPage === pagination.totalPages) {
            setIsExpanded(!isExpanded)
            setIsCollapse(!isCollapse)
        }

        if (pagination.currentPage < pagination.totalPages) {
            setPagination(prevState => ({
                ...prevState,
                currentPage: prevState.currentPage + 1
            }))
        }
    }

    const collapsedHeight = isExpanded ? pagination.perPage * 64 : pagination.currentPage*(pagination.perPage * 64)
    // console.log(pagination);

    return (
        <MainSidebarComponent 
            onLogin={handleLogin}
            // isExpanded={isExpanded} 
            isCollapse={isCollapse} 
            collapsedHeight={collapsedHeight}
            onSeeToggle={handleSeeToggle}
            data={sugestAcount}
        />
    )
}

export default Sidebar