const SocialBadge = ({ img, name, link }) => {
    return (
      <div
        onClick={() => window.location.href = link} // Redirect on click
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#212121", // Dark background
          color: "white", // Text color
          borderRadius: "20px", // Rounded edges
          padding: "8px 12px", // Padding around content
          fontSize: "14px", // Text size
          fontWeight: "500", // Slightly bold
          cursor: "pointer", // Pointer cursor to indicate interactivity
        }}
      >
        <img
          src={img}
          alt={name}
          style={{
            width: "25px",
            height: "25px",
            marginRight: "8px", // Space between icon and text
          }}
        />
        <span>{name}</span>
      </div>
    );
  };
  
  export default SocialBadge;
  