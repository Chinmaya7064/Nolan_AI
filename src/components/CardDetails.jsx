import {
    ImageIcon,
    FileTextIcon,
    LayoutIcon,
    ClockIcon,
    MonitorIcon,
    FileIcon,
    SearchIcon,
    FileSpreadsheetIcon,
  } from "lucide-react";
  import React from "react";
  import { useNavigate } from 'react-router-dom';
  
  const styles = {
    container: {
      minHeight: "100vh",
    //backgroundColor: "#111827",
      backgroundColor: "#2b456b1f",
      color: "#fff",
    },
    headerContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    main: {
      padding: "2rem 1.5rem",
    },
    grid: {
      display: "flex",
      justifyContent: 'center'
    },
    imageContainer: {
      border: "1px solid #1F2937",
      borderRadius: "0.5rem",
      padding: "1.5rem",
      width: '30rem'
    },
    imagePlaceholder: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "12rem",
      width: "30rem",
      backgroundColor: "#1F2937",
      borderRadius: "0.5rem",
      marginBottom: "1rem",
    },
    buttonGroup: {
      display: "flex",
      justifyContent: 'center',
      gap: "1rem",
    },
    blueButton: {
      color: "#60A5FA",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      background: "none",
      border: "none",
      cursor: "pointer",
    },
    centerSection: {
      marginTop: "4rem",
      textAlign: "center",
    },
    iconCircle: {
      display: "inline-block",
      padding: "1.5rem",
      borderRadius: "9999px",
      backgroundColor: "#1F2937",
      marginBottom: "1.5rem",
    },
    description: {
      color: "#000",
      marginBottom: "2rem",
    },
    buttonGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "1rem",
      maxWidth: "48rem",
      margin: "0 auto",
    },
    featureButton: {
      backgroundColor: "#2563EB",
      padding: "0.75rem 1.5rem",
      borderRadius: "9999px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      border: "none",
      color: "#fff",
      cursor: "pointer",
    },
    fullWidthButton: {
      gridColumn: "1 / -1",
    },
  };


  
  export default function Dashboard() {

    const navigate = useNavigate();

    const handleCardClick = () => {
      navigate('/script');
    };
    
    return (
      <div style={styles.container}>  
        <main style={styles.main}>
          <div style={styles.grid}>
            <div style={styles.imageContainer}>
              <div style={styles.imagePlaceholder}>
                <ImageIcon style={{ height: "3rem", width: "3rem", color: "#4B5563" }} />
              </div>
              <div style={styles.buttonGroup}>
                <button style={styles.blueButton}>
                  <span>Generate Cover</span>
                </button>
                <button style={styles.blueButton}>
                  <span>Upload Cover</span>
                </button>
              </div>
            </div>  
          </div>
  
          <div style={styles.centerSection}>
            <div style={styles.iconCircle}>
              <FileTextIcon style={{ height: "2rem", width: "2rem", color: "#60A5FA" }} />
            </div>

            <p style={styles.description}>What's your first move? Select a feature to kick off your project.</p>
  
            <div style={styles.buttonGrid}>
              <button style={styles.featureButton} onClick={handleCardClick}>
                <FileTextIcon style={{ height: "1.25rem", width: "1.25rem" }} />
                <span>Screenplay</span>
              </button>
              <button style={styles.featureButton}>
                <LayoutIcon style={{ height: "1.25rem", width: "1.25rem" }} />
                <span>Breakdown</span>
              </button>
              <button style={styles.featureButton}>
                <ClockIcon style={{ height: "1.25rem", width: "1.25rem" }} />
                <span>Scheduling</span>
              </button>
              <button style={styles.featureButton}>
                <MonitorIcon style={{ height: "1.25rem", width: "1.25rem" }} />
                <span>Storyboard</span>
              </button>
              <button style={styles.featureButton}>
                <FileIcon style={{ height: "1.25rem", width: "1.25rem" }} />
                <span>Deck</span>
              </button>
              <button style={styles.featureButton}>
                <SearchIcon style={{ height: "1.25rem", width: "1.25rem" }} />
                <span>Plot Hole</span>
              </button>
              <button style={{ ...styles.featureButton, ...styles.fullWidthButton }}>
                <FileSpreadsheetIcon style={{ height: "1.25rem", width: "1.25rem" }} />
                <span>Script Coverage</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }
  