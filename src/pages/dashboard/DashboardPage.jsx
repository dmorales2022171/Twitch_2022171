import { useEffect } from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useChannels, useUserDetails } from "../../shared/hooks";
import { Content } from "../../components/dashboard/Content";
import { Sidebar } from "../../components/navbars/Sidebar";
import './dashboardPage.css'



export const DashboardPage = () => {
  
  const {getChannels, allChannels, isFectching, followedChannels} = useChannels()
  const {isLogged} = useUserDetails()

  useEffect(() => {
    getChannels(isLogged)
  }, [])

  if(isFectching){
    <LoadingSpinner/>
  }



  return (
    <div className="dashboard-container">
      <Navbar/>
      <Sidebar channels={followedChannels || []} />  
      <Content channels={allChannels} getChannels={getChannels}/>
      </div>
  );
}

