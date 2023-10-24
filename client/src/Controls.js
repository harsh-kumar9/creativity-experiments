import React from "react";
import { useNavigate } from 'react-router-dom';

const Controls = () => {
    const navigate = useNavigate();
    
    const handleAbsentClick = () => {
    // Redirect to the "/search" route
    navigate('/Absent')
  };

    const handleGenerateClick = () => {
    // Redirect to the "/search" route
    navigate('/Generate')
  };

    const handleRefineClick = () => {
    // Redirect to the "/search" route
    navigate('/Refine')
  };

  return (<h1>Controls</h1>);
}

export default Controls;