// AppStyles.js
export const appContainerStyles = {
    backgroundImage: 'url("/images/background.jpg")', // Adjust the path based on your project structure
    backgroundSize: 'cover',
    backgroundPosition: 'center', // Center the background image
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  
  export const containerStyles = {
    fontFamily: 'Arial, sans-serif', // Replace with your desired font-family
    maxWidth: '400px',
    width: 'auto',
    color: 'white',
    marginTop: '100px',
    padding: '80px 50px 50px 50px',
    background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(193,22,240,1) 100%)',
    borderRadius: '10px',
    marginBottom: '100px',
  };
  
  export const logoStyles = {
    maxWidth: '40%',
    height: 'auto',
    marginBottom: '0px',
    borderRadius: '50%', 
    overflow: 'hidden', 
    marginTop: '-50px' ,
  };

  export const formStyles = {
    maxWidth: '100px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white', // Add a background color to the form for better readability
  };
  
  export const inputStyles = {
    width: '100%',
    marginBottom: '15px', // Adjust the margin-bottom value to add space
    padding: '15px',
    boxSizing: 'border-box',
    borderRadius: '10px',
  };
  
  export const labelStyles = {
    textAlign: 'left',  // Set text alignment to left
    marginBottom: '5px', // Adjust margin as needed
    display: 'block',   // Ensure the labels are displayed as block elements
  };

  export const buttonStyles = {
    backgroundColor: '#8311e6', // Choose your desired color
    color: 'white',
    padding: '15px',
    border: '1px solid white',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s', // Add a smooth transition effect for hover
    width: '100%', //
    
    // Hover effect
    ':hover': {
        backgroundColor: '#0056b3', // Choose a darker shade or different color for hover
    },
};
  