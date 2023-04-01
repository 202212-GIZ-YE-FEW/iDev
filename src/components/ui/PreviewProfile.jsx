function PreviewProfile() {
    const image_style = {
        backgroundImage: "url(/profile-icon.png)",
        backgroundSize: "cover",
        width: "315px",
        height: "315px",
        position: "absolute",
        left: "9.51%",
        right: "68.61%",
        top: "16.77%",
        bottom: "58.31%",
        // background: "cyan",
    };

    const container_icon_style = {
        width: "75px",
        height: "70px",
        position: "absolute",
        left: "17.43%",
        right: "38.36%",
        top: "90.74%",
        bottom: "56.72%",
        background: "#FFFFFF",
        border: "2px solid #000000",
        borderRadius: "50%",
    };

    return (
        <div>
            <div style={image_style}>
                <div style={container_icon_style}></div>
            </div>
        </div>
    );
}

export default PreviewProfile;
